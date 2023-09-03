import { useState } from "react";
import { useDataContext } from '@/context/data-context';

import { Layout } from "@/components/Layout";
import { GamePresentersList } from "@/components/GamePresenters/ProfileList";
import { ModalAddEmployee } from "@/components/GamePresenters/ModalAddEmployee";
import { ModalEditEmployee } from "@/components/GamePresenters/ModalEditEmployee";
import { ButtonAddEmployee } from "@/components/GamePresenters/ButtonAddEmployee";

import { Header } from "../styles/styles";

interface IEmployees {
  id: number;
  name: string;
  age: string;
  admissionDate: string;
}

export default function GamePresenters() {
  const { employees, addEmployee, updateEmployee, deleteEmployee } = useDataContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<IEmployees | {}>({});
  const [editModalOpen, setEditModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen);
  }

  const handleEditEmployee = (employee: IEmployees) => {
    setEditModalOpen(true);
    setEditingEmployee(employee);
  }

  const handleAddEmployee = async (employee: Omit<IEmployees, 'id'>) => {
    await addEmployee(employee);
  }

  const handleUpdateEmployee = async (employee: Omit<IEmployees, 'id'>) => {
    if ('id' in editingEmployee) {
      await updateEmployee({ ...editingEmployee, ...employee } as IEmployees);
    }
  }

  const handleDeleteEmployee = async (id: number) => {
    await deleteEmployee(id);
  }

  return (
    <Layout>
      <div>
        <Header>
          <p>Game Presenters</p>
        </Header>
      </div>
      <ButtonAddEmployee openModal={toggleModal} />
      <ModalAddEmployee
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddEmployee={handleAddEmployee}
      />
      <ModalEditEmployee
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingEmployee={editingEmployee as IEmployees}
        handleUpdateEmployee={handleUpdateEmployee}
      />
      <GamePresentersList
        employees={employees}
        handleEditEmployee={handleEditEmployee}
        handleDelete={handleDeleteEmployee}
      />
    </Layout>
  )
}