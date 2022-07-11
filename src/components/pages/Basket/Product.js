import styled from "styled-components";

export default function Product(props) {
  const { title, price } = props;
  return (
    <List>
      <span className="title">{title}</span>
      <span className="price">R${price}</span>
    </List>
  );
}

const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2px 20px;
  margin-bottom: 4px;
  .price {
    font: 700 14px "Open Sans", sans-serif;
    color: #000000;
  }
  .title {
    font: 400 12px "Open Sans", sans-serif;
    color: #000000;
  }
`;
