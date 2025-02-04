//Esta função irá verificar o nome do usuário e a senha
function verificaUsuario(form)
{
//Aqui será atribuido um valor para senha e outro para o usuário, de acordo
//com o que foi digitado na textbox
 if(form.userid.value == "admin" && form.pswrd.value == "admin")
  {
//Enfim, se os valores forem digitados corretamente, então o sistema irá
//redirecionar o usuário para a página index.html
    window.location.href='exibealunos.php'
  }
 else
 {
//Porém, se os valores forem digitados errados, a seguinte mensagem será exibida
   alert("Usuário ou senha inválidos.")
  }
}