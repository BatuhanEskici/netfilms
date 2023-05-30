import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://twitter.com/batuhann_e" target="_blank">
        Batuhan Eskici
      </Link>
    </footer>
  );
}

export default Footer;
