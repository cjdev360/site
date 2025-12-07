function atualizarRelogio() {
    const agora = new Date();
    
    // Configuração para data abreviada (numérica)
    const opcoesData = { 
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric' 
    };
    
    // Configuração para hora, minuto e SEGUNDO
    const opcoesHora = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoesData);
    const horaFormatada = agora.toLocaleTimeString('pt-BR', opcoesHora);
    
    // Não é necessário capitalizar (letra maiúscula) pois agora são números
    
    const textoFinal = `${dataFormatada} <span style="margin: 0 10px; opacity: 0.5;">|</span> ${horaFormatada}`;
    
    document.getElementById('data-hora').innerHTML = textoFinal;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();