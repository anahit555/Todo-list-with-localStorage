import { Link } from "react-router-dom";
import "./styles.scss";

function Navigation({ items }) {
  return (
    <header className="header">
      <div className="logo">Front-end </div>
      <nav>
        <ul className="badge">
          {items.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
