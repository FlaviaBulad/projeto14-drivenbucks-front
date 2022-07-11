import styled from "styled-components";

import visa from "../../../assets/images/payment/visa.png";
import mastercard from "../../../assets/images/payment/mastercard.png";
import paypal from "../../../assets/images/payment/paypal.png";
import applepay from "../../../assets/images/payment/applepay.png";
import googlepay from "../../../assets/images/payment/googlepay.png";
import bitcoin from "../../../assets/images/payment/bitcoin.png";

export default function PaymentMethod() {
  function handleClick(e) {
    let target = e.currentTarget;
    target.classList.toggle("clicked");
  }

  return (
    <>
      <List>
        <p>Escolha a forma de pagamento</p>
        <div className="options">
          <img src={visa} alt="visa" onClick={handleClick} />
          <img src={mastercard} alt="mastercard" onClick={handleClick} />
          <img src={applepay} alt="applepay" onClick={handleClick} />
          <img src={googlepay} alt="googlepay" onClick={handleClick} />
          <img src={paypal} alt="paypal" onClick={handleClick} />
          <img src={bitcoin} alt="bitcoin" onClick={handleClick} />
        </div>
      </List>
    </>
  );
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
.options{
  margin-top: 20px;
}
  p{
    margin-top:120px;
    font: 700 20px "Open Sans", sans-serif;
    color: #000000;
  }
  img {
    width: 125px;
  }
  .clicked{
    border 2px solid lightgray;
    border-radius: 20px;
  }
`;
