import Head from 'next/head'
import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'

import styles from '../styles/pages/Home.module.css'

const Home = () => {
  return (
      <div>
        <Head>
          <title>Pomodoro-Move</title>
        </Head>
        <div className={styles.container}>
          <ExperienceBar />

          <section>

            <article>
                <Profile />
                <CompletedChallenges />
                <Countdown />
            </article>
            <article>

            </article>

          </section>

        </div>
        {/* <img src="/vercel.svg" alt="Vercel Logo" /> */}
      </div>
  )
}

export default Home