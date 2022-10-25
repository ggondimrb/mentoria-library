import { useEffect, useState } from "react";
import { formatToBrCurrencyString } from "../../utils";
import { Product } from "../Product";
import { Container, TabContent } from "./styles";

export type ProductType = {
  image: string;
  title: string;
  price: number;
  formattedPrice: string;
};

const list: ProductType[] = [
  {
    image: "https://m.media-amazon.com/images/I/916Vg5YllaL.jpg",
    title: "Nome do livro 1",
    price: 22.92222,
    formattedPrice: "",
  },
  {
    image: "https://m.media-amazon.com/images/I/916Vg5YllaL.jpg",
    title: "Nome do livro 2",
    price: 10,
    formattedPrice: "",
  },
  {
    image: "https://m.media-amazon.com/images/I/916Vg5YllaL.jpg",
    title: "Nome do livro 3",
    price: 50.95,
    formattedPrice: "",
  },
  {
    image: "https://m.media-amazon.com/images/I/916Vg5YllaL.jpg",
    title: "Nome do livro 4",
    price: 1300.9,
    formattedPrice: "",
  },
];

export function Tab() {
  const [isVisible, setIsVisible] = useState("MAIS_VENDIDOS");
  const [productList, setProductList] = useState<ProductType[]>(
    [] as ProductType[]
  );

  useEffect(() => {
    function formatProductListToDescription() {
      setProductList(
        list.map((product) => {
          product.formattedPrice = formatToBrCurrencyString(product.price);
          return product;
        })
      );
    }
    formatProductListToDescription();
  }, []);

  return (
    <Container>
      <header>
        <button
          className={isVisible === "MAIS_VENDIDOS" ? "active" : ""}
          onClick={() => setIsVisible("MAIS_VENDIDOS")}
        >
          Mais vendidos
        </button>
        <button
          className={isVisible === "EM_PROMOCAO" ? "active" : ""}
          onClick={() => setIsVisible("EM_PROMOCAO")}
        >
          Em promoção
        </button>
      </header>
      <div>
        {isVisible === "MAIS_VENDIDOS" && (
          <TabContent>
            {productList.map((product) => {
              return <Product key={product.title} product={product} />;
            })}
          </TabContent>
        )}
        {isVisible === "EM_PROMOCAO" && (
          <TabContent>
            <h1>em promoção</h1>
          </TabContent>
        )}
      </div>
    </Container>
  );
}
