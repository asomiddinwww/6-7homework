import { Route, Routes } from "react-router-dom";
import CardsPage from "../pages/UsersPage";
import MainLayout from "../components/layout/MainLayout";
import Like from "../pages/Like";
import Shop from "../pages/AllCards";
import Edit from "../pages/Edit";
import Info from "../pages/Info";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<CardsPage />} />
          <Route path="/products" element={<CardsPage />} />    
          <Route path="/like" element={<Like />} />
          <Route path="/info" element={<Info/>} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/edit" element={<Edit />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
