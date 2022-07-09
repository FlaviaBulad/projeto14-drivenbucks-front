import styled from "styled-components";

export default function Product(props) {
  const { name, price } = props;
  return (
    <List>
      <span className="name">{name}</span>
      <span className="price">R${price}</span>
    </List>
  );
}

const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2px 20px;
  .price {
    font: 700 14px "Open Sans", sans-serif;
    color: #000000;
  }
  .name {
    font: 400 12px "Open Sans", sans-serif;
    color: #000000;
  }
`;
