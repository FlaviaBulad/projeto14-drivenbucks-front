import styled from "styled-components";
import axios from "axios";

export default function CardProduct({
  id,
  image,
  title,
  description,
  price,
  rate,
  productsOnTheBasket,
  setProductsOnTheBasket,
}) {
  function sendProductToBasket() {
    const produtcs = {
      id,
      image,
      title,
      description,
      price,
    };

    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.post(
      "https://drivenbucks.herokuapp.com/basket",
      produtcs,
      config
    );
    promise
      .then((reponse) => {
        console.log(reponse);

        setProductsOnTheBasket((productsOnTheBasket = productsOnTheBasket + 1));
      })
      .catch((error) => {
        console.log(error.reponse);
      });
  }

  return (
    <Card>
      <img src={image} alt="produto" />
      <div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <span className="rate">{rate}</span>
        </div>

        <ValueContainer>
          <span>R${price}</span>
          <button onClick={sendProductToBasket}>Add to cart</button>
        </ValueContainer>
      </div>
    </Card>
  );
}
const Card = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  gap: 10px;
  padding-bottom: 30px;
  img {
    height: 150px;
    width: 150px;
    border-radius: 5px;
  }

  h2 {
    margin-bottom: 10px;
    font: 700 12px "Open Sans", sans-serif;
  }
  p {
    margin-bottom: 10px;
    font: 400 10px "Open Sans", sans-serif;
  }
  .rate {
    color: #ffc229;
  }
`;
const ValueContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font: 700 16px "Open Sans", sans-serif;
  }
  button {
    background-color: #654c41;
    height: 35px;
    width: 100px;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font: 700 12px "Open Sans", sans-serif;
    cursor: pointer;
    &:hover {
      background-color: #866658;
    }
  }
`;
