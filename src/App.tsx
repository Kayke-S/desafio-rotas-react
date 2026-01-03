import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeBody from "./routes/Home/HomeBody";
import Home from "./routes/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
