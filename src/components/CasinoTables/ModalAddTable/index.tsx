import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import { Modal } from '@/components/Modal';
import { Input } from '@/components/Input';
import { Form } from './styles';

interface AddTable {
  tableNumber: string;
  game: string;
  creationDate: string;
}

interface ModalAddEmployee {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddTable: (data: AddTable) => void;
}

export function ModalAddTable({ isOpen, setIsOpen, handleAddTable }: ModalAddEmployee) {

  const handleSubmit = async (data: AddTable) => {
    handleAddTable(data);
    setIsOpen();
  };

  const formRef = useRef<FormHandles>(null);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <p className='modal-title'>New Game Table</p>
        <Input name="tableNumber" placeholder="Table Number" />
        <Input name="game" placeholder="Game" />
        <Input name="creationDate" placeholder="Creation Date" />

        <button type="submit">
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
          <p className="text-button">Add new table</p>
        </button>
      </Form>
    </Modal>
  );
}

