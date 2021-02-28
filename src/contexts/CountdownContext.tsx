import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownProviderDados {
  minutes: number;
  seconds: number;
  regressivaEstaAtivo: boolean;
  regressivaFinalizou: boolean;
  regressiva: number;
  iniciarCountdown: () => void;
  resetarCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

const CountdownContext = createContext({} as CountdownProviderDados);

const CountdowsProvider = ({ children }: CountdownProviderProps) => {
    
    const { startNewChallenge } = useContext(ChallengesContext);
    
    const tempoInicialDoCronometro = 0.1 * 60;  

    const [time, setTime] = useState(tempoInicialDoCronometro);
    const [regressivaEstaAtivo, setRegressivaEstaAtivo] = useState(false);
    const [regressivaFinalizou, setRegressivaFinalizou] = useState(false);

    const roundTime = (tempo) => Math.floor(tempo);
    const minutes = roundTime(time / 60);
    const seconds = roundTime(time % 60);

    let regressiva = null;

    useEffect(() => {
      const uptadeRegressiva = () => setTime((time) => time - 1);

      if (regressivaEstaAtivo && time > 0) {
        regressiva = setTimeout(uptadeRegressiva, 1000);
      } else if (regressivaEstaAtivo && time === 0) {
        console.log("finalizou");

        startNewChallenge();

        setRegressivaFinalizou(true);
        setRegressivaEstaAtivo(false);
      }
    }, [regressivaEstaAtivo, time]);

    const iniciarCountdown = () => {
      setRegressivaEstaAtivo(true);
    };

    const resetarCountdown = () => {
      clearInterval(regressiva);
      setRegressivaEstaAtivo(false);
      setRegressivaFinalizou(false);
      setTime(tempoInicialDoCronometro);
    };

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            regressivaEstaAtivo,
            regressivaFinalizou,
            regressiva,
            iniciarCountdown,
            resetarCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}

export {
    CountdownContext,
    CountdowsProvider
}