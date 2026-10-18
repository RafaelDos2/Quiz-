* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-tap-highlight-color: transparent;
}

body {
    background-color: #0d1117;
    color: #c9d1d9;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-height: 100dvh;
    padding: clamp(10px, 3vw, 20px);
    overflow-x: hidden;
    position: relative;
}

/* Container Principal do Quiz (Adaptável em qualquer tela) */
.quiz-container {
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: clamp(12px, 3vw, 20px);
    max-width: 650px;
    width: 100%;
    padding: clamp(16px, 4vw, 30px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    position: relative;
    z-index: 10;
    overflow: hidden;
    transition: all 0.3s ease;
}

/* Top Bar com o Controle de Som */
.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: clamp(12px, 3vw, 20px);
    border-bottom: 1px solid #30363d;
    padding-bottom: 12px;
}

.brand-tag {
    font-size: clamp(0.75rem, 2.5vw, 0.85rem);
    color: #8b949e;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 700;
}

/* Botão Mute / Volume */
.btn-sound {
    background: #21262d;
    border: 1px solid #30363d;
    color: #58a6ff;
    padding: 8px 14px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s ease;
    user-select: none;
    touch-action: manipulation;
}

.btn-sound:hover {
    background: #30363d;
    border-color: #58a6ff;
    transform: scale(1.05);
}

.btn-sound.muted {
    color: #8b949e;
    border-color: #30363d;
    background: #161b22;
}

/* Configuração das Telas */
.screen {
    display: none;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.screen.active {
    display: block;
    opacity: 1;
}

/* --- TELA INICIAL --- */
.start-screen {
    text-align: center;
    padding: 10px 0;
}

.start-screen .hero-icon {
    font-size: clamp(2.5rem, 8vw, 3.5rem);
    margin-bottom: 10px;
    display: inline-block;
    filter: drop-shadow(0 0 10px rgba(88, 166, 255, 0.4));
    animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.08); }
}

.start-screen h1 {
    color: #58a6ff;
    font-size: clamp(1.8rem, 5vw, 2.2rem);
    margin-bottom: 8px;
    letter-spacing: 1px;
}

.start-screen p {
    color: #8b949e;
    font-size: clamp(0.9rem, 2.5vw, 1rem);
    line-height: 1.5;
    margin-bottom: 25px;
}

/* Grid dos 3 Módulos */
.modules-title {
    font-size: clamp(0.9rem, 2.5vw, 1rem);
    color: #c9d1d9;
    font-weight: 600;
    margin-bottom: 15px;
}

.modules-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
}

.module-card {
    background: #21262d;
    border: 2px solid #30363d;
    border-radius: 12px;
    padding: clamp(12px, 3vw, 16px) 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.25s ease;
    color: #c9d1d9;
    touch-action: manipulation;
}

.module-card:hover {
    background: #30363d;
    border-color: #58a6ff;
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(88, 166, 255, 0.2);
}

.module-card.featured {
    border-color: #238636;
    background: #1c2721;
}

.module-card.featured:hover {
    border-color: #2ea043;
    background: #233529;
    box-shadow: 0 6px 15px rgba(46, 160, 67, 0.3);
}

.module-number {
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: 800;
    color: #58a6ff;
    line-height: 1;
    margin-bottom: 4px;
}

.module-card.featured .module-number {
    color: #3fb950;
}

.module-label {
    font-size: 0.85rem;
    color: #8b949e;
    font-weight: 600;
    margin-bottom: 8px;
}

.module-tag {
    font-size: 0.7rem;
    font-weight: 700;
    background: #161b22;
    padding: 3px 8px;
    border-radius: 10px;
    color: #58a6ff;
    border: 1px solid #30363d;
}

.module-card.featured .module-tag {
    color: #3fb950;
    border-color: #2ea043;
}

/* Responsividade Módulos para Celulares */
@media (max-width: 520px) {
    .modules-grid {
        grid-template-columns: 1fr;
    }
    
    .module-card {
        flex-direction: row;
        justify-content: space-between;
        padding: 12px 16px;
    }

    .module-number {
        margin-bottom: 0;
    }
}

/* --- TELA DO QUIZ --- */
.quiz-nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    background: #21262d;
    padding: 10px 14px;
    border-radius: 10px;
    border: 1px solid #30363d;
}

.btn-back-home {
    background: #161b22;
    border: 1px solid #58a6ff;
    color: #58a6ff;
    padding: 8px 14px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 700;
    transition: all 0.2s ease;
    touch-action: manipulation;
}

.btn-back-home:hover {
    background: #58a6ff;
    color: #0d1117;
}

.quiz-title-tag {
    color: #8b949e;
    font-size: clamp(0.75rem, 2.5vw, 0.9rem);
    font-weight: 600;
}

.question {
    font-size: clamp(1rem, 3.5vw, 1.15rem);
    font-weight: 600;
    color: #f0f6fc;
    margin-bottom: 20px;
    line-height: 1.5;
}

.options {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

/* Opções de Resposta Adaptáveis */
.btn-option {
    background-color: #21262d;
    color: #c9d1d9;
    border: 1px solid #30363d;
    padding: clamp(10px, 3vw, 14px) clamp(12px, 3.5vw, 18px);
    border-radius: 8px;
    text-align: left;
    font-size: clamp(0.88rem, 2.8vw, 1rem);
    font-weight: 400;
    line-height: 1.4;
    min-height: 48px;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100%;
    display: flex;
    align-items: center;
    touch-action: manipulation;
}

.btn-option:hover:not([disabled]) {
    background-color: #30363d;
    border-color: #58a6ff;
    color: #ffffff;
    transform: translateX(3px);
}

.btn-option.correct {
    background-color: #2ea043 !important;
    border-color: #3fb950 !important;
    color: #ffffff;
    font-weight: 600;
}

.btn-option.wrong {
    background-color: #da3633 !important;
    border-color: #f85149 !important;
    color: #ffffff;
    font-weight: 600;
}

.footer {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.progress {
    color: #8b949e;
    font-size: 0.9rem;
}

.btn-next {
    background-color: #238636;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    display: none;
    transition: background 0.2s;
    touch-action: manipulation;
}

.btn-next:hover {
    background-color: #2ea043;
}

/* --- TELA DE RESULTADO --- */
.result-screen {
    text-align: center;
}

.result-screen h2 {
    font-size: clamp(1.4rem, 4vw, 1.8rem);
    color: #58a6ff;
    margin-bottom: 15px;
}

.score-summary {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.score-correct {
    font-size: clamp(1rem, 3vw, 1.2rem);
    font-weight: 700;
    color: #3fb950;
    background: rgba(46, 160, 67, 0.15);
    padding: 10px 18px;
    border-radius: 10px;
    border: 1px solid #2ea043;
}

.score-wrong {
    font-size: clamp(1rem, 3vw, 1.2rem);
    font-weight: 700;
    color: #f85149;
    background: rgba(218, 54, 51, 0.15);
    padding: 10px 18px;
    border-radius: 10px;
    border: 1px solid #da3633;
}

.badge {
    display: inline-block;
    padding: 10px 20px;
    background: #21262d;
    border: 1px solid #58a6ff;
    border-radius: 20px;
    color: #58a6ff;
    font-weight: bold;
    margin-bottom: 20px;
    font-size: clamp(0.9rem, 2.8vw, 1.05rem);
}

.btn-restart {
    background-color: #1f6feb;
    color: #ffffff;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    touch-action: manipulation;
}

.btn-restart:hover {
    background-color: #388bfd;
}

/* Efeitos Visuais - Partículas e Banners */
.particle {
    position: fixed;
    pointer-events: none;
    z-index: 999;
    animation: floatEffect 0.8s ease-out forwards;
}

@keyframes floatEffect {
    0% {
        opacity: 0;
        transform: scale(0.3) rotate(0deg);
    }
    30% {
        opacity: 1;
        transform: scale(1.1) rotate(20deg);
    }
    100% {
        opacity: 0;
        transform: translateY(-40px) scale(0.6) rotate(90deg);
    }
}

.wrong-banner {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(2.5rem, 8vw, 3.5rem);
    font-weight: 900;
    color: #f85149;
    text-shadow: 0 0 20px rgba(248, 81, 73, 0.8);
    z-index: 1000;
    pointer-events: none;
    animation: bannerPop 0.9s ease-out forwards;
}

@keyframes bannerPop {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.3);
    }
    25% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.1);
    }
    75% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
    100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
    }
}
