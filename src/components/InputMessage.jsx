import styles from "./InputMessage.module.css";

function InputMessage({ message, type }) {
  return <div className={`${styles[type]} fs-small-text`}>{message}</div>;
}

export default InputMessage;
