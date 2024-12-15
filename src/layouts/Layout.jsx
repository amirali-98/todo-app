import styles from "./css/Layout.module.css";

function Layout(props) {
  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.userInfo}>Welcome Amirali</span>
          <nav className={styles.nav}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Tasks</a>
              </li>
              <li>
                <a href="#">Add Tasks</a>
              </li>
              <li>
                <a href="#">Pomodoro</a>
              </li>
            </ul>
          </nav>
          <button className={styles.btn}>Logout</button>
        </header>

        <footer className={styles.footer}>
          <p>Developed By Amirali With ❤️</p>
        </footer>
      </div>
    </>
  );
}

export default Layout;
