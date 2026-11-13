import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMonster } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import styles from './MonsterDetail.module.css';

function MonsterDetail() {
  const { index } = useParams();
  const [monster, setMonster] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getMonster(index)
      .then((data) => setMonster(data))
      .catch((err) => setError(err.message || 'Failed to load monster'))
      .finally(() => setLoading(false));
  }, [index]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!monster) return null;

  return (
    <div className={styles.page}>
      <Link to="/monsters" className={styles.back}>
        ← Back to Monsters
      </Link>

      <header className={styles.header}>
        <h1>{monster.name}</h1>
        <p className={styles.meta}>
          {monster.size} {monster.type}
          {monster.alignment ? `, ${monster.alignment}` : ''}
        </p>
      </header>

      <section className={styles.stats}>
        <div><strong>Challenge Rating</strong> {monster.challenge_rating}</div>
        <div><strong>Armor Class</strong> {monster.armor_class?.[0]?.value ?? '—'}</div>
        <div><strong>Hit Points</strong> {monster.hit_points}</div>
        <div><strong>Speed</strong> {monster.speed?.walk || '—'}</div>
      </section>

      <section className={styles.abilities}>
        <h2>Ability Scores</h2>
        <div className={styles.abilityGrid}>
          <div><span>STR</span> {monster.strength}</div>
          <div><span>DEX</span> {monster.dexterity}</div>
          <div><span>CON</span> {monster.constitution}</div>
          <div><span>INT</span> {monster.intelligence}</div>
          <div><span>WIS</span> {monster.wisdom}</div>
          <div><span>CHA</span> {monster.charisma}</div>
        </div>
      </section>

      {monster.actions && monster.actions.length > 0 && (
        <section className={styles.section}>
          <h2>Actions</h2>
          {monster.actions.map((action) => (
            <div key={action.name} className={styles.action}>
              <h3>{action.name}</h3>
              <p>{action.desc}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default MonsterDetail;