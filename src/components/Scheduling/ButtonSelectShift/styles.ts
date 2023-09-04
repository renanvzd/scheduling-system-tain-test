import styled, { css } from 'styled-components';

interface ShiftButtonProps {
  onSelect?: boolean;
}

const shiftStyles = {
  onSelect: css`
    background: #39a805;
    border-color: #636379;
    color: #fff;
    border-radius: 8px;
  `,
};

const shiftStylesHover = {
  onSelect: css`
    background: #39a805;
    border-color: #4a4a5a;
    border-radius: 8px;
    color: #fff;
  `,
};

export const ButtonShift = styled.div<ShiftButtonProps>`
  padding: 20px 0 0 0;
  button {
    background: #9a9a9a;
    width: 290px;
    border-radius: 8px;
      ${({ onSelect }) => {
    if (onSelect) return shiftStyles.onSelect;
  }}
      .text-button {
        color: #000;
        font-weight: 600;
        padding: 16px 0px;
        font-size: 1rem;
        ${({ onSelect }) => {
    if (onSelect) return shiftStyles.onSelect;
  }}}
  }

  button:hover {
    background: #9ae079;
    ${({ onSelect }) => {
    if (onSelect) return shiftStylesHover.onSelect;
  }}
  }
`;
