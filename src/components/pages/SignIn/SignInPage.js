import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FiArrowLeft, FiMail, FiLock } from "react-icons/fi";
import { IconContext } from "react-icons";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from "react-loader-spinner";
import Logo from "../../layout/Logo.js";

export default function SignInPage() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleForm(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  function login(e) {
    e.preventDefault();
    setLoading(true);
    const promise = axios.post(
      "https://drivenbucks.herokuapp.com/sign-in",
      userData
    );

    promise
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);
        setLoading(false);
        navigate("/main/");
      })
      .catch((error) => {
        console.log(error);
        const message = error.response.data;
        alert(message);
        setLoading(false);
      });
  }
  console.log(userData);
  return (
    <Container>
      <Logo></Logo>
      <IconContext.Provider
        value={{ size: "2rem", className: "global-class-name" }}
      >
        <Link style={{ color: "#545454" }} to="/">
          <FiArrowLeft />
        </Link>
      </IconContext.Provider>
      <h2>Ola!</h2>
      <span>entre para continuar</span>
      <form onSubmit={login}>
        <ContainerInput>
          <div>
            <IconContext.Provider
              value={{
                size: "1.5rem",
                color: "#545454",
                className: "global-class-name",
              }}
            >
              <FiMail> </FiMail>
            </IconContext.Provider>
          </div>
          <input
            onChange={handleForm}
            value={userData.email}
            name="email"
            type="email"
            placeholder="E-mail"
          ></input>
        </ContainerInput>
        <ContainerInput>
          <div>
            <IconContext.Provider
              value={{
                size: "1.5rem",
                color: "#545454",
                className: "global-class-name",
              }}
            >
              <FiLock></FiLock>
            </IconContext.Provider>
          </div>
          <input
            onChange={handleForm}
            value={userData.password}
            name="password"
            type="password"
            placeholder="Senha"
          ></input>
        </ContainerInput>

        {loading ? (
          <ContainerSpinner>
            <ThreeDots
              type="ThreeDots"
              color="#FFFFFF"
              height={80}
              width={80}
            />
          </ContainerSpinner>
        ) : (
          <button onClick={login}>Entrar</button>
        )}
      </form>
      <p>
        Novo por aqui? <Link to="/sign-up/">Cadastra-se</Link>
      </p>
    </Container>
  );
}
const Container = styled.div`
  background-color:#EFEFEF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding 0 30px;
  height: 100vh;
  &:first-child{
    padding-top: 20px;
  }
  h2{
    font: 700 40px 'Quicksand', sans-serif;
    color: #654c41;
    align-self: flex-start;
  };

  span{
    font: 400 14px 'Quicksand', sans-serif;
    color: #545454;
    align-self: flex-start;
  };

  form{
    margin-top:40px;
    display:flex;
    flex-direction: column;
    gap: 30px;
  };
  
  input{
    height: 58px;
    width: 326px;
    border: none;
    border-radius: 50px;
    font: 400 20px 'Quicksand', sans-serif;
    padding-left: 60px;
    box-shadow: 2px 2px 2px rgba(0,0,0,.2);
  };
  
  input:focus{
    outline: none;
  };
  
  button{
    background-color:  #654c41;
    height: 58px;
    width: 326px;
    color: #FFFFFF;
    border: none;
    border-radius: 50px;
    font: 700 20px 'Quicksand', sans-serif; 
    cursor: pointer;
  };
  
  p{
    margin-top: 35px;
    font: 400 14px 'Quicksand', sans-serif;
    color: #545454;
  };
  
  a{
    align-self: flex-start;
    color: #d57e52;
  };
`;

const ContainerInput = styled.div`
  position: relative;
  div {
    top: 17px;
    left: 18px;
    position: absolute;
    margin: 0px;
  }
`;
const ContainerSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #654c41;
  height: 58px;
  width: 326px;
  border-radius: 50px;
`;
