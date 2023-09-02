import { useEffect, useState } from "react";
import api from "@/services/api";

import { Layout } from "@/components/Layout"

import { Header } from "../styles/styles";
import { CasinoTablesList } from "@/components/CasinoTables/TablesList";
import { ButtonAddCasinoTables } from "@/components/CasinoTables/ButtonAddCasinoTables";
import { ModalAddTable } from "@/components/CasinoTables/ModalAddTable";

interface ICasinoTable {
  id: number;
  tableNumber: string;
  game: string;
  creationDate: string;
}


export default function Tables() {
  const [tables, setTables] = useState<ICasinoTable[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function getTables() {
      const response = await api.get('/casino-tables');

      setTables(response.data);
    }
    getTables()
  }, [])

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  async function handleAddTable(employee: Omit<ICasinoTable, 'id'>,): Promise<void> {
    try {
      const response = await api.post('/casino-tables', {
        ...employee,
      });

      setTables([...tables, response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Layout>
      <Header>
        <p>Casino Tables</p>
      </Header>
      <ButtonAddCasinoTables openModal={toggleModal} />
      <ModalAddTable
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddTable={handleAddTable}
      />
      <CasinoTablesList tables={tables} />
    </Layout>
  )
}