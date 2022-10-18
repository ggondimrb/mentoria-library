import { useState } from "react";
import { Product } from "../Product";
import { Container, TabContent } from "./styles";

export function Tab() {
  const [isVisible, setIsVisible] = useState("MAIS_VENDIDOS");

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
            <Product />
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
