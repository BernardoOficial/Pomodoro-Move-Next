import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

const Countdown = () => {

    const { minutes, seconds, regressivaEstaAtivo, regressivaFinalizou, iniciarCountdown, resetarCountdown } = useContext(CountdownContext);

    const separarAlgarismosNoArray = (number) =>
      String(number).padStart(2, "0").split("");

    const [minuteLeft, minuteRight] = separarAlgarismosNoArray(minutes);
    const [secondLeft, secondRight] = separarAlgarismosNoArray(seconds);

    return (
      <div className={styles.countdownContainer}>
        <div className={styles.countdown}>
          <span className={styles.numbers}>{minuteLeft}</span>
          <span className={styles.numbers}>{minuteRight}</span>
          <span className={styles.doispontos}>:</span>
          <span className={styles.numbers}>{secondLeft}</span>
          <span className={styles.numbers}>{secondRight}</span>
        </div>

        {regressivaFinalizou ? (
          <button disabled className={styles.countdownButton}>
            Ciclo finalizado
          </button>
        ) : (
          <>
            {regressivaEstaAtivo ? (
              <button
                type="button"
                onClick={resetarCountdown}
                className={`${styles.countdownButton} ${styles.countdownButtonAtivo}`}
              >
                Abandonar ciclo
              </button>
            ) : (
              <button
                type="button"
                onClick={iniciarCountdown}
                className={styles.countdownButton}
              >
                Iniciar um ciclo
              </button>
            )}
          </>
        )}
      </div>
    );
}

export default Countdown