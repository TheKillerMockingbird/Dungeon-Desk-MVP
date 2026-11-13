import styles from './ErrorMessage.module.css';

function ErrorMessage({ message, onRetry }) {
  return (
    <div className={styles.error}>
      <p>{message || 'Something went wrong.'}</p>
      {onRetry && (
        <button onClick={onRetry} className={styles.retryBtn}>
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;