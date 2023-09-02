import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '@/components/Modal';
import { Input } from '@/components/Input';
import { FormHandles } from '@unform/core';


interface AddEmployee {
  name: string;
  age: string;
  admissionDate: string;
}

interface IEmployees {
  id: number;
  name: string;
  age: string;
  admissionDate: string;
}

interface ModalEditEmployeeProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateEmployee: (data: AddEmployee) => void;
  editingEmployee: IEmployees;
}

export function ModalEditEmployee({ isOpen, setIsOpen, handleUpdateEmployee, editingEmployee }: ModalEditEmployeeProps) {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: AddEmployee) => {
    handleUpdateEmployee(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingEmployee}>
        <p className='modal-title'>Edit Game Presenter</p>
        <Input name="name" placeholder="Employee name" />
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
