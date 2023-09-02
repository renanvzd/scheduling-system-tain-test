import Link from "next/link";

import { Container } from "./styles";

export function Sidebar() {
  return (
    <Container>
      <div>
        <div className='menu-title'>
          <p>Menu</p>
        </div>
        <div className='menu-options'>
          <Link href="/" rel="noreferrer">
            <button>Home</button>
          </Link>
          <Link href="/game-presenters" rel="noreferrer">
            <button>Game Presenters</button>
          </Link>
          <Link href="/casino-tables" rel="noreferrer">
            <button>Casino Tables</button>
          </Link>
          <Link href="/scheduling" rel="noreferrer">
            <button>Scheduling</button>
          </Link>
        </div>
      </div>
    </Container>
  )
}
