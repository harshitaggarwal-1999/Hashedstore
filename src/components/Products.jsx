import React from "react";
import { popularProducts } from "../data";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
`;

const Products = () => {
    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} />
            ))}
        </Container>
    );
};

export default Products;
