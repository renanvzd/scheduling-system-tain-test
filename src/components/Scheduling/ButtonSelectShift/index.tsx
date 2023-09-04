import { ButtonShift } from './styles';

interface ButtonSelectShiftProps {
  shiftTitle: string;
  onSelect?: boolean;
  onClick: () => void;
}

export function ButtonSelectShift({ shiftTitle, onSelect, onClick }: ButtonSelectShiftProps) {
  return (
    <ButtonShift onSelect={onSelect} >
      <button type="button" onClick={onClick}>
        <div className="text-button">{shiftTitle}</div>
      </button>
    </ButtonShift>
  );
}
