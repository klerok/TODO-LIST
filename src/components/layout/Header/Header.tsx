import logo from "../../../assets/images/List App Logo.png";
import styles from "./styles/index.module.css";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <img src={logo} alt="Логотип" className={styles.img}/>
        </div>
      </header>
    </>
  );
}
