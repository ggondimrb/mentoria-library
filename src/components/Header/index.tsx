import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Container } from "./styles";

export function Header(){
    return (
        <Container>
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
      </Container>
    )
}