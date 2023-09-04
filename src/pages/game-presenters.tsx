import { useState } from "react";
import { useDataContext } from '@/context/data-context';

import { Layout } from "@/components/Layout";
import { GamePresentersList } from "@/components/GamePresenters/ProfileList";
import { ModalAddGamePresenter } from "@/components/GamePresenters/ModalAddGamePresenter";
import { ModalEditGamePresenter } from "@/components/GamePresenters/ModalEditGamePresenter";
import { ButtonAddGamePresenter } from "@/components/GamePresenters/ButtonAddGamePresenter";

import { Header } from "../styles/styles";

interface IGamePresenters {
  id: number;
  name: string;
  age: string;
  createdAt: string;
}

export default function GamePresenters() {
  const { gamePresenters, addGamePresenter, updateGamePresenter, deleteGamePresenter } = useDataContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingGamePresenter, setEditingGamePresenter] = useState<IGamePresenters | {}>({});
  const [editModalOpen, setEditModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen);
  }

  const handleEditGamePresenter = (gamePresenter: IGamePresenters) => {
    setEditModalOpen(true);
    setEditingGamePresenter(gamePresenter);
  }

  const handleAddGamePresenter = async (gamePresenter: Omit<IGamePresenters, 'id'>) => {
    await addGamePresenter(gamePresenter);
  }

  const handleUpdateGamePresenter = async (gamePresenter: Omit<IGamePresenters, 'id'>) => {
    if ('id' in editingGamePresenter) {
      await updateGamePresenter({ ...editingGamePresenter, ...gamePresenter } as IGamePresenters);
    }
  }

  const handleDeleteGamePresenter = async (id: number) => {
    await deleteGamePresenter(id);
  }

  return (
    <Layout>
      <div>
        <Header>
          <p>Game Presenters</p>
        </Header>
      </div>
      <ButtonAddGamePresenter openModal={toggleModal} />
      <ModalAddGamePresenter
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddGamePresenter={handleAddGamePresenter}
      />
      <ModalEditGamePresenter
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingGamePresenter={editingGamePresenter as IGamePresenters}
        handleUpdateGamePresenter={handleUpdateGamePresenter}
      />
      <GamePresentersList
        gamePresenters={gamePresenters}
        handleEditGamePresenter={handleEditGamePresenter}
        handleDelete={handleDeleteGamePresenter}
      />
    </Layout>
  )
}