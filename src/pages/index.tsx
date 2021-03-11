import { useState } from 'react';
import styles from '../styles/pages/Login.module.css'
import { useRouter } from 'next/router'
import { dadosGithub } from '../fetch/dadosGithub'
import Alerta from '../components/Alerta';
import Head from 'next/head';

const Login = () => {

    const [username, setUsername] = useState("");
    const [alertaUsuarioAtivo, setAlertaUsuarioAtivo] = useState(false);
    const [mensagemErro, setMensagemErro] = useState('');
    const router = useRouter();

    const uptadeUsername = (evento) => {
        setUsername(evento.target.value);
    }

    const searchUserGithub = (evento) => {        
        evento.preventDefault();

        dadosGithub(username)
            .then(() => {
                router.push(`/home?user=${username}`);    
            })
            .catch((erro) => {
                setMensagemErro(erro.message);
                setAlertaUsuarioAtivo(true);
            })
    }

    const fecharAlertaUsuario = () => {
        setAlertaUsuarioAtivo(false);
    }

    return (
      <>
        <Head>
          <title>Pomodoro-Move</title>
        </Head>
        <div className={styles.fullbody}>
          <section className={styles.container}>
            <figure>
              <img src="/logo-full.svg" alt="Pomodoro Move" />
            </figure>

            <div>
              <h1>Bem-vindo</h1>
              <p>
                <img src="/icons/Github.svg" alt="Github" />
                Faça login com seu Github para começar
              </p>
              <form className={styles.button}>
                <input
                  type="text"
                  placeholder="Digite seu username"
                  value={username}
                  autoFocus
                  onChange={uptadeUsername}
                />
                <button
                  type="submit"
                  disabled={username.length > 3 ? false : true}
                  onClick={searchUserGithub}
                >
                  <img src="/icons/arrowright.svg" alt="Entrar com o github" />
                </button>

                {alertaUsuarioAtivo && (
                  <Alerta
                    mensagem={mensagemErro}
                    fecharAlertaUsuario={fecharAlertaUsuario}
                  />
                )}
              </form>
            </div>
          </section>
        </div>
      </>
    );
}

export default Login;