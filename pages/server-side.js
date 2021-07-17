import Head from 'next/head'
import styles from '../styles/Home.module.css'
import client from '../apollo-client'
import gql from 'graphql-tag'

export default function Home({races}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to F1 in <a href="https://nextjs.org">Next.js (SSR)!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {races.map((race, i) => (
            <div key={i} className={styles.card}>
              <h3>{race.raceName}</h3>
              <p>
                Season {race.season} - Round {race.round}
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {    // to server side render
  console.log('Server Side: getServerSideProps')
  const { data } = await client.query({
    query: gql`
      query {
        races {
          season
          round
          raceName
        }
      }
    `,
  });

  return {
    props: {
      races: data.races.slice(0, 8),
    },
  };
}