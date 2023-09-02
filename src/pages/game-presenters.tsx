import { Layout } from "@/components/Layout"
import { GamePresentersContent } from "@/components/GamePresentersContent"
import { ButtonAddEmployee } from "@/components/ButtonAddEmployee"

import { Header } from "../styles/styles";

export default function GamePresenters() {

  return (
    <Layout>
      <div>
        <Header>
          <p>Game Presenters</p>
        </Header>
      </div>
      <ButtonAddEmployee />
      <GamePresentersContent />
    </Layout>
  )
}