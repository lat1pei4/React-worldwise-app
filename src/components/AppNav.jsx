import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">都市</NavLink>
        </li>
        <li>
          <NavLink to="countries">国</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
