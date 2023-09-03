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
        button {
          background: #39a805;
          color: #fff;
          font-weight: 600;
          border-radius: 8px;
          border: 0;

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 16px 24px;
            font-size: 1rem;
          }

          .icon {
            display: flex;
            padding: 16px 16px;
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
