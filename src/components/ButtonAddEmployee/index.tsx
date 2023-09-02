import { Container } from './styles';

export function ButtonAddEmployee() {
  return (
    <Container>
      <header>
        <nav>
          <div>
            <button
              type="button"
            >
              <div className="icon">
                +
              </div>
              <div className="text">New Game Presenter</div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  )
}
