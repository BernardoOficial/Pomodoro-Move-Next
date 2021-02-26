import Head from 'next/head'
import ChallengeBox from '../components/ChallengeBox'
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
                <ChallengeBox />
            </article>

          </section>

        </div>
      </div>
  )
}

export default Home