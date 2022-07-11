import styled from "styled-components";

import { FiArrowLeft } from "react-icons/fi";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router";

import PaymentMethod from "./PaymentMethod";

import BasketProductsContext from "../../../contexts/BasketProductsContext";
import TotalValueContext from "../../../contexts/TotalValueContext";

export default function CheckoutPage() {
  const { setProducts } = useContext(BasketProductsContext);
  const { totalValue, setTotalValue } = useContext(TotalValueContext);
  const navigate = useNavigate();

  function buildCheckout() {
    return (
      <>
        <StyledHeader>
          <BackIcon>
            <Link to="/basket">
              <FiArrowLeft color={"#545454"} size={30}></FiArrowLeft>
            </Link>
          </BackIcon>
          <h1>Checkout</h1>
        </StyledHeader>

        <PaymentMethod />

        <StyledFooter>
          <div className="total">
            <span>Total </span>
            <span>R${totalValue}</span>
          </div>

          <button onClick={finishOrder}>Finalizar Pedido</button>
        </StyledFooter>
      </>
    );
  }

  function finishOrder() {
    alert("Pedido Finalizado com sucesso!");
    setTotalValue(0);
    setProducts([]);
    navigate("/");
  }

  const renderCheckoutPage = buildCheckout();

  return <Container>{renderCheckoutPage}</Container>;
}

const Container = styled.div`
  background-color: #ffffff;
  height: 100%;
  display: flex;
  flex-direction: column;
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
