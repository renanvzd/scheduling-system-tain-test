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
    border-bottom: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
    border-left: 1px solid #f2f2f2;
    text-align: center;
    padding: 15px;
    width: 100%;
    white-space: nowrap;
    position: sticky;
    top: 0;
  }

  td {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 25px;
    white-space: nowrap;
  }
`;

export const TableContainerEmpty = styled.div`
  width: 1380px;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  margin: auto;
  
  
  .title {
    font-size: 2rem;
    font-weight: bolder;
    text-align: center;
    padding-bottom: 30px;
  }
  
  .text {
    font-size: 1.5rem;
  }

  .data {
    background: #d5d5d5;
    margin-top: 20px;
    padding: 25px;
  }

  .data-title {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    padding-bottom: 1rem;
  }
  
  .data-text {
    text-align: center;
    font-size: 1.5rem;
  }

`