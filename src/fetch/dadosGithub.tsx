const dadosGithub = async (username: string) => {

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);

        if(!response.ok) {
            throw new Error(`Insira um username válido.`)
        }
        
        const user = await response.json();
        return user;

    } catch (erro) {
        return erro;
    }
    
}

export {
    dadosGithub
} 
    