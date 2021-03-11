import Head from 'next/head'
import { GetServerSideProps } from 'next'

import ChallengeBox from '../components/ChallengeBox'
import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import ChangeColor from '../components/ChangeColor'

import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdowsProvider } from '../contexts/CountdownContext'

import styles from '../styles/pages/Home.module.css'
import MenuAside from '../components/MenuAside'
import Loading from '../components/Loading'
import { useEffect, useState } from 'react'

interface HomeProps {
  level: number;
  experienceAtual: number;
  challengesConcluidos: number;
}

const Home = (props: HomeProps) => {

  const [estaCarregandoJanela, setEstaCarregandoJanela] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setEstaCarregandoJanela(false);
    }, 2000);
  }, [])

  return (
      <ChallengesProvider
        level={props.level}
        experienceAtual={props.experienceAtual}
        challengesConcluidos={props.challengesConcluidos}
      >
        {estaCarregandoJanela ? <Loading /> : (
          <div>
          <Head>
            <title>Pomodoro-Move</title>
          </Head>

          <MenuAside />

          <div className={`${styles.container}`}>
            <ExperienceBar />

            <ChangeColor />

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
        ) }
      </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  
  const { level, experienciaAtual, challengesConcluidos } = context.req.cookies;
  
  return {
    props: {
      level: Number(level),
      experienceAtual: Number(experienciaAtual),
      challengesConcluidos: Number(challengesConcluidos),
    },
  };
}

export default Home