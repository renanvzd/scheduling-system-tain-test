import React, { createContext, useContext, useEffect, useState } from "react";
import api from "@/services/api";

interface DataContextProviderProps {
  children: React.ReactNode;
}

interface IGamePresenter {
  id: number;
  name: string;
  age: string;
  admissionDate: string;
}

interface ICasinoTable {
  id: number;
  tableNumber: string;
  game: string;
  creationDate: string;
}

interface DataContextType {
  gamePresenters: IGamePresenter[];
  addGamePresenter: (gamePresenter: Omit<IGamePresenter, 'id'>) => Promise<void>;
  updateGamePresenter: (gamePresenter: IGamePresenter) => Promise<void>;
  deleteGamePresenter: (id: number) => Promise<void>;

  casinoTables: ICasinoTable[];
  addCasinoTable: (casinoTable: Omit<ICasinoTable, 'id'>) => Promise<void>;
  updateCasinoTable: (casinoTable: ICasinoTable) => Promise<void>;
  deleteCasinoTable: (id: number) => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataContextProvider: React.FC<DataContextProviderProps> = ({ children }) => {
  const [gamePresenters, setGamePresenters] = useState<IGamePresenter[]>([]);
  const [casinoTables, setCasinoTables] = useState<ICasinoTable[]>([]);

  const getGamePresenters = async () => {
    try {
      const response = await api.get<IGamePresenter[]>('/game-presenters');
      setGamePresenters(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getCasinoTables = async () => {
    try {
      const response = await api.get<ICasinoTable[]>('/casino-tables');
      setCasinoTables(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addGamePresenter = async (gamePresenter: Omit<IGamePresenter, 'id'>) => {
    try {
      const response = await api.post('/game-presenters', {
        ...gamePresenter,
      });

      setGamePresenters([...gamePresenters, response.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const addCasinoTable = async (casinoTable: Omit<ICasinoTable, 'id'>) => {
    try {
      const response = await api.post('/casino-tables', {
        ...casinoTable,
      });

      setCasinoTables([...casinoTables, response.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateGamePresenter = async (gamePresenter: IGamePresenter) => {
    try {
      const response = await api.put<IGamePresenter>(
        `/game-presenters/${gamePresenter.id}`,
        gamePresenter
      );
      const updatedGamePresenters = gamePresenters.map((emp) =>
        emp.id === response.data.id ? response.data : emp
      );
      setGamePresenters(updatedGamePresenters);
    } catch (err) {
      console.error(err);
    }
  };

  const updateCasinoTable = async (casinoTable: ICasinoTable) => {
    try {
      const response = await api.put<ICasinoTable>(
        `/casino-tables/${casinoTable.id}`,
        casinoTable
      );
      const updatedCasinoTables = casinoTables.map((table) =>
        table.id === response.data.id ? response.data : table
      );
      setCasinoTables(updatedCasinoTables);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteGamePresenter = async (id: number) => {
    try {
      await api.delete(`/game-presenters/${id}`);
      const updatedGamePresenters = gamePresenters.filter((gp) => gp.id !== id);
      setGamePresenters(updatedGamePresenters);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteCasinoTable = async (id: number) => {
    try {
      await api.delete(`/casino-tables/${id}`);
      const updatedTables = casinoTables.filter((tbl) => tbl.id !== id);
      setCasinoTables(updatedTables);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getGamePresenters();
    getCasinoTables();
  }, []);

  return (
    <DataContext.Provider
      value={{
        gamePresenters,
        addGamePresenter,
        updateGamePresenter,
        deleteGamePresenter,
        casinoTables,
        addCasinoTable,
        updateCasinoTable,
        deleteCasinoTable,
      }}>
      {children}
    </DataContext.Provider>
  );
};


export const useDataContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Context Error");
  }
  return context;
};