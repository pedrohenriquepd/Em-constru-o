function entrar() {
  let usuario = document.querySelector("#usuario");
  let senha = document.querySelector("#senha");
  
  
  let msgError = document.querySelector("#msgError");
  let listaUser = [];

  if (usuario.value == 'admin' && senha.value == '123456' ) {
    window.location.href = "https://pedrohenriquepd.github.io/CRUD-Javascript/";
    
    /* nao precisa fazer parte de token agora */

    let mathRandom = Math.random().toString(16).substr(2);
    let token = mathRandom + mathRandom;

    localStorage.setItem("token", token);
    localStorage.setItem("userLogado", JSON.stringify(userValid));
  } else {
    userLabel.setAttribute("style", "color: red");
    usuario.setAttribute("style", "border-color: red");
    senhaLabel.setAttribute("style", "color: red");
    senha.setAttribute("style", "border-color: red");
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML = "Usuário ou senha incorretos";
    usuario.focus();
  }
}
