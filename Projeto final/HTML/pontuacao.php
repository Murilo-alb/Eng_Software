<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela de Pontuação</title>
    <link rel="stylesheet" href="../CSS/pontuacao.css">
</head>
<body>
    <div class="score-container">
        <header>
            <h1>Tempos nos Jogos</h1>
        </header>
        <section class="score-board">
            <div class="score-item">
                <p>Nome do Jogador:<br> <span id="spanJogador" class="score"></span></p>
            </div>
            <div class="score-item">
                <p>Tempo Restante no Quiz: <span id="spanTempoQuiz" class="score"></span> segundos</p>
            </div>
            <div class="score-item">
                <p>Jogo da Memória: <span id="spanTempoMemoria" class="score"></span></p>
            </div>
        </section>
        <footer>
            <form id="meuFormulario" action="processar.php" method="post">
                <input type="hidden" name="Nome_aluno" id="inputJogador">
                <input type="hidden" name="Tempoquiz_aluno" id="inputTempoQuiz">
                <input type="hidden" name="Tempomemoria_aluno" id="inputTempoMemoria">
                <button type="submit">Reiniciar Jogo</button>
            </form>
        </footer>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const tempoProgressivo = localStorage.getItem('tempoProgressivo') || "Tempo não disponível";
            const jogador = localStorage.getItem('Jogador') || "Nome não disponível";
            const tempoQuiz = localStorage.getItem('tempoQuiz') || "Tempo não disponível";

            const spanTempoMemoria = document.getElementById('spanTempoMemoria');
            const spanJogador = document.getElementById('spanJogador');
            const spanTempoQuiz = document.getElementById('spanTempoQuiz');

            spanTempoMemoria.textContent = tempoProgressivo;
            spanJogador.textContent = jogador;
            spanTempoQuiz.textContent = tempoQuiz;

            document.getElementById('inputJogador').value = jogador;
            document.getElementById('inputTempoQuiz').value = tempoQuiz;
            document.getElementById('inputTempoMemoria').value = tempoProgressivo;
        });
    </script>
</body>
</html>
