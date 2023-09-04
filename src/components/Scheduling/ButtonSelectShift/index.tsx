import { ButtonShift } from './styles';

interface ButtonSelectShiftProps {
  shiftTitle: string;
  firstShift?: boolean;
  secondShift?: boolean;
  thirdShift?: boolean;
  onClick: () => void;
}

export function ButtonSelectShift({ shiftTitle, firstShift, secondShift, thirdShift, onClick }: ButtonSelectShiftProps) {
  return (
    <ButtonShift firstShift={firstShift} secondShift={secondShift} thirdShift={thirdShift}>
      <button type="button" onClick={onClick}>
        <div className="text">{shiftTitle}</div>
      </button>
    </ButtonShift>
  );
}
