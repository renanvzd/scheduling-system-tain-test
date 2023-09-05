import { useDataContext } from '@/context/data-context';
import { useState, useEffect } from 'react';

import { useTimeSlots } from '@/hooks/useTimeSlots';
import { useRenderScheduleRows } from '@/hooks/useRenderScheduleRows';

import { ButtonSelectShift } from '@/components/Scheduling/ButtonSelectShift';
import { ButtonAddGamePresenter } from '@/components/GamePresenters/ButtonAddGamePresenter';
import { ModalAddGamePresenter } from '@/components/GamePresenters/ModalAddGamePresenter';

import {
  Container,
  ButtonsContainer,
  TableContainer,
  TableContainerEmpty,
} from './styles';

interface IGamePresenters {
  id: number;
  name: string;
  age: string;
  createdAt: string;
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

  const timeSlots = useTimeSlots(shiftStartTime, shiftEndTime, intervalInMinutes);
  const renderScheduleRows = useRenderScheduleRows(gamePresentersByShift, timeSlots, casinoTables);


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
        {!selectedShift ?
          <div className='title-section'>
            <p className="title">Please, select the shift you want to check:</p>
          </div>
          : null
        }
        <div className='button-section'>
          <ButtonSelectShift
            onSelect={selectedShift === '1'}
            shiftTitle="1st Shift"
            onClick={() => handleShiftSelection('1')}
          />
          <ButtonSelectShift
            onSelect={selectedShift === '2'}
            shiftTitle="2nd Shift"
            onClick={() => handleShiftSelection('2')}
          />
          <ButtonSelectShift
            onSelect={selectedShift === '3'}
            shiftTitle="3rd Shift"
            onClick={() => handleShiftSelection('3')}
          />
        </div>
      </ButtonsContainer>

      {!shiftIdentification ? (
        <Container>
          <TableContainerEmpty>
            <div>
              <div>
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
              <tbody>{renderScheduleRows}</tbody>
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
