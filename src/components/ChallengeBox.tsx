import styles from '../styles/components/ChallengeBox.module.css'

const ChallengeBox = () => {

    return (
        <section className={styles.challegeBoxContainer}>
            <h1>Inicie um ciclo para receber desafios</h1>
            
            <div>
                <img src="/icons/level-up.svg" alt="Suba de nível!"/>
                <p>Avance de level completando os desafios.</p>
            </div>
        </section>
    );
}

export default ChallengeBox