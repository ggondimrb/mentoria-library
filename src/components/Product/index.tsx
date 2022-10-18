import { Container } from "./styles";

export function Product() {
  return (
    <Container>
      <img src="https://m.media-amazon.com/images/I/916Vg5YllaL.jpg" />
      <strong>Nome do livro</strong>
      <span>R$ 22,99</span>
    </Container>
  );
}
