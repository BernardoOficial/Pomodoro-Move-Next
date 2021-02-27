import { createContext, ReactNode, useState } from "react";
import challenges from '../../challenges.json';

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
}

interface ChallengesProviderProps {
    children: ReactNode;
}

const ChallengesContext = createContext({} as ChallengesProviderDados);

const ChallengesProvider = ({ children }: ChallengesProviderProps) => {

    const [challengerAtivo, setChallengerAtivo] = useState(null);
    const [level, setLevel] = useState(1);
    const [experienciaAtual, setExperienciaAtual] = useState(0);
    const [challengesConcluidos, setChallengesConcluidos] = useState(0);

    const experienciaParaProximoNivel = Math.pow((level + 1) * 5, 2);

    const levelUp = () => {
        setLevel(level + 1);
    }

    const startNewChallenge = () => {
        const numberRandom = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[numberRandom];
        
        setChallengerAtivo(challenge);
    }

    const resetChallenge = () => {
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
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

export {
    ChallengesProvider,
    ChallengesContext
};