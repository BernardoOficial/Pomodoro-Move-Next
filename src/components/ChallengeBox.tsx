import { useState } from 'react';
import styles from '../styles/components/ChallengeBox.module.css'

const ChallengeBox = () => {

    const [temDesafio, setTemDesafio] = useState(true);

    return (
        <section className={styles.challegeBoxContainer}>

            {temDesafio ? (
                <div className={styles.contentChallengeAtivo}>
                    <p>Ganhe 400 xp</p>

                    <div>
                        <img src="/icons/body.svg" alt="Exercite-se"/>
                        <h2>Exercite-se</h2>
                        <p>É agora Diegão, bora lá meu parça. Caminhe por 3 minutos e estique suas pernas pra você ficar saudável.</p>
                    </div>

                    <div className={styles.buttons}>    
                        <button type="button" >Falhei</button>
                        <button type="button" >Completei</button>
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