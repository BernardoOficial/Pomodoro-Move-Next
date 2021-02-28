import Head from 'next/head'
import ChallengeBox from '../components/ChallengeBox'
import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import { CountdowsProvider } from '../contexts/CountdownContext'

import styles from '../styles/pages/Home.module.css'

const Home = () => {
  return (
      <div>
        <Head>
          <title>Pomodoro-Move</title>
        </Head>
        <div className={styles.container}>
          <ExperienceBar />

          <CountdowsProvider>
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
          </CountdowsProvider>

        </div>
      </div>
  )
}

export default Home