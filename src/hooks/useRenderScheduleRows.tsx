interface CasinoTable {
  id: number;
  tableNumber: string;
}

interface IGamePresenters {
  id: number;
  name: string;
  age: string;
  createdAt: string;
  shift: string;
}

export function useRenderScheduleRows(
  gamePresentersByShift: IGamePresenters[],
  timeSlots: string[],
  tables: CasinoTable[]
) {
  const difference = gamePresentersByShift.length - tables.length;
  const updatedTables = [...tables];

  if (gamePresentersByShift.length > tables.length) {
    for (let i = 0; i < difference; i++) {
      updatedTables.push({ id: updatedTables.length + 1, tableNumber: 'Break' });
    }
    return gamePresentersByShift.map((gamePresenter, gpIndex) => {
      const { id, name } = gamePresenter;
      const tableCells = timeSlots.map((timeSlot, timeSlotIndex) => {
        const tableIndex = (timeSlotIndex + gpIndex) % updatedTables.length;
        const { tableNumber } = updatedTables[tableIndex];
        const isBreak = tableNumber === 'Break';

        const cellStyle = {
          fontWeight: isBreak ? 'bold' : 'normal',
          backgroundColor: isBreak ? '#aeaeae' : 'transparent',
        };

        return (
          <td key={timeSlot} style={cellStyle}>
            {tableNumber}
          </td>
        );
      });

      return (
        <tr key={id}>
          <td style={{ fontWeight: 'bold' }}>{name}</td>
          {tableCells}
        </tr>
      );
    });
  }

  if (gamePresentersByShift.length <= tables.length) {
    return null;
  }
}