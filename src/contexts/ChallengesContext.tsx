import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from '../../challenges.json';
import Cookies from 'js-cookie'
import LevelUpModal from "../components/LevelUpModal";

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesProviderDados {
  challengerAtivo: Challenge;
  level: number;
  experienciaAtual: number;
  challengesConcluidos: number;
  experienciaParaProximoNivel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completedChallenge: () => void;
  closeModal: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    experienceAtual: number;
    challengesConcluidos: number;
}

const ChallengesContext = createContext({} as ChallengesProviderDados);

const ChallengesProvider = ({ 
  children,
  ...rest
}: ChallengesProviderProps) => {

    const [challengerAtivo, setChallengerAtivo] = useState(null);
    const [level, setLevel] = useState(rest.level || 1);
    const [experienciaAtual, setExperienciaAtual] = useState(rest.experienceAtual || 0);
    const [challengesConcluidos, setChallengesConcluidos] = useState(rest.challengesConcluidos || 0);
    const [modalEstaAtivo, setModalEstaAtivo] = useState(false);

    const experienciaParaProximoNivel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {

      Notification.requestPermission();

    }, [])

    useEffect(() => {

      Cookies.set('level', String(level));
      Cookies.set('experienciaAtual', String(experienciaAtual));
      Cookies.set('challengesConcluidos', String(challengesConcluidos));

    }, [level, experienciaAtual, challengesConcluidos])

    const levelUp = () => {
        setLevel(level + 1);
        setModalEstaAtivo(true);
    }

    const closeModal = () => {
      setModalEstaAtivo(false);
    };

    const startNewChallenge = () => {
        const numberRandom = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[numberRandom];
        
        setChallengerAtivo(challenge);

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted') {
          new Notification("Novo desafio! 🥳", {
            body: `Começe agora, desafio valendo ${challenge.amount}xp`
          });
        }
    }

    const resetChallenge = () => {
        setChallengerAtivo(null);
    }

    const completedChallenge = () => {

      if(!challengerAtivo) {
        return;
      }

      const { amount } = challengerAtivo;

      let experienciaFinal = experienciaAtual + amount;

      if (experienciaFinal >= experienciaParaProximoNivel) {
        levelUp();
        experienciaFinal = experienciaFinal - experienciaParaProximoNivel;
      }

      setChallengesConcluidos(challengesConcluidos + 1);
      setExperienciaAtual(experienciaFinal);
      setChallengerAtivo(null);
    }
    

  return (
    <ChallengesContext.Provider
      value={{
        challengerAtivo,
        level,
        experienciaAtual,
        challengesConcluidos,
        experienciaParaProximoNivel,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completedChallenge,
        closeModal,
      }}
    >
      {children}
      {modalEstaAtivo && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
};

export {
    ChallengesProvider,
    ChallengesContext
};
