import { useEffect, useState } from 'react';
import styles from '../styles/components/ChangeColor.module.css';

const ChangeColor = () => {

    const themeWhite = {
      white: "#ffffff",
      background: "#f2f3f5",
      grayLine: "#dcdde0",
      text: "#666666",
      textHighlight: "#b3b9ff",
      title: "#2e384d",
      red: "#e83f5b",
      green: "#4cd62b",
      blue: "#5965e0",
      blueDark: "#4953b8",
      blueTwitter: "#2aa9e0",
      cronometro: "#2e384d",
      changeColor: "#383737",
    };

    const themeDark = {
      white: "rgb(35, 35, 36)",
      background: "rgb(16, 13, 2)",
      grayLine: "#dcdde0",
      text: "#999999",
      textHighlight: "#b3b9ff",
      title: "#b7bfd0",
      red: "#e83f5b",
      green: "#4cd62b",
      blue: "#B0AB99",
      blueDark: "#7b7667",
      blueTwitter: "#2aa9e0",
      cronometro: "#4CD62B",
      changeColor: "#B0AB99"
    };

    
    const [mudarParaThemeDark, setMudarParaThemeDark] = useState(false);

    const formatarVariaveisCSS = (nameProp: string) =>
      "--" + nameProp.replace(/([A-Z])/g, "-$1").toLowerCase();
    
    const changeColorsWindow = (html, theme) => {
      const objectChaveValor = Object.entries(theme);

      objectChaveValor.forEach(([prop, valor]) => {
        html
          .style
          .setProperty(formatarVariaveisCSS(prop), valor);
      });
    };

    useEffect(() => {

      const html = document.querySelector("html");

      mudarParaThemeDark ? changeColorsWindow(html, themeDark) : changeColorsWindow(html, themeWhite);
      
    }, [mudarParaThemeDark]);


    const handleCheckbox = () => {
        setMudarParaThemeDark(!mudarParaThemeDark);
    }

    return (
        <div className={styles.changeColor}>
            <label htmlFor="changecolor" className={styles.container}>
                <input
                  type="checkbox"
                  id="changecolor"
                  onChange={handleCheckbox}
                 />
                <span />
            </label>
        </div>
    );
}

export default ChangeColor