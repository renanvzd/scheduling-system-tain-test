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

interface ModalAddTable {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddTable: (data: AddTable) => void;
}

export function ModalAddTable({ isOpen, setIsOpen, handleAddTable }: ModalAddTable) {

  const handleSubmit = async (data: AddTable) => {
    handleAddTable(data);
    setIsOpen();
  };

  const formRef = useRef<FormHandles>(null);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <p className='modal-title'>New Casino Table</p>
        <Input name="tableNumber" placeholder="Table Number" input={true} />
        <Input name="game" placeholder="Game" input={true} />
        <Input name="creationDate" placeholder="Creation Date" input={true} />

        <button type="submit">
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
          <p className="text-button">Add new Casino Table</p>
        </button>
      </Form>
    </Modal>
  );
}

