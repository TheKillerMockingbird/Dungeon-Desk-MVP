import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEquipment } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import styles from './EquipmentList.module.css';

function EquipmentList() {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadEquipment = () => {
    setLoading(true);
    setError(null);

    getEquipment()
      .then((data) => {
        setEquipment(data.results || []);
      })
      .catch((err) => {
        setError(err.message || 'Failed to load equipment');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadEquipment();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={loadEquipment} />;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Equipment</h1>
        <p>{equipment.length} items from the SRD</p>
      </header>

      <ul className={styles.list}>
        {equipment.map((item) => (
          <li key={item.index}>
            <Link to={`/equipment/${item.index}`} className={styles.item}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EquipmentList;