import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: top;
  align-content: top;
  width: 1380px;
  height: 600px;
  overflow-x: auto;
  overflow-y: auto;

  margin-top: 30px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border: 1px solid #dddddd;

  table {
    border-collapse: collapse;
    width: 100%;
  }

  tr {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    &:nth-child(even) {
      background-color: #f2f2f2;
    }
  }

  th {
    background-color: #d5d5d5;
    border: 1px solid #f2f2f2;
    text-align: center;
    padding: 15px;
    width: 100%;
    white-space: nowrap;
    position: sticky;
    top: 0;
    z-index: 2; /* Adicione um índice z para garantir que o cabeçalho fique na parte superior */
  }

  td {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 25px;
    white-space: nowrap;
  }
`;
