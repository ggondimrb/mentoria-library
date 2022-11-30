import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Container } from "./styles";

export function Book() {
    return (
        <Container>
            <Header />
            <Search />
            <div className="book">
                <div className="book-images"> 
                    <img className="image-principal" src="https://m.media-amazon.com/images/I/916Vg5YllaL.jpg" alt="livrinho" />            
                    <div className="book-list-images">
                        <img src="https://m.media-amazon.com/images/I/916Vg5YllaL.jpg" alt="livrinho1" />            
                        <img src="https://m.media-amazon.com/images/I/916Vg5YllaL.jpg" alt="livrinho2" />            
                        <img src="https://m.media-amazon.com/images/I/916Vg5YllaL.jpg" alt="livrinho3" /> 
                    </div>       
                </div>
                <div className="book-details">
                    <span className="book-name" >
                        Nome do livro
                    </span>
                    <div className="book-description"> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur odio mauris, 
                            rhoncus sed purus vitae, sollicitudin commodo tellus. Fusce ut ipsum nec lectus hendrerit ullamcorper.
                            In in sodales turpis, eget vestibulum mi. Praesent laoreet justo at libero volutpat, 
                            quis tempor nisl posuere. Aliquam in ornare turpis. Praesent volutpat sem ut erat tincidunt euismod. 
                            Nam sit amet ante dignissim, ullamcorper lorem sed, ornare risus. Quisque euismod nisl nunc.
                             In commodo felis in nunc blandit, ut sollicitudin nulla tempus.</p> 
                        <div className="amount-price">
                            <div className="amount">
                                <button className="left-button">-</button>
                                <span>3</span>
                                <button className="right-button">+</button>
                            </div>
                            <span>R$ 20,00</span>

                        </div>
                                               
                    </div>
                
                <button>Adicionar ao carrinho</button>
                

                </div>

            </div>
        </Container>
    )
}