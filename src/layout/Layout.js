import "./Layout.scss";
import Navigation from "../components/Navigation";
import { TODO_STATUSES } from "../config";

function Layout(props) {
  return (
    <div>
      <Navigation items={TODO_STATUSES} />
      <main className="main">{props.children}</main>
    </div>
  );
}

export default Layout;
