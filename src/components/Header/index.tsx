import { Container } from "./styles";
import { Logo } from './logo';

export function Header() {
  return (
    <Container>
      <div>
        <Logo />
      </div>
      <div>
        <p className='title'>Interview Task - Scheduling System</p>
      </div>
    </Container>
  )
}
