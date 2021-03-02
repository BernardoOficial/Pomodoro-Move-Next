import { useState } from 'react';
import styles from '../styles/pages/Login.module.css'
import { useRouter } from 'next/router'
import { dadosGithub } from '../fetch/dadosGithub'

const Login = () => {

    const [username, setUsername] = useState("");
    const router = useRouter();

    const uptadeUsername = (evento) => {
        setUsername(evento.target.value);
    }

    const searchUserGithub = () => {
        console.log('Pesquisando...');
        
        dadosGithub(username)
            .catch((erro) => {
                console.log(erro);
                
            })

        //router.push(`/home/${username}`);    
        
    }

    return (
        <div className={styles.fullbody}>
            <section className={styles.container}>
                <figure>
                    <img src="/logo-full.svg" alt="Pomodoro Move"/>
                </figure>

                <div>
                    <h1>Bem-vindo</h1>
                    <p>
                        <img
                            src="/icons/Github.svg"
                            alt="Github"
                        />
                        Faça login com seu Github para começar
                    </p>
                    <div className={styles.button}>
                        <input
                            type="text"
                            placeholder="Digite seu username"
                            value={username}
                            onChange={uptadeUsername}
                        />
                        <button 
                            type="button"
                            disabled={username.length > 3 ? false : true}
                            onClick={searchUserGithub}
                        >
                            <img
                                src="/icons/arrowright.svg"
                                alt="Entrar com o github"
                            />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;