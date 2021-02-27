import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface algarismoNoArray {
    
}

interface CountdownProviderDados {
  minutes: number;
  seconds: number;
  regressivaEstaAtivo: boolean;
  regressivaFinalizou: boolean;
  setRegressivaEstaAtivo: () => void;
  separarAlgarismosNoArray: () => algarismoNoArray;
}

interface CountdownProviderProps {
    children: ReactNode;
}

const CountdownContext = createContext({} as CountdownProviderDados);

const CountdowsProvider = ({ children }: CountdownProviderProps) => {

    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [regressivaEstaAtivo, setRegressivaEstaAtivo] = useState(false);
    const [regressivaFinalizou, setRegressivaFinalizou] = useState(false);

    const roundTime = (tempo) => Math.floor(tempo);
    const minutes = roundTime(time / 60);
    const seconds = roundTime(time % 60);

    const separarAlgarismosNoArray = (number) =>
        String(number).padStart(2, "0").split("");

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

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            regressivaEstaAtivo,
            regressivaFinalizou,
            setRegressivaEstaAtivo,
            separarAlgarismosNoArray
        }}>
            {children}
        </CountdownContext.Provider>
    )
}

export {
    CountdownContext,
    CountdowsProvider
}