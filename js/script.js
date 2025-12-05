function atualizarDataHora() {
    let agora = new Date();

    // Configuração para mostrar dia da semana, dia numérico, mês e ano
    let opcoes = {
        weekday: "long", // "segunda-feira", "terça-feira"...
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    };

    let dataFormatada = agora.toLocaleDateString("pt-BR", opcoes);

    // Truque para deixar a primeira letra Maiúscula (Estética)
    dataFormatada = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);

    let horaFormatada = agora.toLocaleTimeString("pt-BR");

    // Resultado: "Sexta-feira, 05/12/2025 | 14:30:00"
    document.getElementById("data_hora").innerHTML =
        dataFormatada + " | " + horaFormatada;
}

setInterval(atualizarDataHora, 1000);
atualizarDataHora();