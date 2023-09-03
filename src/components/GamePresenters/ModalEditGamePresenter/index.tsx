import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '@/components/Modal';
import { Input } from '@/components/Input';
import { FormHandles } from '@unform/core';


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
        <Input name="name" placeholder="Game presenter name" />
        <Input name="age" placeholder="Age" />
        <Input name="admissionDate" placeholder="Admission date" />

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
