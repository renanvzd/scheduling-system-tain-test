import { useDataContext } from '@/context/data-context';
import { useState } from "react";

import { ButtonSelectShift } from '@/components/Scheduling/ButtonSelectShift';
import { ButtonAddGamePresenter } from '@/components/GamePresenters/ButtonAddGamePresenter';
import { ModalAddGamePresenter } from "@/components/GamePresenters/ModalAddGamePresenter";

import { Container, ButtonsContainer, TableContainer, TableContainerEmpty } from "./styles";

interface CasinoTable {
  id: number;
  tableNumber: string;
}

interface IGamePresenters {
  id: number;
  name: string;
  age: string;
  admissionDate: string;
}

export function ShiftTable() {
  const { gamePresenters, addGamePresenter, casinoTables } = useDataContext();
  const [modalOpen, setModalOpen] = useState(false);

  const gamePresentersInsufficient = gamePresenters.length <= casinoTables.length

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

  function renderScheduleRows(gamePresenters: IGamePresenters[], timeSlots: string[], tables: CasinoTable[]) {
    const difference = gamePresenters.length - tables.length;
    const updatedTables = [...tables];

    if (gamePresenters.length > tables.length) {
      for (let i = 0; i < difference; i++) {
        updatedTables.push({ id: updatedTables.length + 1, tableNumber: "Break" });
      }
      return gamePresenters.map((gamePresenter, gpIndex) => {
        const { id, name } = gamePresenter;
        const tableCells = timeSlots.map((timeSlot, timeSlotIndex) => {
          const tableIndex = (timeSlotIndex + gpIndex) % updatedTables.length;
          const { tableNumber } = updatedTables[tableIndex];
          const isBreak = tableNumber === "Break";

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
            <td style={{ fontWeight: 'bold' }}>
              {name}
            </td>
            {tableCells}
          </tr>
        );
      });
    }

    if (gamePresenters.length <= tables.length) {
      return null;
    }
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  const handleAddGamePresenter = async (gamePresenters: Omit<IGamePresenters, 'id'>) => {
    await addGamePresenter(gamePresenters);
  }

  return (
    <>
      <ButtonsContainer>
        <ButtonSelectShift firstShift={true} shiftTitle='1st Shift' />
        <ButtonSelectShift secondShift={true} shiftTitle='2nd Shift' />
        <ButtonSelectShift thirdShift={true} shiftTitle='3rd Shift' />
      </ButtonsContainer>
      <Container>
        {!gamePresentersInsufficient ?
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
          :
          <TableContainerEmpty>
            <div>
              <div>
                <p className="title">Notice Message </p>
                <p className='text'>Number of Game Presenters less than the number of registered tables.</p>
                <p className='text'>The ideal number of game presenters per rotation is the number of tables + 1.</p>
              </div>
              <div className='data'>
                <p className='data-title'>Current Game Presenters and Casino Tables</p>
                <p className='data-text'>Game Presenters: {gamePresenters.length}</p>
                <p className='data-text'>Casino Tables: {casinoTables.length}</p>
              </div>
              <div>
                <ButtonAddGamePresenter openModal={toggleModal} />
                <ModalAddGamePresenter
                  isOpen={modalOpen}
                  setIsOpen={toggleModal}
                  handleAddGamePresenter={handleAddGamePresenter}
                />
              </div>
            </div>
          </TableContainerEmpty>
        }
      </Container>
    </>
  );
}
