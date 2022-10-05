import { Container, Header } from "./styles";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Search } from "../../components/Search";

export function HomePage() {
  return (
    <Container>
      <Header>
        <span className="header-title">Livraria da Sandrine</span>
        <div className="buttons">
          <div className="header-icon">
            <FiShoppingCart />
            <span>Carrinho</span>
          </div>
          <div className="header-icon">
            <FiUser />
            <span>Minha conta</span>
          </div>
        </div>
      </Header>
      <Search />
    </Container>
  );
}
