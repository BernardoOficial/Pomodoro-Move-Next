import { useEffect, useState } from 'react'
import styles from '../styles/components/Countdown.module.css'

const Countdown = () => {

    const [time, setTime] = useState(30 * 60);
    const [regressivaActive, setRegressivaActive] = useState(false);

    const roundTime = time => Math.floor(time);
    const minutes = roundTime(time / 60);
    const seconds = roundTime(time % 60);

    const separarAlgarismosNoArray = (number) => 
        String(number).padStart(2, '0').split('');

    const [minuteLeft, minuteRight] = separarAlgarismosNoArray(minutes);
    const [secondLeft, secondRight] = separarAlgarismosNoArray(seconds);

    useEffect(() => {

        const uptadeRegressiva = () => setTime(time => time - 1);

        if(regressivaActive) {
            setInterval(uptadeRegressiva, 1000)
        }

    }, [regressivaActive])

    const handleButtonClick = () => {
        setRegressivaActive(true);
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
            <button type="button" onClick={handleButtonClick}>
                Iniciar um ciclo
            </button>
        </div>
    )
}

export default Countdown