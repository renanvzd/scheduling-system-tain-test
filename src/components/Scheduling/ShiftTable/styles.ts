import styled from 'styled-components';

export const ButtonsContainer = styled.main`
  width: 1380px;
  display: flex;
  flex-direction: column;
  margin: auto;
  
  justify-content: center;
  align-items: center;

  .title-section {
    display: flex;
    flex-direction: column;
    
    .title {
      padding-top: 20px;
      font-size: 2rem;
      font-weight: bolder;
      text-align: center;
    }
  }

  .button-section {
    display: flex;
    gap: 30px;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: ;
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
  height: 580px;
  overflow-x: auto;
  overflow-y: auto;

  margin-top: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border: 1px solid #dddddd;

  table {
    border-collapse: collapse;
    width: 100%;
  }

  tr {
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
    padding: 15px 15px;
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
      padding-bottom: 15px;
      font-size: 2rem;
      font-weight: bolder;
      text-align: center;
    }
  
  .text {
    font-size: 1.5rem;
    line-height: 35px;
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
    padding-top: 10px;
  }
`