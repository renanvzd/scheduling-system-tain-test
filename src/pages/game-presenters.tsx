import { useEffect, useState } from "react";
import api from "@/services/api";

import { Layout } from "@/components/Layout"
import { GamePresentersContent } from "@/components/GamePresentersContent"
import { ModalAddEmployee } from "@/components/ModalAddEmployee";
import { ButtonAddEmployee } from "@/components/ButtonAddEmployee"

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

  useEffect(() => {
    async function getEmployees() {
      const response = await api.get('/employees');

      setEmployees(response.data);
    }
    getEmployees()
  }, [])


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

  const toggleModal = () => {
    setModalOpen(!modalOpen);
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
      <GamePresentersContent />
    </Layout>
  )
}