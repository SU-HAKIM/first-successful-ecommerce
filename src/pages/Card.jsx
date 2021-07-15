import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
import { removeFromCart, increaseQuantity, decreaseQuantity, checkout } from "../redux/reducer";

function Card() {
    const state = useSelector(state => state.product)
    const dispatch = useDispatch()

    return (
        <Wrapper>
            <Cart>
                {
                    state.cart.map(item => (
                        <CartItem key={item.id}>
                            <ItemDesc>
                                <img src={item.image} alt={item.title} />
                                <div>
                                    <h3>{item.title.slice(0, 25)}</h3>
                                    <p>
                                        {
                                            item.description.slice(0, 20)
                                        }
                                    </p>
                                </div>
                            </ItemDesc>
                            <CartPrice>
                                $ {item.price}
                            </CartPrice>
                            <Quantity>
                                <button
                                    onClick={() => dispatch(increaseQuantity(item.id))}
                                >+</button>
                                <input type="text" value={item.quantity} />
                                <button
                                    onClick={() => dispatch(decreaseQuantity(item.id))}
                                >-</button>
                            </Quantity>
                            <IconButton>
                                <DeleteForever onClick={() => dispatch(removeFromCart(item.id))} color="secondary" />
                            </IconButton>
                        </CartItem>
                    ))
                }
            </Cart>
            <Total>
                <h2>Total Price : </h2>
                <span>Tax : ${state.totalTax}</span>
                <span style={{ borderBottom: "2px solid #999", width: "100%", paddingBottom: "10px" }}>Price : ${state.totalPrice}</span>
                <span>Total : ${state.totalTax + state.totalPrice}</span>
                <button
                    onClick={() => {
                        dispatch(checkout())
                        alert("checkout successful!😀")
                    }}
                >Checkout</button>
            </Total>
        </Wrapper>
    )
}

export default Card


const Cart = styled.div`
    width:100vw;
    margin:100px 0px;
    padding-left:100px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
`

const CartItem = styled.div`
    width:60vw;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:150px;
    box-shadow:0px 2px 2px #999;
    margin-bottom:10px;
`

const ItemDesc = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;

    img{
        width:120px;
        height:100%;
    }
    div{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:flex-start;
        margin-left:25px;

        h3{
            color:#333;
            font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            font-weight:400;
            margin-bottom:10px;
            text-transform:capitalize;
            font-size:.9rem;
        }

        p{
            color:#999;
            font-size:.7rem;
        }
    }
`
const CartPrice = styled.p`
    color:#333;
    font-weight:600;
    font-size:1rem;
`

const Quantity = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    input{
        width:100px;
        border-radius:5px;
        padding:5px;
        border:1px solid #999;
    }
    button{
        padding:4px;
        margin:0px 5px;
    }
`

const Wrapper = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;

`

const Total = styled.div`
    width:400px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    margin:100px 0px 0px 30px;

    h2{
        color:#333;
        font-weight:600;
        margin-bottom:10px;
    }
    span{
        margin:5px 0px;
    }
    button{
        padding:5px 10px;
        background-color:#005678;
        color:#fff;
        border-radius:4px;
        box-shadow:0px 0px 4px #999;
        margin-top:10px;
        border:none;
        cursor:pointer;
    }
`


/**TODO:Guidelines
 * Next i am going to implement the quantity feature
 * And the way is to change the quantity of any specific product onClick on those button and increase the real  price of that particular item
 *
 */