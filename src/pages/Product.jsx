import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { addToCart } from "../redux/reducer";


function Product() {
    const { id } = useParams()
    const { products, cart } = useSelector(state => state.product)
    const dispatch = useDispatch()
    return (
        <div>
            {
                products.map(item => {
                    if (item.id == id) {
                        return (
                            <Item key={item.id}>
                                <ItemImage>
                                    <img src={item.image} alt={item.title} />
                                </ItemImage>
                                <ItemDesc>
                                    <h3>{item.title}</h3>
                                    <p>
                                        {
                                            item.description.slice(0, 100)
                                        }
                                    </p>
                                    <Actions>
                                        <span>Price : ${item.price}</span>
                                        <button
                                            onClick={() => dispatch(addToCart(item.id))}
                                            disabled={cart.includes(item)}
                                        >
                                            {
                                                cart.includes(item) ? "In Cart" : "Add To Cart"
                                            }
                                        </button>
                                    </Actions>
                                </ItemDesc>
                            </Item>
                        )
                    }
                })
            }
        </div>
    )
}

export default Product

const Item = styled.main`
    width:100vw;
    margin:100px 0px;
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    height:250px;
    padding:0px 100px;
`
const ItemImage = styled.div`
    width:200px;
    height:100%;

    img{
        width:100%;
        height:auto;
    }
`

const ItemDesc = styled.div`
    width:600px;
    margin-left:20px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    padding-top:30px;

    h3{
        margin-bottom:10px;
        color:#333;
        font-size:1.1rem;
        font-weight:500;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    p{
        color:#999;
        font-size:.9rem;
    }
`
const Actions = styled.div`
    width:300px;
    margin-top:20px;
    padding:0px 10px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    span{
        color:#333;
        font-weight:500;
        font-size:1.1rem
    }
    button{
        border:none;
        outline:none;
        background-color:var(--button-bg);
        color:white;
        font-weight:500;
        border-radius:4px;
        box-shadow:0px 0px 4px #333;
        padding:5px 10px;
        cursor: pointer;
    }
`