// Banco de Dados de Perguntas
const allQuestions = [
    {
        question: "O que você deve fazer ao receber um link suspeito no chat do jogo de um colega desconhecido?",
        options: [
            "Clicar para ver do que se trata.",
            "Ignorar e bloquear o usuário.",
            "Enviar meus dados de login.",
            "Compartilhar com outros amigos."
        ],
        correct: 1
    },
    {
        question: "Qual é a prática mais segura para proteger suas contas de redes sociais e jogos?",
        options: [
            "Usar a mesma senha fácil.",
            "Ativar a verificação em duas etapas.",
            "Anotar a senha em um papel na mesa.",
            "Mudar a senha uma vez por ano."
        ],
        correct: 1
    },
    {
        question: "O que caracteriza uma mensagem de phishing direcionada a roubar suas informações?",
        options: [
            "Promessas falsas de prêmios e urgência.",
            "Avisos oficiais atualizados da escola.",
            "Mensagens simples de bom dia de parentes.",
            "Notificações comuns de atualizações de apps."
        ],
        correct: 0
    },
    {
        question: "Por que redes Wi-Fi públicas e abertas exigem cuidado ao acessar dados sensíveis?",
        options: [
            "Elas costumam gastar mais a bateria.",
            "Elas deixam o celular mais lento.",
            "Elas podem interceptar seus dados facilmente.",
            "Elas bloqueiam o acesso a jogos online."
        ],
        correct: 2
    },
    {
        question: "Qual atitude demonstra um comportamento consciente em relação à sua privacidade online?",
        options: [
            "Aceitar qualquer termo sem ler.",
            "Configurar perfis como privados.",
            "Publicar a localização exata em tempo real.",
            "Informar o número de telefone em fóruns."
        ],
        correct: 1
    },
    {
        question: "Se alguém descobrir sua senha, qual deve ser sua primeira reação imediata?",
        options: [
            "Criar uma conta nova do zero.",
            "Avisar os amigos na timeline.",
            "Alterar a senha e verificar dispositivos conectados.",
            "Esperar o suporte técnico responder em dias."
        ],
        correct: 2
    },
    {
        question: "O que significa o termo 'Engenharia Social' no contexto de segurança digital?",
        options: [
            "Técnicas de programação avançadas.",
            "Manipular pessoas para obter dados confidenciais.",
            "Redes sociais focadas em estudos escolares.",
            "Manutenção de servidores de internet."
        ],
        correct: 1
    },
    {
        question: "Qual é a melhor escolha ao criar uma senha nova para proteger seu perfil?",
        options: [
            "Sua data de nascimento com seu apelido.",
            "Uma sequência lógica como 12345678.",
            "Uma frase longa com letras, números e símbolos.",
            "O nome do seu primeiro animal de estimação."
        ],
        correct: 2
    },
    {
        question: "Como você deve proceder ao baixar modificações (mods) ou jogos da internet?",
        options: [
            "Baixar apenas de fontes oficiais e confiáveis.",
            "Clicar no primeiro link que aparecer no Google.",
            "Aceitar qualquer arquivo executável enviado.",
            "Desativar o antivírus para baixar mais rápido."
        ],
        correct: 0
    },
    {
        question: "Qual é o principal risco de reutilizar a mesma senha em vários sites diferentes?",
        options: [
            "Aparecerem propagandas indesejadas no navegador.",
            "Se um site vazar dados, todas as suas contas correm risco.",
            "O teclado virtual parar de funcionar corretamente.",
            "Sua internet ficar instável nos jogos."
        ],
        correct: 1
    }
];

// Variáveis de Estado do Quiz
let currentQuestions = [];
let currentIndex = 0;
let scoreCorrect = 0;
let scoreWrong = 0;
let selectedModuleSize = 6;
let isSoundOn = true;

// Elementos do DOM
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressText = document.getElementById("progress-text");
const btnNext = document.getElementById("btn-next");
const correctText = document.getElementById("correct-text");
const wrongText = document.getElementById("wrong-text");
const badgeText = document.getElementById("badge-text");

// Funções de Áudio (Sintetizador via Web Audio API)
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function playSound(type) {
    if (!isSoundOn) return;
    initAudio();
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(660, now + 0.1);
        gainNode.gain.setValueAtTime(0.15, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.setValueAtTime(120, now + 0.15);
        gainNode.gain.setValueAtTime(0.15, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
    } else if (type === 'click') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, now);
        gainNode.gain.setValueAtTime(0.05, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
    }
}

function toggleSound() {
    isSoundOn = !isSoundOn;
    const soundIcon = document.getElementById("sound-icon");
    const soundLabel = document.getElementById("sound-label");
    const btnSound = document.getElementById("btn-sound");

    if (isSoundOn) {
        soundIcon.textContent = "🔊";
        soundLabel.textContent = "Som: ON";
        btnSound.classList.remove("muted");
        playSound('click');
    } else {
        soundIcon.textContent = "🔇";
        soundLabel.textContent = "Som: OFF";
        btnSound.classList.add("muted");
    }
}

// Alternar entre telas
function switchScreen(targetScreen) {
    [startScreen, quizScreen, resultScreen].forEach(screen => {
        screen.classList.remove("active");
    });
    targetScreen.classList.add("active");
}

function goToHome() {
    playSound('click');
    switchScreen(startScreen);
}

// Selecionar Módulo
function selectModule(size) {
    playSound('click');
    selectedModuleSize = size;

    let shuffledPool = [...allQuestions].sort(() => Math.random() - 0.5);
    currentQuestions = shuffledPool.slice(0, size);

    currentIndex = 0;
    scoreCorrect = 0;
    scoreWrong = 0;

    switchScreen(quizScreen);
    loadQuestion();
}

// Carregar Pergunta
function loadQuestion() {
    btnNext.style.display = "none";
    const currentQ = currentQuestions[currentIndex];

    questionText.textContent = currentQ.question;
    progressText.textContent = `Pergunta ${currentIndex + 1} de ${currentQuestions.length}`;
    optionsContainer.innerHTML = "";

    let optionsWithIndex = currentQ.options.map((opt, idx) => {
        return { text: opt, isCorrect: idx === currentQ.correct };
    });

    // Embaralhar as alternativas
    for (let i = optionsWithIndex.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsWithIndex[i], optionsWithIndex[j]] = [optionsWithIndex[j], optionsWithIndex[i]];
    }

    optionsWithIndex.forEach((item) => {
        const btn = document.createElement("button");
        btn.classList.add("btn-option");
        btn.textContent = item.text;
        btn.onclick = () => selectOption(btn, item.isCorrect);
        optionsContainer.appendChild(btn);
    });
}

// Selecionar Resposta
function selectOption(selectedBtn, isCorrect) {
    const allButtons = optionsContainer.querySelectorAll(".btn-option");

    allButtons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        scoreCorrect++;
        playSound('correct');
        createParticles(selectedBtn);
    } else {
        selectedBtn.classList.add("wrong");
        scoreWrong++;
        playSound('wrong');
        showWrongBanner();

        const currentQ = currentQuestions[currentIndex];
        allButtons.forEach(btn => {
            if (btn.textContent === currentQ.options[currentQ.correct]) {
                btn.classList.add("correct");
            }
        });
    }

    btnNext.style.display = "block";
}

// Próxima Pergunta
function nextQuestion() {
    playSound('click');
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Exibir Resultado Final
function showResults() {
    switchScreen(resultScreen);
    correctText.textContent = `✅ Acertos: ${scoreCorrect}`;
    wrongText.textContent = `❌ Erros: ${scoreWrong}`;

    const percentage = (scoreCorrect / currentQuestions.length) * 100;
    let badge = "";

    if (percentage === 100) {
        badge = "🏆 Guardião Supremo da Cibersegurança!";
    } else if (percentage >= 70) {
        badge = "🛡️ Especialista em Proteção Digital";
    } else if (percentage >= 40) {
        badge = "⚠️ Aprendiz Atento (Continue Praticando)";
    } else {
        badge = "🚨 Alerta de Risco (Revise os Conceitos)";
    }

    badgeText.textContent = `Nível: ${badge}`;
}

function restartQuiz() {
    playSound('click');
    switchScreen(startScreen);
}

// Partículas e Efeitos Visuais
function createParticles(targetElement) {
    const rect = targetElement.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const emojis = ['✨', '🛡️', '⭐', '💻', '🔒'];
    for (let i = 0; i < 6; i++) {
        const p = document.createElement("div");
        p.classList.add("particle");
        p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        p.style.left = `${x}px`;
        p.style.top = `${y}px`;

        document.body.appendChild(p);
        setTimeout(() => p.remove(), 800);
    }
}

function showWrongBanner() {
    const banner = document.createElement("div");
    banner.classList.add("wrong-banner");
    banner.textContent = "❌ OPS!";
    document.body.appendChild(banner);
    setTimeout(() => banner.remove(), 900);
}
