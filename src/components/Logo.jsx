import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <img src="../src/assets/logo.png" alt="logo" />
    </div>
  );
}

export default Logo;
