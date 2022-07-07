import styled from "styled-components";
import { Link } from "react-router-dom";
import welcome from "../../../assets/images/layout/welcome.png";
export default function WelcomePage() {
  return (
    <Container>
      <h1>Drivenbucks</h1>
      <img src={welcome} alt="" />
      <div>
        <h2>Bem-vindo!</h2>
        <p>
          Encontre as maiores delícias das cafeterias e receba no conforto da
          sua casa!
        </p>
        <Link to="/sign-in/">
          <button>Começar</button>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-top: 40px;
    font: 700 40px "Quicksand", sans-serif;
    color: #d57e52;
  }
  img {
    margin-top: 20px;
    max-width: 300px;
  }
  div {
    background-color: #ffffff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
    gap: 20px;
  }
  h2 {
    font: 700 30px "Quicksand", sans-serif;
    color: #654c41;
  }
  p {
    font: 400 14px "Quicksand", sans-serif;
    color: #545454;
    text-align: center;
  }
  button {
    width: 150px;
    height: 40px;
    border-radius: 50px;
    background-color: #654c41;
    border: none;
    color: #ffffff;
    font: 700 14px "Quicksand", sans-serif;
  }
`;
// #EFEFEF
