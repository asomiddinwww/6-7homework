import { useLocation } from "react-router-dom";

const Shop = () => {
  const { state: item } = useLocation(); // card shu yerga keladi

  if (!item) return <div>Hech narsa yuborilmadi</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Selected Product</h1>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "12px",
          maxWidth: "250px",
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "100%", borderRadius: "6px" }}
        />
        <h2>{item.title}</h2>
        <p>Type: {item.type}</p>
        <p>Price: {item.priceNew}</p>
      </div>
    </div>
  );
};

export default Shop;
