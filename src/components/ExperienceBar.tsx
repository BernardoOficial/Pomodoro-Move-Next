import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css'

const ExperienceBar = () => {

    const { experienciaAtual, experienciaParaProximoNivel } = useContext(ChallengesContext);

    const experienciaPorcentagem =
      (experienciaAtual / experienciaParaProximoNivel) * 100;

    return (
        <header className={styles.experienceBar} >
            <span>0 xp</span>
            <div>
                <div style={{ width: `${experienciaPorcentagem}%`}} />
                <span className={styles.currentExperience} style={{ left: `${experienciaPorcentagem}%` }}>
                    {experienciaAtual} xp
                </span>
            </div>
            <span>{experienciaParaProximoNivel} xp</span>
        </header>
    );
}

export default ExperienceBar;