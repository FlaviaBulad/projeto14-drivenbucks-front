import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  async function SignUpDataToAPI(e) {
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
        <h2>
          Olá!
          <p>Preencha os dados para continuar</p>
        </h2>
        <form onSubmit={SignUpDataToAPI}>
          <input
            type="text"
            placeholder="Seu nome"
            name="name"
            onChange={OnChange}
            value={signUpData.name}
            required
          />
          <input
            type="email"
            placeholder="Seu melhor email"
            name="email"
            onChange={OnChange}
            value={signUpData.email}
            required
          />

          <input
            type="password"
            placeholder="senha"
            name="password"
            onChange={OnChange}
            value={signUpData.password}
            required
          />
          <input
            type="password"
            placeholder="Confirme a senha"
            name="password_confirmation"
            onChange={OnChange}
            value={signUpData.password_confirmation}
            required
          />

          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Spinner
                type="ThreeDots"
                color="#FFFFFF"
                height={50}
                padding={50}
                width={50}
              />
            ) : (
              "Cadastrar"
            )}
          </button>
        </form>

        <Link to="/sign-in">
          Já possui uma conta? <span>Entrar</span>
        </Link>
      </>
    );
  }

  const signUpForms = BuildingSignUpForms();

  return <Container>{signUpForms}</Container>; //renders everything on the page
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
`;
