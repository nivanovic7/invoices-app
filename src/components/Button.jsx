import styles from "./Button.module.css";

function Button({ btnIcon = "", text, colorClass, type = "button" }) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[colorClass]} fw-semi-bold`}
    >
      {btnIcon !== "" && <span className={styles.btnIcon}>{btnIcon}</span>}
      <span>{text}</span>
    </button>
  );
}

export default Button;
