import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

const Countdown = () => {

    const { minutes, seconds, regressivaEstaAtivo, regressivaFinalizou, setRegressivaEstaAtivo, separarAlgarismosNoArray } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = separarAlgarismosNoArray(minutes);
    const [secondLeft, secondRight] = separarAlgarismosNoArray(seconds);

    const handleClickButtonAtivo = () => {
        setRegressivaEstaAtivo(true);
    }
    
    const handleClickButtonDesativa = () => {
        console.log('ClearInterval ativado');
        clearInterval(regressiva);
        
        setRegressivaEstaAtivo(false);
        setTime(0.1 * 60);
    }

    return (
        <div className={styles.countdownContainer}>
            <div className={styles.countdown}>
                <span className={styles.numbers}>{minuteLeft}</span>
                <span className={styles.numbers}>{minuteRight}</span>
                <span className={styles.doispontos}>:</span>
                <span className={styles.numbers}>{secondLeft}</span>
                <span className={styles.numbers}>{secondRight}</span>
            </div>

            { regressivaFinalizou ? (
                 <button 
                disabled
                className={styles.countdownButton}
                >
                    Ciclo finalizado
                </button>
            ) : (
                <>
                    { regressivaEstaAtivo ? (
                    <button 
                    type="button"
                    onClick={handleClickButtonDesativa}
                    className={`${styles.countdownButton} ${styles.countdownButtonAtivo}`}
                    >
                        Abandonar ciclo
                    </button>
                ) : (
                    <button 
                    type="button"
                    onClick={handleClickButtonAtivo}
                    className={styles.countdownButton}
                    >
                        Iniciar um ciclo
                    </button>
                ) }
                </>
            )}
        </div>
    )
}

export default Countdown