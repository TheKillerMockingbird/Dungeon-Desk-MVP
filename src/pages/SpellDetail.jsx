import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSpell } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import styles from './SpellDetail.module.css';

function SpellDetail() {
  const { index } = useParams();
  const [spell, setSpell] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getSpell(index)
      .then((data) => setSpell(data))
      .catch((err) => setError(err.message || 'Failed to load spell'))
      .finally(() => setLoading(false));
  }, [index]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!spell) return null;

  return (
    <div className={styles.page}>
      <Link to="/spells" className={styles.back}>
        ← Back to Spells
      </Link>

      <header className={styles.header}>
        <h1>{spell.name}</h1>
        <p className={styles.meta}>
          Level {spell.level} {spell.school?.name}
        </p>
      </header>

      <section className={styles.info}>
        <div><strong>Casting Time</strong> {spell.casting_time}</div>
        <div><strong>Range</strong> {spell.range}</div>
        <div><strong>Components</strong> {spell.components?.join(', ')}</div>
        <div><strong>Duration</strong> {spell.duration}</div>
      </section>

      {spell.desc && (
        <section className={styles.section}>
          <h2>Description</h2>
          {spell.desc.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>
      )}

      {spell.higher_level && spell.higher_level.length > 0 && (
        <section className={styles.section}>
          <h2>At Higher Levels</h2>
          {spell.higher_level.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>
      )}
    </div>
  );
}

export default SpellDetail;