import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.hero}>
        <h1>Dungeon Desk</h1>
        <p>Quick reference for D&D 5e monsters, spells, and equipment.</p>
      </header>

      <section className={styles.cards}>
        <Link to="/monsters" className={styles.card}>
          <h2>Monsters</h2>
          <p>Browse official SRD monsters and stat blocks.</p>
        </Link>

        <Link to="/spells" className={styles.card}>
          <h2>Spells</h2>
          <p>Look up spell details, levels, and descriptions.</p>
        </Link>

        <Link to="/equipment" className={styles.card}>
          <h2>Equipment</h2>
          <p>Find gear, weapons, and adventuring equipment.</p>
        </Link>
      </section>
    </div>
  );
}

export default Home;