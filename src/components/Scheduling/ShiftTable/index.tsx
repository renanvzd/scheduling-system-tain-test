import { useDataContext } from '@/context/data-context';

import { Container, TableContainer } from "./styles";

interface CasinoTable {
  id: number;
  tableNumber: string;
}

interface GamePresenter {
  id: number;
  name: string;
}

export function ShiftTable() {
  const { gamePresenters, casinoTables } = useDataContext();
  const startTimeShift = 8 * 60;    // From: 08 a.m.
  const endTimeShift = 15.8 * 60;   // To:   16 p.m.
  const interval = 20;

  const timeSlots: string[] = generateTimeSlots(startTimeShift, endTimeShift, interval);

  function renderTimeSlots(timeSlots: string[]) {
    return timeSlots.map((timeSlot) => (
      <th key={timeSlot}>{timeSlot}</th>
    ));
  }

  function generateTimeSlots(startTime: number, endTime: number, intervalMinutes: number): string[] {
    const timeSlots: string[] = [];

    for (let currentTime = startTime; currentTime <= endTime; currentTime += intervalMinutes) {
      const startHour = Math.floor(currentTime / 60);
      const startMinute = currentTime % 60;

      const endTime = currentTime + intervalMinutes;
      const endHour = Math.floor(endTime / 60);
      const endMinute = endTime % 60;

      const formattedStartTime = `${startHour}:${startMinute.toString().padStart(2, '0')}`;
      const formattedEndTime = `${endHour}:${endMinute.toString().padStart(2, '0')}`;

      const timeSlotLabel = `${formattedStartTime} - ${formattedEndTime}`;

      timeSlots.push(timeSlotLabel);
    }

    return timeSlots;
  }

  function renderScheduleRows(gamePresenters: GamePresenter[], timeSlots: string[], tables: CasinoTable[]) {
    return gamePresenters.map((gamePresenter, gpIndex) => {
      const { id, name } = gamePresenter;


      const tableCells = timeSlots.map((timeSlot, timeSlotIndex) => {
        const tableIndex = (timeSlotIndex + gpIndex) % tables.length;
        const { tableNumber } = tables[tableIndex];

        return (
          <td key={timeSlot}>
            {tableNumber}
          </td>
        );
      });

      return (
        <tr key={id}>
          <td>{name}</td>
          {tableCells}
        </tr>
      );
    });
  }

  return (
    <Container>
      <div>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Game Presenter</th>
                {renderTimeSlots(timeSlots)}
              </tr>
            </thead>
            <tbody>
              {renderScheduleRows(gamePresenters, timeSlots, casinoTables)}
            </tbody>
          </table>
        </TableContainer>
      </div>
    </Container>
  );
}
