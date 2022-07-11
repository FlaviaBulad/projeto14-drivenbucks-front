import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { FiMenu, FiLogOut, FiShoppingCart } from "react-icons/fi";

import Logo from "../../layout/Logo";
import banner from "../../../assets/images/layout/banner.png";
import CardProduct from "./CardProduct.js";

export default function MainPage() {
  const [products, setProducts] = useState([]);
  const [productsOnTheBasket, setProductsOnTheBasket] = useState(0);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    const promise = axios.get(
      "https://drivenbucks.herokuapp.com/products",
      config
    );
    promise
      .then((responde) => {
        setProducts(responde.data);
      })
      .catch((error) => {
        console.log("deu ruim", error);
      });
  }, []);

  console.log(products);
  if (products.length !== 0) {
    console.log(products);
  }
  function logout() {
    const promise = axios.delete(
      "https://drivenbucks.herokuapp.com/logout",
      config
    );
    promise
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <Container>
        <ContainerHeader>
          <BackIcon>
            <FiMenu color={"#FFFFFF"} size={30}></FiMenu>
          </BackIcon>
          <Logo></Logo>
          <BackIcon>
            <FiLogOut onClick={logout} color={"#654C41"} size={30}></FiLogOut>
          </BackIcon>
        </ContainerHeader>
        <Banner src={banner} alt="banner" />
        <ContainerProducts>
          {products.map((item, index) => (
            <CardProduct
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              rate={item.rate}
              id={item._id}
              setProductsOnTheBasket={setProductsOnTheBasket}
              productsOnTheBasket={productsOnTheBasket}
            ></CardProduct>
          ))}
        </ContainerProducts>
        <Link to="/basket/">
          <Basket>
            <div>{productsOnTheBasket}</div>
            <div>
              <FiShoppingCart color={"#FFFFFF"} size={"50px"}></FiShoppingCart>
            </div>
          </Basket>
        </Link>
      </Container>
    </>
  );
}
const Container = styled.div`
  position: relative;
  background-color:#FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding 0 30px;
  height: 100vh;
  width:100%;
  `;
const ContainerHeader = styled.div`
    position:fixed;
    z-index:1;
    padding 10px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:#FFFFFF;
    width: 100%;
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,.1);
    div:last-child{
      background-color: #FFFFFF;
    }
  `;
const BackIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #654c41;
  border-radius: 4px;
  cursor: pointer;
`;
const Banner = styled.img`
  position: absolute;
  right: 30;
  top: 20px;
  width: 325px;
`;
const ContainerProducts = styled.div`
  margin-top: 285px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Basket = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 10px;
  background-color: #ffc229;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font: 700 20px "Open Sans", sans-serif;
  color: #ffffff;
  div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: red;
  }
  div:last-child {
    margin-right: 10px;
  }
`;
