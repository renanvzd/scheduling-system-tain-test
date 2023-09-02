import { Layout } from "@/components/Layout"

import { Header } from "../styles/styles";
import { CasinoTablesList } from "@/components/CasinoTables/TablesList";

export default function Tables() {
  return (
    <Layout>
      <Header>
        <p>Casino Tables</p>
      </Header>

      <CasinoTablesList />
    </Layout>
  )
}