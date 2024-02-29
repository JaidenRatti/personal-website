// pages/num.js
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import styles from '../styles/Home.module.css';

const NumPage = ({ numHtmlContent }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MATH135</title>
      </Head>
      <main className={styles.main}>
        {/* Render the content of math135.html directly */}
        <div dangerouslySetInnerHTML={{ __html: numHtmlContent }} />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  
  const numHtmlPath = path.join(process.cwd(), 'pages/math135.html');
  const numHtmlContent = fs.readFileSync(numHtmlPath, 'utf-8');

  return {
    props: {
      numHtmlContent,
    },
  };
}

export default NumPage;
