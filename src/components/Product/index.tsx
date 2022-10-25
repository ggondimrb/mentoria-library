import { ProductType } from "../Tab";
import { Container } from "./styles";

type ProductProps = {
  product: ProductType;
};

export function Product(props: ProductProps) {
  const { product } = props;
  return (
    <Container>
      <img src={product.image} />
      <strong>{product.title}</strong>
      <span>{product.formattedPrice}</span>
    </Container>
  );
}
