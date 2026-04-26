const perguntas = [
    {
        texto: "Uma informação secreta foi acessada por um estagiário sem devida autorização, qual pilar seria afetado?",
        opcoes: { A: "Confidencialidade", B: "Integridade" },
        correta: "A",
        explicacao: "Confidencialidade protege as informações contra acessos não autorizados. Por exemplo, apenas o RH tem acesso a informações empresariais importantes."
    },
    {
        texto: "Um usuário acessou o site da empresa e viu informações importantes que colocaram de forma necessária para entendimento, qual seria o pilar?",
        opcoes: { A: "Autenticidade", B: "Disponibilidade" },
        correta: "B",
        explicacao: "Disponibilidade garante que as informações estejam acessíveis quando necessário. Por exemplo, clientes conseguindo acessar um comunicado da empresa no site."
    },
    {
        texto: "A funcionária usou biometria para confirmar que ela é da empresa, qual seria o pilar?",
        opcoes: { A: "Integridade", B: "Autenticidade" },
        correta: "B",
        explicacao: "Autenticidade é a confirmação de que você está registrado. Por exemplo, como foi dito acima, usando a biometria."
    },
    {
        texto: "O chefe pediu o técnico para alterar um documento, mas apenas ele, mais ninguém, qual seria o pilar?",
        opcoes: { A: "Confidencialidade", B: "Integridade" },
        correta: "B",
        explicacao: "Integridade não permite alterar ou modificar dados sem acesso autorizado. Por exemplo, se alguém tenta alterar registros financeiros de uma empresa sem permissão, isso viola a integridade das informações."
    },
    {
        texto: "Se encontrarmos login barrado por cartão de acesso, qual pilar seria o afetado?",
        opcoes: { A: "Autenticidade", B: "Disponibilidade"},
        correta: "A",
        explicacao: "Se o login foi barrado é porque a pessoa não consta no sistema da empresa, logo a autenticidade foi comprovada."
    }

];

let pontos = 0;
let indice = 0;

const perguntaEl = document.getElementById("pergunta");
const feedbackEl = document.getElementById("feedback");
const resultadoEl = document.getElementById("resultado");
const pontuacaoEl = document.getElementById("pontuacao");

function mostrarPergunta() {
    const p = perguntas[indice];
    perguntaEl.textContent = p.texto;

    const botoes = document.querySelectorAll("#quiz button");
    botoes[0].textContent = "A) " + p.opcoes.A;
    botoes[1].textContent = "B) " + p.opcoes.B;
    feedbackEl.textContent = "";
}

function responder(opcoes) {
    const p = perguntas[indice];
    const correta = opcoes === p.correta;

    correta ? pontos++ : null;

    feedbackEl.textContent = correta
    ? "✅ Correto! " + p.explicacao
    : "❌ Errado! " + p.explicacao;

    indice++;

    let tempo = 6;
    const contadorEl = document.getElementById("contador");
    contadorEl.textContent = `Próxima pergunta em: ${tempo}s`;

    const intervalo = setInterval(() => {
        tempo--;
        contadorEl.textContent = `Próxima pergunta em: ${tempo}s`;
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalo);
        contadorEl.textContent = "";

        indice < perguntas.length ? mostrarPergunta() : finalizar();
    }, 6000);
}    

function finalizar() {
    document.getElementById("quiz").style.display = "none";
    resultadoEl.style.display = "block";
    pontuacaoEl.textContent = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;
}

mostrarPergunta();