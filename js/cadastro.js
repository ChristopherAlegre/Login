function cadastroUsuario () {
     
    const Usuário = document.getElementById("usuario").value;
    const cidade = document.getElementById("cidade").value;
    const mensagem = document.getElementById("mensagem");

    localStorage.setItem("usuarioCadastro", Usuário);

    console.log(Usuário);

    if (usuario === "" || cidade === "") {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        mensagem.className = "erro";
        return;
      }

        
     else {
        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.className = "sucesso";
      }
    
    // Validar os campos
    if (nome === "" || email === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Simular o envio dos dados para um servidor
    console.log("Usuário cadastrado:", {
        nome: nome,
        email: email,
        senha: senha
    });

    // Exibir mensagem de sucesso
    alert("Cadastro realizado com sucesso!");
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("./data/cidades-brasileiras.json")
      .then(response => response.json())
      .then(data => {
        const datalist = document.getElementById("lista-cidades");
        data.forEach(cidade => {
          const option = document.createElement("option");
          option.value = cidade.nome;
          datalist.appendChild(option);
        });
      })
      .catch(error => {
        console.error("Erro ao carregar cidades:", error);
      });
  });
   