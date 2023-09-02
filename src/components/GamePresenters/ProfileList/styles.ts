import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const TableContainer = styled.table`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;

  table {
    border-collapse: collapse;
    width: 85%;
    margin-top: 40px;  
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
    padding: 8px;
  }

  td {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
    width: 40px; 
  }
`;



