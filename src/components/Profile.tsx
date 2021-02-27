import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css'

import { ChallengesContext } from '../contexts/ChallengesContext'

const Profile = () => {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/bernardooficial.png" alt="Bernardo Pereira"/>
            <div>
                <strong>Bernardo Pereira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}

export default Profile