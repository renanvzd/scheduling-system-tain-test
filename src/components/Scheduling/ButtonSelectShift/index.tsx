import { ButtonShift } from './styles';

interface ButtonSelectShiftProps {
  shiftTitle: string;
  firstShift?: boolean;
  secondShift?: boolean;
  thirdShift?: boolean;
}

export function ButtonSelectShift({ shiftTitle, firstShift, secondShift, thirdShift }: ButtonSelectShiftProps) {
  return (
    <ButtonShift firstShift={firstShift} secondShift={secondShift} thirdShift={thirdShift}>
      <button type="button">
        <div className="text">{shiftTitle}</div>
      </button>
    </ButtonShift>
  );
}