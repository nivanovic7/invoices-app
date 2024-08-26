import styles from "./ProfileImg.module.css";

function ProfileImg() {
  return (
    <div className={styles.container}>
      <img src="https://picsum.photos/200" alt="user img" />
    </div>
  );
}

export default ProfileImg;
