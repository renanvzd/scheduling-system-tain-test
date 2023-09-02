import { useEffect, useState } from "react";
import api from "@/services/api";

import { Layout } from "@/components/Layout"

import { Header } from "../styles/styles";
import { CasinoTablesList } from "@/components/CasinoTables/TablesList";

interface ICasinoTable {
  id: number;
  tableNumber: string;
  game: string;
  creationDate: string;
}


export default function Tables() {
  const [tables, setTables] = useState<ICasinoTable[]>([]);

  useEffect(() => {
    async function getTables() {
      const response = await api.get('/casino-tables');

      setTables(response.data);
    }
    getTables()
  }, [])

  return (
    <Layout>
      <Header>
        <p>Casino Tables</p>
      </Header>
      <CasinoTablesList tables={tables} />
    </Layout>
  )
}