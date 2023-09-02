import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import { Modal } from '@/components/Modal';
import { Input } from '@/components/Input';
import { Form } from './styles';

interface AddEmployee {
  name: string;
  age: string;
  admissionDate: string;
}

interface ModalAddEmployee {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddEmployee: (data: AddEmployee) => void;
}

export function ModalAddEmployee({ isOpen, setIsOpen, handleAddEmployee }: ModalAddEmployee) {

  const handleSubmit = async (data: AddEmployee) => {
    handleAddEmployee(data);
    setIsOpen();
  };

  const formRef = useRef<FormHandles>(null);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <p className='modal-title'>New Game Presenter</p>
        <Input name="name" placeholder="Employee name" />
        <Input name="age" placeholder="Age" />

        <Input name="admissionDate" placeholder="Admission date" />
        <button type="submit">
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
          <p className="text-button">Add new employee</p>
        </button>
      </Form>
    </Modal>
  );
}

