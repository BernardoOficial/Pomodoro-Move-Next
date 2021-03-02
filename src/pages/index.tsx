import styles from '../styles/pages/Login.module.css'

const Login = () => {
    return (
        <div className={styles.fullbody}>
            <section className={styles.container}>
                <figure>
                    <img src="/logo-full.svg" alt="Pomodoro Move"/>
                </figure>

                <div>
                    <h1>Bem-vindo</h1>
                    <p>
                        <img src="/icons/Github.svg" alt="Github"/>
                        Faça login com seu Github para começar
                    </p>
                    <div className={styles.button}>
                        <input type="text" placeholder="Digite seu username" />
                        <button type="button">
                            <img src="/icons/arrowright.svg" alt="Entrar com o github"/>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;