import styled from 'styled-components';

export const ContainerInput = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  border-radius: 8px;

  padding: 18px 24px;
  width: 100%;
  font-size: 16px;

  & + div {
    margin-top: 24px;
  }

  input {
    color: #000;
    background: transparent;
    flex: 1;
    border: 0;
    outline: none;
    font-size: 1rem;

    &::placeholder {
      color: #b7b7cc;
    }
  }
`;

export const ContainerSelect = styled.div`
  background: #fff;
  display: flex;
  border-radius: 8px;
  font-size: 16px;

  select {
    padding: 18px 20px;
    color: #000;
    background: transparent;
    flex: 1;
    border: 0;
    outline: none;
    font-size: 1rem;
    cursor: pointer;
  }
`;
