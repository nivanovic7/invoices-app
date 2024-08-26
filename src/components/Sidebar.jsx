import DarkMode from "./DarkMode";
import Logo from "./Logo";
import ProfileImg from "./ProfileImg";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <DarkMode />
      <ProfileImg />
    </aside>
  );
}

export default Sidebar;
