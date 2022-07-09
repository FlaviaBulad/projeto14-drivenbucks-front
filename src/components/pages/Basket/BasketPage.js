import styled from "styled-components";
import axios from "axios";

import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import Product from "./Product";
// import { ProductsContext } from "../../contexts/ProductsContext";

export default function BasketPage() {
  // const [products, setProducts] = useContext(ProductsContext);
  // const token = localStorage.getItem("token");

  // useEffect(() => {
  //   async function getBasketData() {
  //     try {
  //       const response = await axios.get("http://localhost:5000/basket", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       console.log(response);
  //       setProducts(response.data);
  //     } catch (error) {
  //       alert("Erro ao pegar os produtos do carrinho!", error);
  //     }
  //   }

  //   getBasketData();
  // }, []);

  const products = [
    {
      name: "café expresso",
      price: "9.10",
    },
    {
      name: "bolo de banana",
      price: "14.00",
    },
    {
      name: "torta de limão",
      price: "25.50",
    },
  ];

  function buildBasket() {
    if (products.length > 0) {
      return products.map((product, index) => {
        const { name, price } = product;
        return <Product key={index} name={name} price={price} />;
      });
    } else {
      return <p>Seu carrinho está vazio!</p>;
    }
  }

  const basketSession = buildBasket();

  function buildBalance() {
    let initialValue = 0;

    if (products.length > 0) {
      const sum = products
        .map((product) => Number(product.price))
        .reduce((prev, curr) => parseFloat(prev + curr, 0));
      return sum.toFixed(2);
    } else {
      return initialValue;
    }
  }

  const balanceSection = buildBalance();

  function buildBasketPage() {
    return (
      <>
        <StyledHeader>
          <BackIcon>
            <Link to="/main">
              <FiArrowLeft color={"#545454"} size={30}></FiArrowLeft>
            </Link>
          </BackIcon>
          <h1>Carrinho</h1>
        </StyledHeader>

        <Titles>
          <span>Produtos</span> <span>Valor</span>
        </Titles>

        <BasketContent>{basketSession}</BasketContent>

        <StyledFooter>
          <div className="total">
            <span>Total </span>
            <span>R${balanceSection}</span>
          </div>
          <Link to="/checkout">
            <button>Pagar</button>
          </Link>
        </StyledFooter>
      </>
    );
  }

  const renderBasketPage = buildBasketPage();

  return <Container>{renderBasketPage}</Container>;
}

const Container = styled.div`
  background-color: #ffffff;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  span {
    font: 700 12px "Open Sans", sans-serif;
    color: #000000;
  }
`;

const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-right: 50px;
  justify-content: space-evenly;

  align-items: center;
  border-bottom: 2px solid #efefef;
  h1 {
    font: 700 36px "Open Sans", sans-serif;
    color: #654c41;
  }
`;

const BackIcon = styled.div`
  margin-top: 10px;
`;

const BasketContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 340px;
  height: 100px;
  width: 100%;
  border-top: 2px solid #efefef;
  .total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
  }
  span {
    font: 700 20px "Open Sans", sans-serif;
    color: #000000;
  }
  button {
    margin-left: 10%;
    background-color: #654c41;
    height: 40px;
    width: 300px;
    color: #ffffff;
    border: none;
    border-radius: 50px;
    font: 700 20px "Quicksand", sans-serif;
    cursor: pointer;
  }
`;
