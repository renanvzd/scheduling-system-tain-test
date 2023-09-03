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
  justify-content: center;
  width: 1280px;
  overflow-x: auto;
  
  table {
    border-collapse: collapse;
    margin-top: 40px;
    width: 100%;
  }

  tr {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    &:nth-child(even) {
      background-color: #f2f2f2;
    }
  }

  th {
    background-color: #f2f2f2;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    text-align: center;
    padding: 15px;
    width: 100%;
    white-space: nowrap;
  }

  td {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 25px;
    white-space: nowrap;
  }
`;
