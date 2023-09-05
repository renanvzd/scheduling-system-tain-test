import styled from 'styled-components';

export const Container = styled.div`
  width: 1380px;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  margin: auto;

  p {
    padding: 40px 0 60px 0;
    font-size: 3rem;
    font-weight: bolder;
    text-align: center;
  }

  span {
    font-size: 2rem;
    font-weight: bold;

    & + span {
      font-weight: normal;
    }
  }
`;
