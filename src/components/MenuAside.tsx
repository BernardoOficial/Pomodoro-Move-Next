import styles from '../styles/components/MenuAside.module.css'

const MenuAside = () => {

    return (
        <aside className={styles.menuAsideContainer}>
            <figure>
                <img src="/icons/logo.svg" alt="Pomodoro Move"/>
            </figure>
            
            <ul>
                <li>
                    <a href="#">
                        <img src="/icons/home.svg" alt="Home"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/icons/leaderboard.svg" alt="Leaderboard"/>
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default MenuAside;