<!DOCTYPE html>
<?php 
    include("../FUNCOES/conexao.php");
    include("../SQL/query.php");
?>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabela de Dados do Jogo</title>
    <link rel="stylesheet" href="../CSS/exibealunos.css">
</head>
<body>
    <button onclick="window.location.href='../index.html'" class="back-button">Voltar</button>
    <h2>Tabela de Dados do Jogo</h2>
    <table>
        <thead>
            <tr>
                <th>Código do Aluno</th>
                <th>Nome do Aluno</th>
                <th>Tempo do Quiz (minutos:segundos)</th>
                <th>Tempo do Jogo da Memória (segundos)</th>
            </tr>
        </thead>
        <tbody>
            <?php
                $query = mysqli_query($conexao,"SELECT * FROM `website`.`alunos` ORDER BY `Tempoquiz_aluno` ASC LIMIT 1000;");
                while($exibe = mysqli_fetch_array($query)){
            ?>
            <tr>
                <td><?php echo $exibe[0] ?></td>
                <td><?php echo $exibe[1] ?></td>
                <td><?php echo gmdate("i:s", $exibe[2]) ?></td>
                <td><?php echo $exibe[3]; }?></td>
            </tr>
        </tbody>
    </table>
</body>
</html>
