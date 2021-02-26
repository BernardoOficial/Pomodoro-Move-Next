import { createContext, useState } from "react";

const ChallengesContext = createContext({});

const ChallengesProvider = ({ children }) => {

    const [level, setLevel] = useState(10);
    const [challengesConcluidos, setChallengesConcluidos] = useState(0);

    const levelUp = () => {
        setLevel(level + 1);
    }

  return (
    <ChallengesContext.Provider value={{
        level,
        challengesConcluidos,
        levelUp
    }}>
        {children}
    </ChallengesContext.Provider>
  );
};

export {
    ChallengesProvider,
    ChallengesContext
};
