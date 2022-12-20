import { Link } from "react-router-dom";
import { ProductType } from "../Tab";
import { Container } from "./styles";


type ProductProps = {
  product: ProductType;
};

export function Product(props: ProductProps) {
  const { product } = props;
  return (
    
      <Container to={`book/${product.id}`}>
      
        <img src={product.image} />
        <strong>{product.title}</strong>
        <span>{product.formattedPrice}</span>
      
      </Container>
  );
}
