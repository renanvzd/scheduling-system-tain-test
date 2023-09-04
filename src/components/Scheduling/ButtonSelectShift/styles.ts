import styled, { css } from 'styled-components';

interface ShiftButtonProps {
  firstShift?: boolean;
  secondShift?: boolean;
  thirdShift?: boolean;
}

const shiftStyles = {
  firstShift: css`
    background: #636379;
    border-color: #636379;
  `,
  secondShift: css`
    background: #4a4a5a;
    border-color: #4a4a5a;
  `,
  thirdShift: css`
    background: #4c4c4c;
    border-color: #4c4c4c;
  `,
};

const shiftStylesHover = {
  firstShift: css`
    background: #4a4a5a;
    border-color: #4a4a5a;
  `,
  secondShift: css`
    background: #6d6d95;
    border-color: #6d6d95;
  `,
  thirdShift: css`
    background: #0e0606;
    border-color: #0e0606;
  `,
};

export const ButtonShift = styled.div<ShiftButtonProps>`
  padding: 20px 0 0 0;
  button {
    ${({ firstShift, secondShift, thirdShift }) => {
    if (firstShift) return shiftStyles.firstShift;
    if (secondShift) return shiftStyles.secondShift;
    if (thirdShift) return shiftStyles.thirdShift;
  }}
    width: 290px;
    border-radius: 8px;
    border: 0;

    .text {
      color: #fff;
      font-weight: 600;
      padding: 16px 0px;
      font-size: 1rem;
    }
  }
  button:hover {
    ${({ firstShift, secondShift, thirdShift }) => {
    if (firstShift) return shiftStylesHover.firstShift;
    if (secondShift) return shiftStylesHover.secondShift;
    if (thirdShift) return shiftStylesHover.thirdShift;
  }}
  }
`;
