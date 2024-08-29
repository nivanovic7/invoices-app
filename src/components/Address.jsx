import styles from "./Address.module.css";

function Address({ textAlign, ...props }) {
  const values = Object.values(props).map(function (value) {
    return value;
  });

  return (
    <article className={`${styles.address} ${styles[`${textAlign}`]}`}>
      {values.map((value) => (
        <span className=" fs-small-text" key={value}>
          {value}
        </span>
      ))}
    </article>
  );
}

export default Address;
