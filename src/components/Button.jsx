import styles from "./Button.module.css";

function Button({ btnIcon = "", text, colorClass }) {
  return (
    <button className={`${styles.button} ${styles[colorClass]}`}>
      {btnIcon !== "" && <span className={styles.btnIcon}>{btnIcon}</span>}
      <span>{text}</span>
    </button>
  );
}

export default Button;
