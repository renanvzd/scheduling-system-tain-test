import { useState } from "react";
import { useDataContext } from '@/context/data-context';

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
  const { casinoTables, addCasinoTable, updateCasinoTable, deleteCasinoTable } = useDataContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTable, setEditingTable] = useState<ICasinoTable>({} as ICasinoTable);
  const [editModalOpen, setEditModalOpen] = useState(false);

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

  const handleAddTable = async (table: Omit<ICasinoTable, 'id'>) => {
    await addCasinoTable(table);
  }

  const handleUpdateTable = async (table: Omit<ICasinoTable, 'id'>) => {
    if ('id' in editingTable) {
      await updateCasinoTable({ ...editingTable, ...table } as ICasinoTable);
    }
  }

  const handleDeleteTable = async (id: number): Promise<void> => {
    try {
      await deleteCasinoTable(id);
    } catch (err) {
      console.error(err);
    }
  };

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
        tables={casinoTables}
        handleEditTable={handleEditTable}
        handleDelete={handleDeleteTable}
      />
    </Layout>
  )
}