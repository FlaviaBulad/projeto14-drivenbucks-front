import styled from "styled-components";
import axios from "axios";

import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import Product from "./Product";

import BasketProductsContext from "../../../contexts/BasketProductsContext";
import TotalValueContext from "../../../contexts/TotalValueContext";

export default function BasketPage() {
  const { products, setProducts } = useContext(BasketProductsContext);
  const { totalValue, setTotalValue } = useContext(TotalValueContext);

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getBasketData() {
      try {
        const response = await axios.get(
          "https://drivenbucks.herokuapp.com/basket",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        alert("Erro ao pegar os produtos do carrinho!", error);
      }
    }

    getBasketData();
  }, []);

  function buildBasket() {
    if (products.length > 0) {
      return products.map((product, index) => {
        const { title, price } = product;
        return (
          <>
            <Product key={index} title={title} price={price} />
          </>
        );
      });
    } else {
      return <EmptyBasket>Seu carrinho está vazio!</EmptyBasket>;
    }
  }

  const basketSession = buildBasket();

  function buildTotal() {
    let initialValue = 0;

    if (products.length > 0) {
      const sum = products
        .map((product) => Number(product.price))
        .reduce((prev, curr) => parseFloat(prev + curr, 0));
      setTotalValue(sum.toFixed(2));
      return totalValue;
    } else {
      return initialValue;
    }
  }

  const totalSection = buildTotal();

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
            <span>R${totalSection}</span>
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const EmptyBasket = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  font: 700 22px "Quicksand", sans-serif;
  color: #000000;
`;

const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 6px 20px;
  span {
    font: 700 16px "Open Sans", sans-serif;
    color: #000000;
  }
`;

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  background-color: #ffffff;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  padding-right: 50px;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 2px solid #efefef;
  h1 {
    display: flex;
    align-items: center;
    justify-content: end;
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
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 120px;
  width: 100%;
  border-top: 2px solid #efefef;
  .total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 20px;
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
