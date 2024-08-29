import styles from "./TitleAndDesc.module.css";

function TitleAndDesc({ title, desc, children }) {
  return (
    <div className={styles.wrap}>
      <span className={`${styles.title} fs-small-text`}>{title}</span>
      <span className={`${styles.desc} fw-bold`}>{desc}</span>
      {children}
    </div>
  );
}

export default TitleAndDesc;
