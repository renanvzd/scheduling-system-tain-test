import { useEffect, useState } from "react";
import api from "@/services/api";

import { Layout } from "@/components/Layout"
import { GamePresentersList } from "@/components/GamePresenters/ProfileList"
import { ModalAddEmployee } from "@/components/GamePresenters/ModalAddEmployee";
import { ModalEditEmployee } from "@/components/GamePresenters/ModalEditEmployee";
import { ButtonAddEmployee } from "@/components/GamePresenters/ButtonAddEmployee"

import { Header } from "../styles/styles";

interface IEmployees {
  id: number;
  name: string;
  age: string;
  admissionDate: string;
}

export default function GamePresenters() {
  const [employees, setEmployees] = useState<IEmployees[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<IEmployees>({} as IEmployees);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function getEmployees() {
      const response = await api.get('/employees');

      setEmployees(response.data);
    }
    getEmployees()
  }, [])

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


  async function handleAddEmployee(employee: Omit<IEmployees, 'id'>,): Promise<void> {
    try {
      const response = await api.post('/employees', {
        ...employee,
      });

      setEmployees([...employees, response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpdateEmployee = async (employee: Omit<IEmployees, 'id'>): Promise<void> => {
    try {
      const employeeUpdated = await api.put(
        `/employees/${editingEmployee.id}`,
        { ...editingEmployee, ...employee },
      );

      const employeesUpdated = employees.map(employee =>
        employee.id !== employeeUpdated.data.id ? employee : employeeUpdated.data,
      );

      setEmployees(employeesUpdated);
    } catch (err) {
      console.log(err);
    }
  }

  const handleDeleteEmployee = async (id: number) => {
    await api.delete(`/employees/${id}`);

    const employeesFiltered = employees.filter(employee => employee.id !== id);

    setEmployees(employeesFiltered);
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
        editingEmployee={editingEmployee}
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