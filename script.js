const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a importância do design responsivo em um site?",
        alternativas: [
            {
                texto: "Um design responsivo garante que o site funcione bem em dispositivos de diferentes tamanhos, desde computadores desktop até smartphones.",
                afirmacao: "afirmacao1"
            },
            {
                texto: "Sites com design responsivo tendem a ter melhor desempenho em motores de busca, pois o Google prioriza a experiência móvel.",
                afirmacao: "afirmacao2"
            }

        ]
    },
    {
        enunciado: "Como a otimização de imagens pode afetar a performance de um site?",
        alternativas: [
            {
                texto: "Imagens otimizadas reduzem o tempo de carregamento do site, melhorando a experiência do usuário e a taxa de retenção.",
                afirmacao: "afirmacao3"
            },
            {
                texto: "A falta de otimização pode aumentar o tempo de carregamento, o que pode levar a uma penalização nos rankings dos motores de busca.",
                afirmacao: "afirmacao4"
            }

        ]
    },
    {
        enunciado: "Qual o papel da usabilidade na criação de sites?",
        alternativas: [
            {
                texto: "Usabilidade eficiente facilita a navegação e a interação dos usuários com o site, tornando a experiência mais intuitiva e agradável.",
                afirmacao: "afirmacao5"
            },
            {
                texto: "Sites com baixa usabilidade podem resultar em altas taxas de rejeição, pois os usuários podem achar difícil encontrar o que procuram.",
                afirmacao: "afirmacao6"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}



function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () =>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal + afirmacao + " ";
    atual++
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = ""
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();

