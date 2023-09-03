import { Layout } from "@/components/Layout"
import { ShiftTable } from "@/components/Scheduling/ShiftTable"

import { Header } from "../styles/styles";

export default function SchedulingSystem() {
  return (
    <Layout>
      <Header>
        <p>Scheduling System</p>
      </Header>
      <ShiftTable />
    </Layout>
  )
}