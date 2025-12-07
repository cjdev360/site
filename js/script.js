function atualizarRelogio() {
    const agora = new Date();
    
    const opcoesData = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    // Configuração para hora e minuto
    const opcoesHora = {
        hour: '2-digit',
        minute: '2-digit'
    };

    let dataFormatada = agora.toLocaleDateString('pt-BR', opcoesData);
    const horaFormatada = agora.toLocaleTimeString('pt-BR', opcoesHora);
    
    // Primeira letra maiúscula
    dataFormatada = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);
    
    const textoFinal = `${dataFormatada} <span style="margin: 0 10px; opacity: 0.5;">|</span> ${horaFormatada}`;
    
    document.getElementById('data-hora').innerHTML = textoFinal;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();