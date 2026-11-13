import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSpells } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import styles from './SpellsList.module.css';

function SpellsList() {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadSpells = () => {
    setLoading(true);
    setError(null);

    getSpells()
      .then((data) => {
        setSpells(data.results || []);
      })
      .catch((err) => {
        setError(err.message || 'Failed to load spells');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadSpells();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={loadSpells} />;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Spells</h1>
        <p>{spells.length} spells from the SRD</p>
      </header>

      <ul className={styles.list}>
        {spells.map((spell) => (
          <li key={spell.index}>
            <Link to={`/spells/${spell.index}`} className={styles.item}>
              {spell.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpellsList;