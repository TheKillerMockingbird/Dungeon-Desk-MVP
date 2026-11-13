import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMonsters } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import styles from './MonstersList.module.css';

function MonstersList() {
  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadMonsters = () => {
    setLoading(true);
    setError(null);

    getMonsters()
      .then((data) => {
        setMonsters(data.results || []);
      })
      .catch((err) => {
        setError(err.message || 'Failed to load monsters');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMonsters();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={loadMonsters} />;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Monsters</h1>
        <p>{monsters.length} creatures from the SRD</p>
      </header>

      <ul className={styles.list}>
        {monsters.map((monster) => (
          <li key={monster.index}>
            <Link to={`/monsters/${monster.index}`} className={styles.item}>
              {monster.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MonstersList;