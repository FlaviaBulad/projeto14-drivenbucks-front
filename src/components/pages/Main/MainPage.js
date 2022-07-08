import styled from "styled-components";

import { FiMenu,FiLogOut } from "react-icons/fi";

import Logo from "../../layout/Logo";
import banner from "../../../assets/images/layout/banner.png"
import CardProduct from "../../layout/CardProduct.js"
export default function MainPage() {
  return (
    <>
    <ContainerHeader>
        <BackIcon>
          <FiMenu color={"#FFFFFF"} size={30}></FiMenu>
        </BackIcon>
        <Logo></Logo>
        <BackIcon>
          <FiLogOut color={"#654C41"} size={30}></FiLogOut>
        </BackIcon>
      </ContainerHeader>
    <Container>
      <Banner src={banner} alt="banner"/>
      <ContainerProducts>
        <CardProduct></CardProduct>
      </ContainerProducts>
      
    </Container>
    
    </>
    
  );
}
const Container = styled.div`
  position: relative;
  background-color:#FFFFFF;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding 0 30px;
  height: 100vh;
  
  `
  const ContainerHeader = styled.div`
    padding 10px 30px;
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
  `
  const BackIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #654C41;
    border-radius: 4px;

  `
  const Banner = styled.img`
    position: absolute;
    right: 30px;
    top: -65px;
    width:353px;
  
  `
  const ContainerProducts = styled.div`
    margin-top: 220px;
    display: flex;
    flex-direction: column;
    

  `
  