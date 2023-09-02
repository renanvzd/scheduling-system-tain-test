import { FiPlusSquare } from 'react-icons/fi';

import { Container } from './styles';

interface ButtonAddCasinoTablesProps {
  openModal: () => void
}

export function ButtonAddCasinoTables({ openModal }: ButtonAddCasinoTablesProps) {
  return (
    <Container>
      <header>
        <nav>
          <div>
            <button
              type="button"
              onClick={openModal}
            >
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
              <div className="text">New Casino Table</div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  )
}
