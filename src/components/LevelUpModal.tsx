import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css'

const LevelUpModal = () => {

    const { level, closeModal } = useContext(ChallengesContext);

    return (
          <div className={styles.modal}>
            <div className={styles.container}>
              <header>
                <span>Level</span>{level}
              </header>

              <h1>Parabéns!</h1>
              <p>Você subiu de nível</p>

              <button type="button" onClick={closeModal}>
                <img src="/icons/close.svg" alt="Fechar modal" />
              </button>
            </div>
          </div>
    );
}

export default LevelUpModal