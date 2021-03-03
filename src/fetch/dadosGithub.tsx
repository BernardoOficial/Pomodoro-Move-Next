const dadosGithub = async (username) => {

    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();

    if(user.message === "Not Found") {
        throw new Error(`Insira um username válido.`);
    }

    return user;
}

export {
    dadosGithub
} 
    