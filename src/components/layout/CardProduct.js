import styled from "styled-components";

import apple from "../../assets/images/products/apple-pie.png";
export default function CardProduct({image, title, description, rate, }){
    return (
        <Card>
        <img src={apple} />
        <div>
          <div>
            <h2>Torta de maçã</h2>
            <p>Deliciosa, perfeita para compartilhar com a familia!</p>
            <span>* * * * *</span>
          </div>
          
          <ValueContainer>
            <span>R$21,50</span>
            <button>Add to cart</button>
          </ValueContainer>
            
        </div>
      </Card>
    );
};
const Card = styled.div`
    width: 100%;
    height: 150px;
    /* background-color: #EFEFEF; */
    display: flex;
    gap: 10px;
    img{
      height: 150px;
      width:150px;
      border-radius: 5px;
    };
    
    h2{
      margin-bottom: 10px;
      font: 700 16px 'Quicksand', sans-serif;
        
    };
    p{
      margin-bottom: 10px;
      font: 700 10px 'Quicksand', sans-serif;
    };
`
 const ValueContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span{
    font: 700 22px 'Quicksand', sans-serif;
  };
  button{
    background-color:  #654c41;
    height: 35px;
    width: 100px;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    font: 700 12px 'Quicksand', sans-serif; 
    cursor: pointer;
  }
 `