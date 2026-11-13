import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <NavLink to="/">Dungeon Desk</NavLink>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/monsters" className={({ isActive }) => isActive ? styles.active : undefined}>
            Monsters
          </NavLink>
        </li>
        <li>
          <NavLink to="/spells" className={({ isActive }) => isActive ? styles.active : undefined}>
            Spells
          </NavLink>
        </li>
        <li>
          <NavLink to="/equipment" className={({ isActive }) => isActive ? styles.active : undefined}>
            Equipment
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;