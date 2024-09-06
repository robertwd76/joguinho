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
        enunciado: "Como você pode ajudar a combater a disseminação de fake news, especialmente as que perpetuam o racismo?",
        alternativas: [
            {
                texto: "Verificando a veracidade das informações antes de compartilhar qualquer conteúdo, especialmente sobre temas sensíveis como racismo.",
                afirmacao: "afirmacao3"
            },
            {
                texto: "Educando amigos e familiares sobre os perigos das fake news e incentivando-os a não compartilhar conteúdos falsos que perpetuam o racismo.",
                afirmacao: "afirmacao4"
            }

        ]
    },
    {
        enunciado: "Como podemos incentivar o uso de energia solar e outras formas de energia limpa, especialmente em comunidades carentes?",
        alternativas: [
            {
                texto: "Defendendo políticas públicas que subsidiem a energia solar para famílias de baixa renda.",
                afirmacao: "afirmacao5"
            },
            {
                texto: "Promovendo a instalação de painéis solares em escolas e centros comunitários de comunidades marginalizadas.",
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

