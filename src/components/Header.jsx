import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ShopOutlined, ShoppingBasket } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo>
                <ShopOutlined style={{ color: "white" }} />
                <HeaderLink to="/">
                    SHOP
                </HeaderLink>
            </HeaderLogo>
            <Link to="/card" >
                <IconButton>
                    <ShoppingBasket color="secondary" />
                </IconButton>
            </Link>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.header`
    width:100vw;
    padding:10px 20px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    background-color:var(--header-bg);
`

const HeaderLogo = styled.div`
    width:200px;
    display:flex;
    justify-content:center;
    align-items:center;

`

const HeaderLink = styled(Link)`
    color:white;
    font-size:1.1rem;
    font-weight:700;
    margin-left:4px;
`
