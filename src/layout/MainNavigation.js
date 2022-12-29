import { Link } from "react-router-dom";
import "./MainNavigation.scss";

function MainNavigation() {
  return (
    <header className="header">
      <div className="logo">Front-end </div>
      <nav>
        <ul className="badge">
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="completed">Completed</Link>
          </li>
          <li>
            <Link to="uncompleted">Uncompleted</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
