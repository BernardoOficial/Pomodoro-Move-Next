import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css'

import { ChallengesContext } from '../contexts/ChallengesContext'

const Profile = () => {

    const { level, userGithub } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src={`${userGithub.avatar_url}`} alt="Bernardo Pereira"/>
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