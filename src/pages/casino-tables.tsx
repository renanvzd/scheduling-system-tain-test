import { useEffect, useState } from "react";
import api from "@/services/api";

import { Layout } from "@/components/Layout"

import { Header } from "../styles/styles";
import { CasinoTablesList } from "@/components/CasinoTables/TablesList";
import { ButtonAddCasinoTables } from "@/components/CasinoTables/ButtonAddCasinoTables";
import { ModalAddTable } from "@/components/CasinoTables/ModalAddTable";
import { ModalEditTable } from "@/components/CasinoTables/ModalEditTable";

interface ICasinoTable {
  id: number;
  tableNumber: string;
  game: string;
  creationDate: string;
}

export default function Tables() {
  const [tables, setTables] = useState<ICasinoTable[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTable, setEditingTable] = useState<ICasinoTable>({} as ICasinoTable);
  const [editModalOpen, setEditModalOpen] = useState(false);

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

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen);
  }

  const handleEditTable = (table: ICasinoTable) => {
    setEditModalOpen(true);
    setEditingTable(table);
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

  const handleUpdateTable = async (table: Omit<ICasinoTable, 'id'>): Promise<void> => {
    try {
      const tableUpdated = await api.put(
        `/casino-tables/${editingTable.id}`,
        { ...editingTable, ...table },
      );

      const tablesUpdated = tables.map(employee =>
        employee.id !== tableUpdated.data.id ? employee : tableUpdated.data,
      );

      setTables(tablesUpdated);
    } catch (err) {
      console.log(err);
    }
  }

  const handleDeleteTable = async (id: number) => {
    await api.delete(`/casino-tables/${id}`);

    const employeesFiltered = tables.filter(table => table.id !== id);

    setTables(employeesFiltered);
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
      <ModalEditTable
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingTable={editingTable}
        handleUpdateTable={handleUpdateTable}
      />
      <CasinoTablesList
        tables={tables}
        handleEditTable={handleEditTable}
        handleDelete={handleDeleteTable}
      />
    </Layout>
  )
}