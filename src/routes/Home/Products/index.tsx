import "./styles.css";

import { NavLink, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <main>
      <section id="dr-section-products">
        <div className="dr-container">
          <div className="dr-category-container">
            <NavLink
              to="/products/computers"
              className={({ isActive }) =>
                isActive ? "dr-item dr-item-active" : "dr-mr20"
              }
            >
              Computadores
            </NavLink>
            <NavLink
              to="/products/eletronics"
              className={({ isActive }) =>
                isActive ? "dr-item dr-item-active" : "dr-mr20"
              }
            >
              Eletrônicos
            </NavLink>
            <NavLink
              to="/products/books"
              className={({ isActive }) =>
                isActive ? "dr-item dr-item-active" : "dr-mr20"
              }
            >
              Livros
            </NavLink>
          </div>
        </div>

        <Outlet />
      </section>
    </main>
  );
}
