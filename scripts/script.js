function verificarCampos() {
     var campo1 = document.getElementById("campo1");
     var campo2 = document.getElementById("campo2");
     var campo3 = document.getElementById("campo3");
     var campo4 = document.getElementById("campo4");

     var msgNome = document.getElementById("msgNome");
     var msgSobrenome = document.getElementById("msgSobrenome");
     var msgEmail = document.getElementById("msgEmail");  
     var msgSenha = document.getElementById("msgSenha");

     if (campo1.value === "") {
       msgNome.textContent = "Nome não foi inserido!";
       msgNome.style.color = "red";
       campo1.classList.add('erro');
       setTimeout(function() {
        msgNome.textContent = "";
        campo1.classList.remove('erro');
      }, 3000);
       return false;
     }

     if (campo2.value === "") {
       msgSobrenome.textContent = "Sobrenome não foi inserido!";
       msgSobrenome.style.color = "red";
       campo2.classList.add('erro');
       setTimeout(function() {
        msgSobrenome.textContent = "";
        campo2.classList.remove('erro');
      }, 3000);
       return false;
     }

     if (campo3.value === "") {
       msgEmail.textContent = "email não foi inserido!";
       msgEmail.style.color = "red";
       campo3.classList.add('erro');
       setTimeout(function() {
        msgEmail.textContent = "";
        campo3.classList.remove('erro');
      }, 3000);
       return false;
     } else if (campo3.indexOf === -1) {
       msgEmail.textContent = "O email digitado não é válido!";
       msgEmail.style.color = "red";
       campo3.classList.add('erro');
       setTimeout(function() {
        msgEmail.textContent = "";
        campo3.classList.remove('erro');
      }, 3000);
       return false;
     }

     if (campo4.value === "") {
       msgSenha.textContent = "Senha não foi inserida!";
       msgSenha.style.color = "red";
       campo4.classList.add('erro');
       setTimeout(function() {
        msgSenha.textContent = '';
        campo4.classList.remove('erro');
       }, 3000);
       return false;
     } else if (campo4.value.length < 8) {
       msgSenha.textContent = "A senha deve conter 8 digitos!";
       msgSenha.style.color = "red";
       campo4.classList.add('erro');
       setTimeout(function() {
        msgSenha.textContent = '';
        campo4.classList.remove('erro');
       }, 3000);
       return false;
     }

     var mensagemSucesso = document.createElement('div')
     mensagemSucesso.style.backgroundColor = 'rgb(17, 177, 17)';
     mensagemSucesso.style.color = 'rgba(24, 255, 24, 0.574)';
     mensagemSucesso.style.borderRadius = '5px';
     mensagemSucesso.style.textAlign = 'center';
     mensagemSucesso.style.marginBottom = '10px';
     mensagemSucesso.textContent = 'Dados enviados com sucesso';

     var formulario = document.getElementById("formulario");
     formulario.prepend(mensagemSucesso);
     


     // Se todos os campos estiverem preenchidos, o formulário pode ser enviado
     return true;
   }


