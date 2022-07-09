import styled from "styled-components";
import axios from "axios";

export default function CardProduct({id,image, title, description, price, rate }){
  
  function sendProductToBasket(){
    const produtcs ={
      id,
      image,
      title,
      description,
      price
    };
    
    const token = localStorage.getItem("token");

    const config = {
      headers : {
                "Authorization": `Bearer ${token}`
                }
    };

    const promise = axios.post("https://drivenbucks.herokuapp.com/basket", produtcs, config);
    promise.then(reponse=>{
      console.log(reponse);
    }).catch(error =>{
      console.log(error.reponse);
    })
    
  };

  return (
        <Card>
        <img src={image} />
        <div>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{rate}</span>
          </div>
          
          <ValueContainer>
            <span>R${price}</span>
            <button onClick={sendProductToBasket}>Add to cart</button>
          </ValueContainer>
            
        </div>
      </Card>
    );
};
const Card = styled.div`
    width: 100%;
    height: 150px;
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