import styles from "./Heading.module.css";

function Heading({ text, children }) {
  return (
    <div className={styles.heading}>
      <h1>{text}</h1>
      {children}
    </div>
  );
}

export default Heading;
