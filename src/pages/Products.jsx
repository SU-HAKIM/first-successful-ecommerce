import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/reducer";


function Products() {
    const state = useSelector(state => state.product)
    const dispatch = useDispatch()
    return (
        <Container>
            {
                state.loading ? <Loading>Loading.....</Loading> : state.products.map(product => (
                    <Card key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <section>
                            <Link to={`/product/${product.id}`}>
                                <h3>{product.title}</h3>
                            </Link>
                            <p>
                                {
                                    product.description.slice(0, 100)
                                }
                            </p>
                        </section>
                        <CardActions>
                            <span>$ {product.price}</span>
                            <button
                                onClick={() => dispatch(addToCart(product.id))}
                                disabled={state.cart.includes(product)}
                            >
                                {
                                    state.cart.includes(product) ? "In Cart" : "Add To Cart"
                                }
                            </button>
                        </CardActions>
                    </Card>

                ))
            }
        </Container>
    )
}

export default Products


const Container = styled.main`
    width:90vw;
    margin:0 auto;
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
`

const Loading = styled.p`
    color:#333;
    font-weight:500;
    font-size:1.1.rem;
    width:300px;
    margin:100px auto;
`

const Card = styled.section`
    width:250px;
    box-shadow:0px 0px 5px #999;
    margin-left:10px;
    margin-bottom:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:3px;

    img{
        width:100%;
        height:150px;
        border-bottom:1px solid #aaa;
    }
    section{
        width:100%;
        padding:10px 8px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

        h3{
            color:#333;
            font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            font-weight:500;
            margin-bottom:5px;
            font-size:1.1rem;
        }
        p{
            color:#999;
            font-size:.9rem;
        }
    }
`

const CardActions = styled.div`
    border-top:2px solid #999;
    margin-top:10px;
    padding:10px 15px;
    width:100%;
    display:flex; 
    justify-content:space-between;
    align-items:center; 
    flex-direction:row;

    span{
        color:#333;
        font-size:1rem;
        font-weight:600;
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