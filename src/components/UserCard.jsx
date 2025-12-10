import { HeartFilled } from "@ant-design/icons";
import { Button } from "antd";
import { HeartIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Card({ item }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "12px",
        paddingBottom: "7px",
        marginBottom: "16px",
        maxWidth: "220px",
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", height: "250px", borderRadius: "6px" }}
      />

      {/* ❤️ LIKE */}
      <span
        className="absolute top-3 right-3 cursor-pointer"
        onClick={() => navigate("/like", { state: item })}
      >
        <HeartIcon />
      </span>

      <h2>{item.title}</h2>
      <p>Type: {item.type}</p>
      <p>New price: {item.priceNew}</p>

      {/* 🛒 SHOP BUTTON */}
      <div className="flex items-end justify-end pt-5">
        <Button
          className="w-full !bg-[#5042bd] !text-[15px] !font-[600] !text-white"
          onClick={() => navigate("/shop", { state: item })}
        >
          shop
        </Button>
      </div>
    </div>
  );
}
