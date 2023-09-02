import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  .modal-title {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
  }

  button {
    margin-top: 48px;
    align-self: flex-end;
  }

  button {
    background: #39a805;
    color: #fff;
    font-weight: 600;
    border-radius: 8px;
    border: 0;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text-button {
      font-size: 1rem;
      padding: 16px 24px;
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
`;
