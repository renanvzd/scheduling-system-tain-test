import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '@/components/Modal';
import { Input } from '@/components/Input';
import { FormHandles } from '@unform/core';


interface AddTable {
  tableNumber: string;
  game: string;
  creationDate: string;
}

interface ITables {
  id: number;
  tableNumber: string;
  game: string;
  creationDate: string;
}

interface ModalEditEmployeeProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateTable: (data: AddTable) => void;
  editingTable: ITables;
}

export function ModalEditTable({ isOpen, setIsOpen, handleUpdateTable, editingTable }: ModalEditEmployeeProps) {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: AddTable) => {
    handleUpdateTable(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingTable}>
        <p className='modal-title'>Edit Casino Table</p>
        <Input name="tableNumber" placeholder="Table Number" />
        <Input name="game" placeholder="Game" />
        <Input name="creationDate" placeholder="Creation date" />

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