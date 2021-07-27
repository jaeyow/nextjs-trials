import Head from 'next/head'
import styles from '../styles/Home.module.css'
import client from '../apollo-client'
import gql from 'graphql-tag'
import Image from 'next/image';

export default function Home({homepageData}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to F1 in <a href="https://nextjs.org">Next.js (SSG)!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        {/* <div className={styles.grid}>
          {races.map((race, i) => (
            <div key={i} className={styles.card}>
              <h3>{race.raceName}</h3>
              <p>
                Season {race.season} - Round {race.round}
              </p>
            </div>
          ))}
        </div> */}
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>{homepageData.discoverAndBuild.sedansAndHatchbackTitle}</h3>
            <Image
              src={homepageData.discoverAndBuild.sedansAndHatchbackImageSm}
              alt="sedansAndHatchbackImageSm"
              width="500"
              height="500"
            />
          </div>
          <div className={styles.card}>
            <h3>{homepageData.discoverAndBuild.suvTitle}</h3>
            <Image
              src={homepageData.discoverAndBuild.suVsImageSm}
              alt="suVsImageSm"
              width="500"
              height="500"
            />
          </div>
          <div className={styles.card}>
            <h3>{homepageData.discoverAndBuild.performanceTitle}</h3>
            <Image
              src={homepageData.discoverAndBuild.performanceImageSm}
              alt="performanceImageSm"
              width="500"
              height="500"
            />
          </div>
          <div className={styles.card}>
            <h3>{homepageData.discoverAndBuild.hybridTitle}</h3>
            <Image
              src={homepageData.discoverAndBuild.hybridsImageSm}
              alt="hybridsImageSm"
              width="500"
              height="500"
            />
          </div>
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

// export async function getStaticProps() {      // to static generate
//   console.log('Build Time: getStaticProps')
//   const { data } = await client.query({
//     query: gql`
//       query {
//         races {
//           season
//           round
//           raceName
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       races: data.races.slice(0, 6),
//     },
//   };
// }

export async function getStaticProps() {      // to static generate
  console.log('Build Time: getStaticProps jose')
  // const res = await fetch(`http://ergast.com/api/f1/2019.json`)
  const res = await fetch(`http://www.oem-test.subaru.com.au/proxy/cms-api/homepage`)
  const data = await res.json()

  // Returned as props to page
  return {
      props: {
        homepageData: data,
      }
  }
}

