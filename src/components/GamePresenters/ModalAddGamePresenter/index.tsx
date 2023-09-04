import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import { Modal } from '@/components/Modal';
import { Input } from '@/components/Input';
import { Form } from './styles';

interface AddGamePresenter {
  name: string;
  age: string;
  admissionDate: string;
  shift: string;
}

interface ModalAddGamePresenterProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddGamePresenter: (data: AddGamePresenter) => void;
}

export function ModalAddGamePresenter({
  isOpen,
  setIsOpen,
  handleAddGamePresenter,
}: ModalAddGamePresenterProps) {
  const handleSubmit = async (data: AddGamePresenter) => {
    handleAddGamePresenter(data);
    setIsOpen();
  };

  const formRef = useRef<FormHandles>(null);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <p className="modal-title">New Game Presenter</p>
        <Input name="name" placeholder="Game presenter name" input={true} />
        <Input name="age" placeholder="Age" input={true} />
        <Input name="admissionDate" placeholder="Admission date" input={true} />
        <Input
          name="shift"
          placeholder="Shift"
          select={true}
        >
          <option value="1">First Shift - from 00:00 to 08:00</option>
          <option value="2">Second Shift - from 08:00 to 16:00</option>
          <option value="3">Third Shift - from 16:00 to 00:00</option>
        </Input>
        <button type="submit">
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
          <p className="text-button">Add new game presenter</p>
        </button>
      </Form>
    </Modal>
  );
}
