import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: #fff;
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

  svg {
    margin-right: 16px;
  }
`;
