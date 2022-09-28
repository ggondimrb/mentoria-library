import { Container, Header } from "./styles";

export function HomePage() {
  return (
    <Container>
      <Header>
        <span className="header-title">Livraria da Sandrine</span>
        <div className="buttons">
          <div className="header-icon">
            <strong>C</strong>
            <span>Carrinho</span>
          </div>
          <div className="header-icon">
            <strong>M</strong>
            <span>Minha conta</span>
          </div>          
        </div>
      </Header>
    </Container>
  )
}