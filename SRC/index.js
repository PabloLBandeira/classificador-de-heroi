// Solicitar o nome do herói para fazer o registro na guilda
let nomeHeroi = prompt("Digite o nome do herói:").trim();

// Verificar se o herói declarou o próprio nome
if (nomeHeroi) {
    alert(`Bem-vindo, ${nomeHeroi}! Foi uma grande aventura. Parabéns!`);
    console.log(`Muito bem! Agora deixa eu ver qual seu nível de habilidade até o momento, isso definirá em qual pelotão você estará.`);

    // Solicitar o XP para a classificação em níveis de habilidade 
    let xpHeroi = parseInt(prompt("Quantos XP você adquiriu ao longo da sua jornada? "));

    let rankHeroi;
    
    if (xpHeroi >= 500 && xpHeroi <= 1000) {
        rankHeroi = "Ferro";
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        rankHeroi = "Bronze";
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        rankHeroi = "Prata";
    } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
        rankHeroi = "Ouro";
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        rankHeroi = "Platina";
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        rankHeroi = "Ascendente";
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        rankHeroi = "Imortal";
    } else if (xpHeroi >= 10001) {
        rankHeroi = "Radiante";
    } else {
        rankHeroi = "Não classificado";
    }

    // Exibir a classificação do herói
    if (rankHeroi !== "Não classificado") {
        console.log(`Excelente, ${nomeHeroi}! Com ${xpHeroi} você foi classificado como rank ${rankHeroi}.`);
    } else {
        console.log("Admiro sua coragem, meu jovem! Continue treinando para ser classificado.");
    }

} else {
    alert("Não seja tímido. Para registrá-lo em nossa guilda, preciso saber seu nome.");
    console.log("O herói não informou o nome.");
}
