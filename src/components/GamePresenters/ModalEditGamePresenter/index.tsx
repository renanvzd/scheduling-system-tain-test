import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import { Modal } from '@/components/Modal';
import { Input } from '@/components/Input';
import { Form } from './styles';

interface AddGamePresenters {
  name: string;
  age: string;
  admissionDate: string;
}

interface IGamePresenters {
  id: number;
  name: string;
  age: string;
  admissionDate: string;
}

interface ModalEditGamePresenterProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateGamePresenter: (data: AddGamePresenters) => void;
  editingGamePresenter: IGamePresenters;
}

export function ModalEditGamePresenter({ isOpen, setIsOpen, handleUpdateGamePresenter, editingGamePresenter }: ModalEditGamePresenterProps) {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: AddGamePresenters) => {
    handleUpdateGamePresenter(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingGamePresenter}>
        <p className='modal-title'>Edit Game Presenter</p>
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
          <div className="text-button">Edit Game Presenter</div>
        </button>
      </Form>
    </Modal>
  );

}
