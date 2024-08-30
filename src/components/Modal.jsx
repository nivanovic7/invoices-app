import styles from "./Modal.module.css";

function Modal({ children }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Modal;
