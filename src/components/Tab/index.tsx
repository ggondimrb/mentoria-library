import { useState } from "react";
import { Container, TabContent } from "./styles";

export function Tab() {
  const [isVisible, setIsVisible] = useState("MAIS_VENDIDOS");

  return (
    <Container>
      <div>
        <button onClick={() => setIsVisible("MAIS_VENDIDOS")}>
          Mais vendidos
        </button>
        <button onClick={() => setIsVisible("EM_PROMOCAO")}>Em promoção</button>
      </div>
      <div>
        {isVisible === "MAIS_VENDIDOS" && (
          <TabContent>
            <h1>mais vendidos</h1>
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
