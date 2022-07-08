import styled from "styled-components";

import { FiMenu,FiLogOut } from "react-icons/fi";

import Logo from "../../layout/Logo";
import banner from "../../../assets/images/layout/banner.png"
import CardProduct from "../../layout/CardProduct.js"

const produtcs =[{
  _id: "objectId(a12313t13i1yoi31u3o1-01)",
  image: "https://cooknenjoy.com/wp-content/uploads/2022/04/torta-de-limao-1800x1351.jpg",
  title: "Torda de limão",
  description: "Deliciosa torta com casquinha de boicoito e raspas de limão",
  rate: "* * * * *",
  price: "15,50"
},
{
  _id: "objectId(a12313t13i1yoi31u3o1-02)",
  image: "https://t2.rg.ltmcdn.com/pt/posts/2/9/9/bolo_de_chocolate_cremoso_5992_orig.jpg",
  title: "Bolo de chocolate",
  description: "Delicioso de chocolate com recheio de chocolate e granulado",
  rate: "* * * * *",
  price: "15,50"
}
]
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
        {produtcs.map((item, index)=>
        <CardProduct key={index} 
          image={item.image} 
          title={item.title} 
          description={item.description} 
          price={item.price}
          rate={item.rate}
          id={item._id}
        ></CardProduct>)}
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
    gap: 15px;

  `
  