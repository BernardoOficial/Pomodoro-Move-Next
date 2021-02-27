import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

const ChallengeBox = () => {

    const { challengerAtivo, resetChallenge } = useContext(ChallengesContext);

    console.log(challengerAtivo);

    return (
        <section className={styles.challegeBoxContainer}>

            {challengerAtivo ? (
                <div className={styles.contentChallengeAtivo}>
                    <p>Ganhe {challengerAtivo.amount} xp</p>

                    <div>
                        <img src={`/icons/${challengerAtivo.type}.svg`} alt="Exercite-se"/>
                        <h2>Exercite-se</h2>
                        <p>{challengerAtivo.description}</p>
                    </div>

                    <div className={styles.buttons}>    
                        <button 
                        type="button"
                        onClick={resetChallenge}
                        >
                            Falhei
                        </button>
                        <button
                        type="button"
                        >
                            Completei
                        </button>
                    </div>

                </div>
            ) : (
                <div className={styles.contentChallengeNaoAtivo}>
                    <h1>Inicie um ciclo para receber desafios</h1>
                    
                    <div>
                        <img src="/icons/level-up.svg" alt="Suba de nível!"/>
                        <p>Avance de level completando os desafios.</p>
                    </div>
                </div>
            )}

            
        </section>
    );
}

export default ChallengeBox