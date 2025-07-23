function cadastrarUsuario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const cidade = document.getElementById("cidade").value;

  if (!nome || !email || !senha || !cidade) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  localStorage.setItem("email", email);
  localStorage.setItem("senha", senha);
  alert("Conta criada com sucesso!");
}

function fazerLogin() {
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  const emailSalvo = localStorage.getItem("email");
  const senhaSalva = localStorage.getItem("senha");

  if (!email || !senha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (email === emailSalvo && senha === senhaSalva) {
    window.location.href = "menu.html";
  } else {
    alert("Usuário ou senha inválidos, tente novamente.");
  }
}

function voltarLogin() {
  window.location.href = "login.html";
}