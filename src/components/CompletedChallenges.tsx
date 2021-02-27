import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css'

const CompletedChallenges = () => {

    const { challengesConcluidos } = useContext(ChallengesContext);

    const converterNumberParaString = String(challengesConcluidos);

    return (
      <div className={styles.completedChallengesContainer}>
        <h1>Desafios completos</h1>
        <p>{converterNumberParaString.length === 1 ? `0${challengesConcluidos}` : challengesConcluidos }</p>
      </div>
    );
}

export default CompletedChallenges