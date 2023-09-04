import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Modal } from '@/components/Modal';
import { Input } from '@/components/Input';
import { FormHandles } from '@unform/core';

import { Form } from './styles';

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

interface ModalEditGamePresenterProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateTable: (data: AddTable) => void;
  editingTable: ITables;
}

export function ModalEditTable({ isOpen, setIsOpen, handleUpdateTable, editingTable }: ModalEditGamePresenterProps) {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: AddTable) => {
    handleUpdateTable(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingTable}>
        <p className='modal-title'>Edit Casino Table</p>
        <Input name="tableNumber" placeholder="Table Number" input={true} />
        <Input name="game" placeholder="Game" input={true} />
        <Input name="creationDate" placeholder="Creation date" input={true} />

        <button type="submit">
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
          <div className="text-button">Edit Casino Table</div>
        </button>
      </Form>
    </Modal>
  );

}
