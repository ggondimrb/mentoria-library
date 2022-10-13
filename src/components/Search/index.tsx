import { Input } from "../Input";
import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";
import { Tab } from "../Tab";

export function Search() {
  return (
    <Container>
      <img src="https://distrito.me/wp-content/uploads/2022/05/10-livros-sobre-inovacao-para-ler-em-2022-1080x627.jpeg" />
      <Input label="Pesquisar" icon={<FiSearch />} />
    </Container>
  );
}
