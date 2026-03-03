import React from 'react';
import styles from '../Toast.module.css';

export type ToastType = 'success' | 'error' | 'info';

export type ToastState = {
  type: ToastType;
  text: string;
} | null;

type Props = {
  toast: ToastState;
  onClose: () => void;
  autoHideMs?: number;
};

export default function Toast({ toast, onClose, autoHideMs = 3500 }: Props) {
  React.useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(onClose, autoHideMs);
    return () => window.clearTimeout(t);
  }, [toast, autoHideMs, onClose]);

  if (!toast) return null;

  const title = toast.type === 'success' ? 'Success' : toast.type === 'error' ? 'Error' : 'Info';

  // mapping class untuk background
  const typeClass = toast.type === 'success' ? styles.success : toast.type === 'error' ? styles.error : styles.info;

  return (
    <div className={`${styles.toast} ${typeClass}`} role="status" aria-live="polite">
      <div className={styles.title}>{title}</div>

      <div className={styles.body}>
        <p className={styles.text}>{toast.text}</p>

        <button type="button" className={styles.closeBtn} onClick={onClose}>
          Tutup
        </button>
      </div>
    </div>
  );
}
