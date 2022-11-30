import { Container } from "./styles";

import { Search } from "../../components/Search";
import { Tab } from "../../components/Tab";
import { Header } from "../../components/Header";

export function HomePage() {
  return (
    <Container>
      <Header />
      <Search />
      <Tab />
    </Container>
  );
}
