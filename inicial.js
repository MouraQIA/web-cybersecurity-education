const hora = new Date().getHours();
const mensagem = hora < 12 ? "Bom dia visitante!" : hora < 18 ? "Boa tarde visitante!" : "Boa noite visitante!";
    document.getElementById("boasVindas").innerHTML = mensagem;

let visitas = parseInt(localStorage.getItem("contadorVisitas")) || 0;
visitas++;
localStorage.setItem("contadorVisitas", visitas);
document.getElementById("contador").innerHTML = visitas;

const texto = "Bem-vindo ao site de Cybersegurança!";
let i = 0;
const velocidade = 50;
function escrever() {
    i < texto.length
        ? (document.getElementById("mensagem").innerHTML += texto.charAt(i++), setTimeout(escrever, velocidade))
        : null;
}

escrever()

function atualizarRelogio() {
    const agora = new Date();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    const separador = agora.getSeconds() % 2 === 0 ? ":" : " ";

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    document.getElementById("relogio").textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();