import styles from '../styles/components/Alerta.module.css'

interface AlertaProps {
  mensagem: string;
  fecharAlertaUsuario: () => void;
}

const Alerta = ({ mensagem, fecharAlertaUsuario }: AlertaProps) => {

    return (
        <div className={styles.alertaContainer}>
            <img
                src="/icons/close.svg"
                alt="Fechar aviso"
                onClick={fecharAlertaUsuario}
            />
            <h2>Ocorreu um problema</h2>
            <p>{mensagem}</p>
        </div>
    );
}

export default Alerta;