import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css'

const Countdown = () => {

    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [regressivaEstaAtivo, setRegressivaEstaAtivo] = useState(false);
    const [regressivaFinalizou, setRegressivaFinalizou] = useState(false);

    const roundTime = tempo => Math.floor(tempo);
    const minutes = roundTime(time / 60);
    const seconds = roundTime(time % 60);

    const separarAlgarismosNoArray = (number) => 
        String(number).padStart(2, '0').split('');

    const [minuteLeft, minuteRight] = separarAlgarismosNoArray(minutes);
    const [secondLeft, secondRight] = separarAlgarismosNoArray(seconds);

    let regressiva = null;

    useEffect(() => {

        const uptadeRegressiva = () => setTime(time => time - 1);
        
        if (regressivaEstaAtivo && time > 0) {
            regressiva = setTimeout(uptadeRegressiva, 1000);
        }
        else if (regressivaEstaAtivo && time === 0) {
            console.log('finalizou');

            startNewChallenge();

            setRegressivaFinalizou(true);
            setRegressivaEstaAtivo(false);
        }

    }, [regressivaEstaAtivo, time])

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