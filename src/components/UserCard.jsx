export default function Card({ item }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "12px",
      marginBottom: "16px",
      maxWidth: "220px"
    }}>
      <img src={item.image} alt={item.title} style={{ width: "100%", borderRadius: "6px" }} />
      <h2>{item.title}</h2>
      <p>Type: {item.type}</p>
      <p>New price: {item.priceNew}</p>
    </div>
  );
}
