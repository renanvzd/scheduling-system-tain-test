import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 0 0 0;

  header {
    margin: 0 0rem 0 4rem;
    padding: 0 0 0px;
    display: flex;
    align-items: center;
    justify-content: left;

    nav {
      div {
        display: flex;
        margin: auto;
        justify-content: center;
        align-items: center;

        button {
          background: #39a805;
          width: 290px;
          color: #fff;
          font-weight: 600;
          border-radius: 8px;
          border: 0;

          flex-direction: row;
          display: flex;
          margin: auto;
          justify-content: center;
          align-items: center;

          .text {
            padding: 16px 0px;
            font-size: 1rem;
            width: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20%;
            padding: 16px 0px;
            border-right: 1px solid #fff;
            margin: 0 auto;
          }
        }
        button:hover {
          background: #328c08;
        }
      }
    }
  }
`;
