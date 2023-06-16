import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <h4 className={styles.footer__title}>Movie App</h4>
        <p className={styles.footer__author}>
          Copyright &copy; By Baihaki {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
