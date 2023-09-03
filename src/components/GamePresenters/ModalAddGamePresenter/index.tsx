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
}

interface ModalAddGamePresenter {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddGamePresenter: (data: AddGamePresenter) => void;
}

export function ModalAddGamePresenter({ isOpen, setIsOpen, handleAddGamePresenter }: ModalAddGamePresenter) {

  const handleSubmit = async (data: AddGamePresenter) => {
    handleAddGamePresenter(data);
    setIsOpen();
  };

  const formRef = useRef<FormHandles>(null);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <p className='modal-title'>New Game Presenter</p>
        <Input name="name" placeholder="Game presenter name" />
        <Input name="age" placeholder="Age" />

        <Input name="admissionDate" placeholder="Admission date" />
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

