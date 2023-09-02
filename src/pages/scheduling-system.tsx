import { Layout } from "@/components/Layout"
import { Scheduling } from "@/components/Scheduling"

import { Header } from "../styles/styles";

export default function SchedulingSystem() {
  return (
    <Layout>
      <Header>
        <p>Scheduling System</p>
      </Header>
      <Scheduling />
    </Layout>
  )
}