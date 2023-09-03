import React from "react";
import { Container, TableContainer } from "./styles";

interface Table {
  id: number;
  tableNumber: string;
}

interface GamePresenter {
  id: number;
  name: string;
}

function generateTimeSlots(startTimeShift: number, endTimeShift: number, interval: number): string[] {
  const timeSlots: string[] = [];

  for (let i = startTimeShift; i <= endTimeShift; i += interval) {
    const startHour = Math.floor(i / 60);
    const startMinute = i % 60;
    const endHour = Math.floor((i + interval) / 60);
    const endMinute = (i + interval) % 60;
    const timeSlotLabel = `${startHour}:${startMinute.toString().padStart(2, '0')} - ${endHour}:${endMinute.toString().padStart(2, '0')}`;
    timeSlots.push(timeSlotLabel);
  }

  return timeSlots;
}

function renderTimeSlots(timeSlots: string[]) {
  return timeSlots.map((timeSlot) => (
    <th key={timeSlot}>{timeSlot}</th>
  ));
}

function renderScheduleRows(gamePresenters: GamePresenter[], timeSlots: string[], tables: Table[]) {
  const difference = gamePresenters.length - tables.length;
  const updatedTables = [...tables];

  if (gamePresenters.length > tables.length) {
    for (let i = 0; i < difference; i++) {
      updatedTables.push({ id: updatedTables.length + 1, tableNumber: "Break" });
    }

    return gamePresenters.map((gp, gpIndex) => (
      <tr key={gp.id}>
        <td>{gp.name}</td>
        {timeSlots.map((timeSlot, timeSlotIndex) => {
          // Calculate the table index based on the time slot index and presenter index
          const tableIndex = (timeSlotIndex + gpIndex) % updatedTables.length;
          const table = updatedTables[tableIndex];

          return <td key={timeSlot}>{table.tableNumber}</td>;
        })}
      </tr>
    ));
  }

  if (gamePresenters.length === tables.length) {
    for (let i = 0; i === difference; i++) {
      updatedTables.push({ id: updatedTables.length + 1, tableNumber: "Break" });
    }

    return gamePresenters.map((gp, gpIndex) => (
      <tr key={gp.id}>
        <td>{gp.name}</td>
        {timeSlots.map((timeSlot, timeSlotIndex) => {
          // Calculate the table index based on the time slot index and presenter index
          const tableIndex = (timeSlotIndex + gpIndex) % updatedTables.length;
          const table = updatedTables[tableIndex];

          return <td key={timeSlot}>{table.tableNumber}</td>;
        })}
      </tr>
    ));
  }

  if (gamePresenters.length < tables.length) {
    return null;
  }

  return gamePresenters.map((gp, gpIndex) => (
    <tr key={gp.id}>
      <td>{gp.name}</td>
      {timeSlots.map((timeSlot, timeSlotIndex) => {
        // Calculate the table index based on the time slot index and presenter index
        const tableIndex = (timeSlotIndex + gpIndex) % tables.length;
        const table = tables[tableIndex];

        return <td key={timeSlot}>{table.tableNumber}</td>;
      })}
    </tr>
  ));
}

export function Scheduling() {
  const tables: Table[] = [
    { id: 1, tableNumber: 'Table 1' },
    { id: 2, tableNumber: 'Table 2' },
    { id: 3, tableNumber: 'Table 3' },
  ];

  const gamePresenters: GamePresenter[] = [
    { id: 1, name: 'GP 1' },
    { id: 2, name: 'GP 2' },
    { id: 3, name: 'GP 3' },
    { id: 4, name: 'GP 4' },
  ];

  const startTimeShift = 8 * 60;
  const endTimeShift = 15.8 * 60;
  const interval = 20;

  const timeSlots: string[] = generateTimeSlots(startTimeShift, endTimeShift, interval);

  const gamePresentersInsufficient = gamePresenters.length < tables.length


  return (
    <Container>
      <div>
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
                {renderScheduleRows(gamePresenters, timeSlots, tables)}
              </tbody>
            </table>
          </TableContainer>
          :
          <div>
            <p>Error: </p>
            <p>Number of game presenters less than the number of registered tables. The ideal number of game presenters per rotation is the number of tables + 1.</p>
            <p>Current Game Presenters and Casino Tables</p>
            <p>Game Presenters: {gamePresenters.length}</p>
            <p>Casino Tables: {tables.length}</p>
          </div>
        }
      </div>
    </Container>
  );
}