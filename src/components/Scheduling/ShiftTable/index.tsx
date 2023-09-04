import { useDataContext } from '@/context/data-context';
import { useState, useEffect } from 'react';

import { ButtonSelectShift } from '@/components/Scheduling/ButtonSelectShift';
import { ButtonAddGamePresenter } from '@/components/GamePresenters/ButtonAddGamePresenter';
import { ModalAddGamePresenter } from '@/components/GamePresenters/ModalAddGamePresenter';

import {
  Container,
  ButtonsContainer,
  TableContainer,
  TableContainerEmpty,
} from './styles';

interface CasinoTable {
  id: number;
  tableNumber: string;
}

interface IGamePresenters {
  id: number;
  name: string;
  age: string;
  admissionDate: string;
  shift: string;
}

export function ShiftTable() {
  const { gamePresenters, addGamePresenter, casinoTables } = useDataContext();
  const [modalOpen, setModalOpen] = useState(false);

  const [selectedShift, setSelectedShift] = useState('');
  const [shiftIdentification, setShiftIdentification] = useState('');
  const [shiftStartTime, setShiftStartTime] = useState(0);
  const [shiftEndTime, setShiftEndTime] = useState(0);

  const [gamePresentersByShift, setGamePresentersByShift] = useState<IGamePresenters[]>([]);

  const gamePresentersFirstShift = gamePresenters.filter((gamePresenter) => gamePresenter.shift === "1");
  const gamePresentersSecondShift = gamePresenters.filter((gamePresenter) => gamePresenter.shift === "2");
  const gamePresentersThirdShift = gamePresenters.filter((gamePresenter) => gamePresenter.shift === "3");

  const gamePresentersInsufficient = gamePresentersByShift.length <= casinoTables.length;

  const firstShiftStartAt = 0 * 60    // 00:00
  const firstShiftEndAt = 7.8 * 60    // 08:00

  const secondShiftStartAt = 8 * 60   // 08:00
  const secondShiftEndAt = 15.8 * 60  // 16:00

  const thirdShiftStartAt = 16 * 60   // 16:00
  const thirdShiftEndAt = 23.8 * 60   // 24:00

  const intervalInMinutes = 20

  const timeSlots: string[] = generateTimeSlots(shiftStartTime, shiftEndTime, intervalInMinutes);


  const handleShiftSelection = (shift: string) => {
    setSelectedShift(shift);
    switch (shift) {
      case '1':
        setShiftStartTime(firstShiftStartAt);
        setShiftEndTime(firstShiftEndAt);
        setGamePresentersByShift(gamePresentersFirstShift);
        setShiftIdentification('1st Shift')
        break;
      case '2':
        setShiftStartTime(secondShiftStartAt);
        setShiftEndTime(secondShiftEndAt);
        setGamePresentersByShift(gamePresentersSecondShift);
        setShiftIdentification('2nd Shift')
        break;
      case '3':
        setShiftStartTime(thirdShiftStartAt);
        setShiftEndTime(thirdShiftEndAt);
        setGamePresentersByShift(gamePresentersThirdShift);
        setShiftIdentification('3rd Shift')
        break;
      default:
        null
        break;
    }
  };

  useEffect(() => {
    handleShiftSelection(selectedShift);
  }, [selectedShift, gamePresenters]);


  function renderTimeSlots(timeSlots: string[]) {
    return timeSlots.map((timeSlot) => <th key={timeSlot}>{timeSlot}</th>);
  }

  function generateTimeSlots(startTime: number, endTime: number, intervalInMinutesMinutes: number): string[] {
    const timeSlots: string[] = [];

    for (let currentTime = startTime; currentTime <= endTime; currentTime += intervalInMinutesMinutes) {
      const startHour = Math.floor(currentTime / 60);
      const startMinute = currentTime % 60;

      const endTime = currentTime + intervalInMinutesMinutes;
      const endHour = Math.floor(endTime / 60);
      const endMinute = endTime % 60;

      const formattedStartTime = `${startHour.toString().padStart(2, '0')}:${startMinute.toString().padStart(2, '0')}`;
      const formattedEndTime = `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;

      const timeSlotLabel = `${formattedStartTime} - ${formattedEndTime}`;

      timeSlots.push(timeSlotLabel);
    }

    return timeSlots;
  }

  function renderScheduleRows(
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

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleAddGamePresenter = async (gamePresenters: Omit<IGamePresenters, 'id'>) => {
    await addGamePresenter(gamePresenters);
    setModalOpen(false);
  };

  return (
    <>
      <ButtonsContainer>
        <ButtonSelectShift
          firstShift={true}
          shiftTitle="1st Shift"
          onClick={() => handleShiftSelection('1')}
        />
        <ButtonSelectShift
          secondShift={true}
          shiftTitle="2nd Shift"
          onClick={() => handleShiftSelection('2')}
        />
        <ButtonSelectShift
          thirdShift={true}
          shiftTitle="3rd Shift"
          onClick={() => handleShiftSelection('3')}
        />
      </ButtonsContainer>

      {!shiftIdentification ? (
        <Container>
          <TableContainerEmpty>
            <div>
              <div>
                <p className="title">Please, select the shift you want to check.</p>
                <p className="text">First Shift - From: 00:00 To: 08:00</p>
                <p className="text">Second Shift - From: 08:00 To: 16:00</p>
                <p className="text">Third Shift - From: 16:00 To: 24:00</p>
              </div>
              <div className="data">
                <p className="data-title">Current Game Presenters and Casino Tables</p>
                <p className="data-text">Game Presenters on 1st Shift: <b>{gamePresentersFirstShift.length}</b></p>
                <p className="data-text">Game Presenters on 2nd Shift: <b>{gamePresentersSecondShift.length}</b></p>
                <p className="data-text">Game Presenters on 3rd Shift: <b>{gamePresentersThirdShift.length}</b></p>
                <p className="data-text">Casino Tables: <b>{casinoTables.length}</b></p>
              </div>
            </div>
          </TableContainerEmpty>
        </Container>
      )
        : null
      }
      {!!shiftIdentification && !gamePresentersInsufficient ? (
        <Container>
          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>Game Presenter</th>
                  {renderTimeSlots(timeSlots)}
                </tr>
              </thead>
              <tbody>{renderScheduleRows(gamePresentersByShift, timeSlots, casinoTables)}</tbody>
            </table>
          </TableContainer>
        </Container>
      ) : null}

      {!!shiftIdentification && gamePresentersInsufficient ? (
        <Container>
          <TableContainerEmpty>
            <div>
              <div>
                <p className="title">Notice Message: {shiftIdentification}</p>
                <p className="text">Number of Game Presenters less than the number of registered tables.</p>
                <p className="text">The ideal number of game presenters per rotation is the number of tables + 1.</p>
              </div>
              <div className="data">
                <p className="data-title">Current Game Presenters and Casino Tables</p>
                <p className="data-text">Game Presenters on {shiftIdentification}: <b>{gamePresentersByShift.length}</b></p>
                <p className="data-text">Casino Tables: <b>{casinoTables.length}</b></p>
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
        </Container >
      ) : null}
    </>
  );
}
