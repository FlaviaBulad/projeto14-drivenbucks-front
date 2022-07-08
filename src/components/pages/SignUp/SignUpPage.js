import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";

import Logo from "../../layout/Logo.js";
import Spinner from "../../libs/Spinner.js";

export default function SignUpPage() {
  const signUpDataObject = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState(signUpDataObject);
  const [isLoading, setIsLoading] = useState(false); //loader spinner state

  function OnChange(e) {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  }

  async function SignUp(e) {
    //sending all the data to api and redirectioning user to sign-in page if successfull
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.post("https://drivenbucks.herokuapp.com/sign-up", {
        ...signUpData,
      });

      setIsLoading(false);
      alert("Cadastro criado com sucesso!");
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      alert(`Erro ao cadastrar: ${error}`);
    }
  }

  function BuildingSignUpForms() {
    return (
      <>
        <Logo />
        <BackIcon>
          <Link to="/">
            <FiArrowLeft color={"#545454"} size={30}></FiArrowLeft>
          </Link>
        </BackIcon>

        <h2>
          Olá!
          <h3>Preencha os dados para continuar</h3>
        </h2>
        <form onSubmit={SignUp}>
          <InputContainer>
            <div className="=user">
              <FiUser color={"#654C41"} size={24}></FiUser>
            </div>
            <input
              type="text"
              placeholder="Seu nome"
              name="name"
              onChange={OnChange}
              value={signUpData.name}
              required
            />
            <div className="=email">
              <FiMail color={"#654C41"} size={24}></FiMail>
            </div>
            <input
              type="email"
              placeholder="Seu melhor email"
              name="email"
              onChange={OnChange}
              value={signUpData.email}
              required
            />
            <div className="=password">
              <FiLock color={"#654C41"} size={24}></FiLock>
            </div>
            <input
              type="password"
              placeholder="Senha"
              name="password"
              onChange={OnChange}
              value={signUpData.password}
              required
            />
            <div className="=confirm-password">
              <FiLock color={"#654C41"} size={24}></FiLock>
            </div>
            <input
              type="password"
              placeholder="Confirme a senha"
              name="password_confirmation"
              onChange={OnChange}
              value={signUpData.password_confirmation}
              required
            />
          </InputContainer>
          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Spinner type="ThreeDots" color="#FFFFFF" width={50} />
            ) : (
              "Cadastrar"
            )}
          </button>
        </form>
        <p>
          Já possui uma conta?
          <Link to="/sign-in"> Entrar</Link>
        </p>
      </>
    );
  }

  const signUpForms = BuildingSignUpForms();

  return <Container>{signUpForms}</Container>; //renders everything on the page
}

const Container = styled.div`
  background-color: #efefef;
  padding: 30px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-bottom: 40px;
  }

  h2 {
    font: 700 40px "Quicksand", sans-serif;
    color: #654c41;
    margin-right: 80px;
  }
  h3 {
    font: 400 14px "Quicksand", sans-serif;
    color: #545454;
    margin-right: 30px;
  }
  input {
    height: 58px;
    width: 326px;
    border: none;
    border-radius: 50px;
    font: 400 20px "Quicksand", sans-serif;
    padding-left: 60px;
    margin-top: 20px;
  }
  input:focus {
    outline: none;
  }
  button {
    background-color: #654c41;
    height: 58px;
    width: 326px;
    color: #ffffff;
    border: none;
    border-radius: 50px;
    font: 700 20px "Quicksand", sans-serif;
    cursor: pointer;
  }
  p {
    margin-top: 10px;
    font: 400 14px "Quicksand", sans-serif;
    color: #545454;
  }
  a {
    font: 700 14px "Quicksand", sans-serif;
    color: #d57e52;
    text-decoration: none;
  }
`;
const BackIcon = styled.div`
  margin-right: 320px;
`;
const InputContainer = styled.div`
  position: relative;
  div {
    display: flex;
    flex-direction: column;
    margin-top: 35px;
    left: 18px;
    position: absolute;
  }
`;
