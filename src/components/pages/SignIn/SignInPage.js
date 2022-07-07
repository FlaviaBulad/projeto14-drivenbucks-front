import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Logo from "../../layout/Logo.js";

export default function SignInPage() {
  const [userData, setUserData] = useState({
    email:"",
    password: ""
  });
  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  function handleForm(e){
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };
    
  async function login(e){
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post("https://drivenbucks.herokuapp.com/sign-in",userData);
      localStorage.setItem("token", response.data);
      setLoading(false);
      navigate("/main");
    } catch (error) {
     console.error(error.response);
      
    }

  }  
  return (
    <Container>
      <Logo></Logo>
      voltar
      <span>Ola</span>
      <span>entre para continuar</span>
      <form>
        <input onChange={handleForm} value={userData.email} name="email" type="email" placeholder="E-mail"></input>
        <input onChange={handleForm} value={userData.password} name="password" type="password" placeholder="Senha"></input>
        <button onClick={login}>Entrar</button>
      </form>
    </Container>
  )
};
const Container = styled.div`
  background-color:#EFEFEF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`