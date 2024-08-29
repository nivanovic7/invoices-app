import styles from "./Row.module.css";

function Row({ children }) {
  return <div className={styles.row}>{children}</div>;
}

export default Row;
