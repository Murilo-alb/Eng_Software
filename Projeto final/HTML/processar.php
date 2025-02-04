<?php 

	include("../FUNCOES/conexao.php");
	
		$Nome_aluno = $_POST["Nome_aluno"];
        $Tempoquiz_aluno = $_POST["Tempoquiz_aluno"];
        $Tempomemoria_aluno = $_POST["Tempomemoria_aluno"];

        echo $Nome_aluno;
        echo $Tempoquiz_aluno;
        echo $Tempomemoria_aluno;

        $query = "INSERT INTO alunos (Nome_aluno, Tempoquiz_aluno, Tempomemoria_aluno) VALUES ('$Nome_aluno', '$Tempoquiz_aluno', '$Tempomemoria_aluno')";
        if (mysqli_query($conexao, $query)) {
            echo "Dados inseridos com sucesso!";
        } else {
            echo "Erro ao inserir dados: " . mysqli_error($conexao);
        }

header("location:../index.html");
?>