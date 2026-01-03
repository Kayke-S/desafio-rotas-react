import "./styles.css";
import imgHouse from "../../assets/casa.png";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="dr-container">
        <div className="dr-container-items">
          <nav>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "dr-mr20 dr-item-active" : "dr-mr20"
              }
            >
              Início
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "dr-mr20 dr-item-active" : "dr-mr20"
              }
              
            >
              Produtos
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "dr-mr20 dr-item-active" : "dr-mr20"
              }
            >
              Sobre nós
            </NavLink>
          </nav>
          <Link to="/home">
            <img src={imgHouse} alt="Casa" />
          </Link>
        </div>
      </div>
    </header>
  );
}
