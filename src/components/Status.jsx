import styles from "./Status.module.css";
import { capitalizeWord } from "../helpers/helperFunctions";

function Status({ status }) {
  const capStatus = capitalizeWord(status);
  return (
    <span className={`${styles.status} bg-${status.toLowerCase()}`}>
      <svg width="20" height="20">
        <circle cx="4" cy="10" r="3.5" />
      </svg>
      {capStatus}
    </span>
  );
}

export default Status;
