import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { productList, ProductType } from "../../components/Tab";
import { formatToBrCurrencyString } from "../../utils";
import { Container } from "./styles";

export function Book() {
    const params = useParams()
    const [book,setBook] = useState({} as ProductType)
    const [imageSelected, setImageSelected] = useState({} as {src: string; alt: string})

    useEffect(() => {
        console.log(params.id)
        const selected = productList.find(product => (product.id === Number(params.id ))) || {}  as ProductType
        //setBook(book => ({...book, formattedPrice:formatToBrCurrencyString(book.price)}))
        setBook({...selected, formattedPrice:formatToBrCurrencyString(selected.price)})
        setImageSelected(selected.images[0])
    },[])
    function handleSelectImage(image:any){

    }
    return (
        <Container>
            <Header />
            <Search />
            <div className="book">
                <div className="book-images"> 
                    <img className="image-principal" src={imageSelected.src} alt={imageSelected.alt} />            
                    <div className="book-list-images">
                        {book.images?.map((image) => {
                            return (
                                <img src={image.src} alt={image.alt} onClick={()=> handleSelectImage(image)} />          

                            )
                        })}
                    </div>       
                </div>
                <div className="book-details">
                    <span className="book-name" >
                        {book.title}
                    </span>
                    <div className="book-description"> 
                        <p>{book.description}</p> 
                        <div className="amount-price">
                            <div className="amount">
                                <button className="left-button">-</button>
                                <span>3</span>
                                <button className="right-button">+</button>
                            </div>
                            <span className="price">{book.formattedPrice}</span>

                        </div>
                                               
                    </div>
                
                    <button className="button-add">Adicionar ao carrinho</button>
                

                </div>

            </div>
        </Container>
    )
}