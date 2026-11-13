import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEquipmentItem } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import styles from './EquipmentDetail.module.css';

function EquipmentDetail() {
  const { index } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getEquipmentItem(index)
      .then((data) => setItem(data))
      .catch((err) => setError(err.message || 'Failed to load equipment'))
      .finally(() => setLoading(false));
  }, [index]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!item) return null;

  return (
    <div className={styles.page}>
      <Link to="/equipment" className={styles.back}>
        ← Back to Equipment
      </Link>

      <header className={styles.header}>
        <h1>{item.name}</h1>
        {item.equipment_category && (
          <p className={styles.meta}>{item.equipment_category.name}</p>
        )}
      </header>

      <section className={styles.info}>
        {item.cost && (
          <div>
            <strong>Cost</strong> {item.cost.quantity} {item.cost.unit}
          </div>
        )}
        {item.weight !== undefined && (
          <div>
            <strong>Weight</strong> {item.weight} lb
          </div>
        )}
        {item.weapon_category && (
          <div>
            <strong>Weapon Category</strong> {item.weapon_category}
          </div>
        )}
        {item.armor_category && (
          <div>
            <strong>Armor Category</strong> {item.armor_category}
          </div>
        )}
      </section>

      {item.desc && item.desc.length > 0 && (
        <section className={styles.section}>
          <h2>Description</h2>
          {item.desc.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>
      )}

      {item.special && item.special.length > 0 && (
        <section className={styles.section}>
          <h2>Special</h2>
          {item.special.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>
      )}
    </div>
  );
}

export default EquipmentDetail;