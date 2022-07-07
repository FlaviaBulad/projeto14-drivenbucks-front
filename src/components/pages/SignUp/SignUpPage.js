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
      navigate("/sign-in");
    } catch (error) {
      setIsLoading(false);
      alert(`Erro ao cadastrar: ${error}`);
    }
  }

  function BuildingSignUpForms() {
    return (
      <>
        <Logo />
        <Greeting>
          Olá!
          <p>Preencha os dados para continuar</p>
        </Greeting>
        <Form onSubmit={SignUpDataToAPI}>
          <Input
            type="text"
            placeholder="Seu nome"
            name="name"
            onChange={OnChange}
            value={signUpData.name}
            required
          />
          <Input
            type="email"
            placeholder="Seu melhor email"
            name="email"
            onChange={OnChange}
            value={signUpData.email}
            required
          />

          <Input
            type="password"
            placeholder="senha"
            name="password"
            onChange={OnChange}
            value={signUpData.password}
            required
          />
          <Input
            type="password"
            placeholder="Confirme a senha"
            name="password_confirmation"
            onChange={OnChange}
            value={signUpData.password_confirmation}
            required
          />

          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Spinner
                type="ThreeDots"
                color="#FFFFFF"
                height={50}
                width={50}
              />
            ) : (
              "Cadastrar"
            )}
          </Button>
        </Form>

        <StyledLink to="/sign-in">
          Já possui uma conta? <span>Entrar</span>
        </StyledLink>
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

const Greeting = styled.h2`
  font: 700 34px "Quicksand", sans-serif;
  color: #654c41;
  margin-right: 80px;
  p {
    font: 400 12px "Quicksand", sans-serif;
    color: #654c41;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 25px;
`;

const Input = styled.input`
  width: 300px;
  height: 45px;
  margin-bottom: 30px;
  padding: 10px;
  border: none;
  border-radius: 50px;
  background-color: "#FFFFFF;";
  &::placeholder {
    font: 400 14px "Quicksand", sans-serif;
    color: #737373;
    padding-left: 50px;
  }
`;

const Button = styled.button`
  width: 300px;
  height: 45px;
  border: none;
  border-radius: 50px;
  background: #654c41;

  font: 700 20px "Quicksand", sans-serif;
  text-align: center;
  color: #ffffff;
`;

const StyledLink = styled(Link)`
  width: 227px;
  height: 18px;
  font: 400 14px "Quicksand", sans-serif;
  text-decoration: none;
  color: #545454;
  span {
    color: #d57e52;
    font-weight: 700;
  }
`;
