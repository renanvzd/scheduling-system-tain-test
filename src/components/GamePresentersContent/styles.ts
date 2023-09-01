import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 1.75rem 0rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const TableContainer = styled.table`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;

  .add-button {
    display: flex;
    width: 80%;
    justify-content: left;
    margin-top: 1rem;

    button {
      background: #74ff93;
      font-size: 1rem;
      padding: 0.75rem;
      border-radius: 5px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;      cursor: pointer;
    }

    button:hover{
      background: #24ff55;
    }
  }

  table {
    border-collapse: collapse;
    width: 80%;
    margin-top: 20px;  
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



