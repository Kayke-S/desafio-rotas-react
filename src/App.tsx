import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeBody from "./routes/Home/HomeBody";
import Home from "./routes/Home";
import Products from "./routes/Home/Products";
import ComputerCategory from "./routes/Home/Products/ComputerCategory";
import EletronicsCategory from "./routes/Home/Products/EletronicsCategory";
import BooksCategory from "./routes/Home/Products/BooksCategory";
import AboutUs from "./routes/Home/AboutUs";
import NotFound from "./routes/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="products" element={<Products />}>
            <Route index element={<Navigate to="/products/computers" />} />
            <Route path="computers" element={<ComputerCategory />} />
            <Route path="eletronics" element={<EletronicsCategory />} />
            <Route path="books" element={<BooksCategory />} />
          </Route>
          <Route path="about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
