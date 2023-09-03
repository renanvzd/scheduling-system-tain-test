import { FiPlusSquare } from 'react-icons/fi';

import { Container } from './styles';

interface ButtonAddGamePresenterProps {
  openModal: () => void
}

export function ButtonAddGamePresenter({ openModal }: ButtonAddGamePresenterProps) {
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
              <div className="text">New Game Presenter</div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  )
}
