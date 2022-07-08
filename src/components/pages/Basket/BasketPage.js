import styled from "styled-components";
import axios from "axios";

import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from "react-loader-spinner";

import Product from "./Product";
import UserContext from "./components/contexts/UserContext";

export default function BasketPage() {
  const [products, setProducts] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getBasketData() {
      try {
        const response = await axios.get("http://localhost:5000/basket", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        alert("Erro ao pegar os produtos no carrinho!", error);
      }
    }

    getBasketData();
  }, []);

  function buildBasket() {
    if (products.length > 0) {
      return products.map((product, index) => {
        const { name, value } = product;
        return <Product key={index} name={name} value={value} />;
      });
    } else {
      return <p>Seu carrinho está vazio!</p>;
    }
  }

  return (
    <Container>
      <StyledHeader>
        <BackIcon>
          <Link to="/">
            <FiArrowLeft color={"#545454"} size={30}></FiArrowLeft>
          </Link>
        </BackIcon>
        <h1>Carrinho</h1>
      </StyledHeader>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ffffff;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border: 2px solid #efefef;

  h1 {
    font: 700 36px "Quicksand", sans-serif;
    color: #654c41;
  }
`;

const BackIcon = styled.div`
  margin-top: 10px;
`;
