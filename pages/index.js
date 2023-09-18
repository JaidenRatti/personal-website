import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';


export default function Home() {


  return (
    <div className={styles.container}>
      <Analytics />
      <Head>
        <link rel="stylesheet" href="https://latex.now.sh/style.min.css" />
        
      </Head>

      <main className={styles.header}>
        <h2 className={styles.title}>Jaiden Ratti</h2>
        <p className={styles.description}>2nd year computer science student at the University of Waterloo; pursuing a business specialization & minor in English.</p>
        <p className={styles.description}>Prev.</p>
        <ul className={styles.bulletList}>
          <li>Data Eng @ RBC Investor Services</li>
          <li>Research @ Blockchain Research Institute</li>
          <li>Micropayments Committee @ LinkSports</li>
          <li>Blockchain in Public Sector @ Cloud SynApps</li>
          <li>Started <Link href="https://www.nextgenfinance.org/" className={styles.customLink} target="_blank">nextgenfinance.org</Link> in high school</li>
        </ul>
        <p className={styles.description}>I like to read. See <Link href="/books"className={styles.customLink}>bookshelf</Link>.</p>
        <p className={styles.description}>Also enjoy road cycling. On Strava <Link href="https://www.strava.com/athletes/jaidenratti"className={styles.customLink} target="_blank">@jaidenratti</Link>.</p>
      <hr></hr>
      <p className={styles.description}>Email: <Link href="mailto:jkratti@uwaterloo.ca"className={styles.customLink} target="_blank">jkratti@uwaterloo.ca</Link><br/>
      LinkedIn: <Link href="https://www.linkedin.com/in/jaidenratti/"className={styles.customLink} target="_blank">@jaidenratti</Link><br/>
      GitHub: <Link href="https://github.com/JaidenRatti"className={styles.customLink} target="_blank">@jaidenratti</Link><br/>
      Twitter: <Link href="https://twitter.com/JaidenRatti"className={styles.customLink} target="_blank">@jaidenratti</Link><br/>      
      </p>


      
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}