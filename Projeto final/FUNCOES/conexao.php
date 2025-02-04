<?php 

$servidor = "127.0.0.1";
$usuario = "root";
$senha = "";
$banco = "website";

$conexao = mysqli_connect($servidor,$usuario,$senha);
		   mysqli_select_db($conexao,$banco);

		   
		   /*if($conexao){
			   echo "Conexão realizada com sucesso!";
		   } else {
			   echo "Falha ao conectar!";
		   }*/

?>