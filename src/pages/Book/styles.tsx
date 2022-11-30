import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;


.book {
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    gap: 77px;

    .book-images{
        width: 248px;
        height: 312px;
        display: flex;
        flex-direction: column;
        gap: 13px;

        .image-principal{
            height: 238px;
            width: 248px;
        }

        .book-list-images{
            display: flex;
            flex-direction: row;
            gap: 33px;
            img{
                height: 61px;
                width: 61px;
            }

        }

    }
    .book-details{
        display: flex;
        flex-direction: column;
        align-items: right; 
        gap: 18px;

        .book-name{
            font-weight: 700;
            font-size: 36px;
            color: #198155;            
        }

        .book-description{
            display: flex;
            flex-direction: column;
            gap: 20px;
            color: #6C7072;

            .amount-price{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 50px;

            
                .amount{
                    display: flex;
                    flex-direction: row;
                    height: 43px;

                    .left-button{
                        border-top-left-radius: 25px;
                        border-bottom-left-radius: 25px;
                        color: #198155;
                        border: 1px solid #6C7072;
                        border-right: None;
                        font-size: 30px;
                        background-color: #fff;
                        padding: 2px 10px;
                        width: 50px;
                        cursor: pointer;
                        transition: 0.3s;
                        &:hover{
                            background-color: #9aa0a3;

                        }

                    }

                    .right-button{
                        border-top-right-radius: 25px;
                        border-bottom-right-radius: 25px;
                        color: #198155;
                        border: 1px solid #6C7072;
                        border-left: None;
                        font-size: 30px;
                        background-color: #fff;
                        padding: 2px 10px;
                        width: 50px;
                        cursor: pointer;
                        transition: 0.3s;
                        &:hover{
                            background-color: #9aa0a3;

                        }

                    }

                    span{
                        
                        border: 1px solid #6C7072;
                        border-left: None;
                        border-right: None;
                        width: 30px;
                        text-align: center;
                        padding-top: 12px;
                        font-weight: 700;
                        font-size: 16px;
                    }
                }
            }
            
            /* span{
                display: flex;
                flex-direction: row;
        
                font-weight: 700;
                font-size: 16px;
                color: #090a0a;
                padding: 5px;
                border-radius: 25px;

                border: 1px solid #818080;
            } */

        }
    }
    /* button{
        position: relative;
        width: 309px;
        height: 40px;

        background: #198155;
        border-radius: 40px;

    } */
    
}

`

