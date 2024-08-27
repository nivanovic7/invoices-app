import { useEffect, useRef, useState } from "react";
import styles from "./Filter.module.css";

function Filter() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [isOpened, setIsOpened] = useState(false);
  const options = ["all", "paid", "pending", "draft"];

  const filterRef = useRef(null);

  useEffect(() => {
    function onOutsideClick(e) {
      if (filterRef && !filterRef.current.contains(e.target)) {
        setIsOpened(false);
      }
    }
    document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  }, []);

  return (
    <div ref={filterRef} className={styles.filter}>
      <button onClick={() => setIsOpened((isOpened) => !isOpened)}>
        <span>Filter by status</span>
        <svg
          className={isOpened ? styles.opened : styles.closed}
          width="15px"
          height="15px"
          viewBox="0 0 24 24"
        >
          <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" />
        </svg>
      </button>

      {isOpened && (
        <div className={styles.options}>
          <ul role="list">
            {options.map((option) => (
              <li onClick={() => setSelectedStatus(option)} key={option}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Filter;
