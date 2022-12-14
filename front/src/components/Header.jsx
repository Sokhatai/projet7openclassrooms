import "../style/header.css";
import logo from "../style/images/icon-left-font-monochrome-white.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <img id="logo" src={logo} alt="logo de l'entreprise grouporama" />
      <h2 className="headerNav">
        <Link to="/suscribe">Inscription</Link>
      </h2>
      <h2 className="headerNav">
        <Link to="/">Connection</Link>
      </h2>
    </div>
  );
}
