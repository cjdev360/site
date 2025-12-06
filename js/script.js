function atualizarRelogio() {
    const agora = new Date();
    
    // Configuração para mostrar dia da semana e data
    const opcoes = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    const data = agora.toLocaleDateString('pt-BR', opcoes);
    
    // Configuração para mostrar a hora
    const hora = agora.toLocaleTimeString('pt-BR');
    
    // Junta tudo e coloca na tela (ex: Sábado, 06/12/2025 | 13:45:10)
    // O 'charAt(0).toUpperCase' serve apenas para deixar a primeira letra do dia maiúscula
    const dataFormatada = data.charAt(0).toUpperCase() + data.slice(1);
    
    document.getElementById('relogio').textContent = `${dataFormatada} | ${hora}`;
}

// Atualiza o relógio a cada 1000 milissegundos (1 segundo)
setInterval(atualizarRelogio, 1000);

// Roda a função assim que carrega para não ficar em branco no primeiro segundo
atualizarRelogio();