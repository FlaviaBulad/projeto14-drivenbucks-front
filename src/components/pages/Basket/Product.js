export default function Product(props) {
  const { name, value } = props;
  return (
    <div>
      <div>
        <p>{name}</p>
      </div>
      <p>{value}</p>
    </div>
  );
}
