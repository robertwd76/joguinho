const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a melhor maneira de se combater o desmatamento?",
        alternativas: [
            "reflorestamento de áreas degradadas",
            "Implementação de leis mais rigorosas para a proteção das florestas"
        ]
    },
    {
        enunciado: "Como podemos combater a desigualdade social de forma eficaz e sustentável?",
        alternativas: [
            "Implementar programas de educação e formação profissional acessíveis a todos",
            "políticas de redistribuição de renda e oportunidades"
        ]
    },
];
