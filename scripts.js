document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".cadastro-informacoes-pessoais");
  const button = form.querySelector("button");

  const msgBox = document.createElement("div");
  msgBox.id = "mensagem";
  form.appendChild(msgBox);

  button.addEventListener("click", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const nascimento = document.getElementById("nascimento").value.trim();
    const cpf = document.getElementById("CPF").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const cep = document.getElementById("CEP").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value;

    const cpfPattern = /^\d{3}\d{3}\d{3}\d{2}$/;
    const telefonePattern = /^\d{2}\d{5}\d{4}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cepPattern = /^\d{5}\d{3}$/;

    function showMessage(texto, tipo) {
      msgBox.textContent = texto;
      msgBox.className = tipo;
      msgBox.style.display = "block";
      setTimeout(() => {
        msgBox.style.display = "none";
      }, 3000);
    }

    if (!nome || !email || !cpf || !endereco || !cep || !cidade || !estado) {
      showMessage(
        "⚠️ Por favor, preencha todos os campos obrigatórios!",
        "erro"
      );
      return;
    }

    if (!emailPattern.test(email)) {
      showMessage("❌ E-mail inválido!", "erro");
      return;
    }

    if (!cpfPattern.test(cpf)) {
      showMessage("❌ CPF inválido! Use o formato 000.000.000-00", "erro");
      return;
    }

    if (telefone && !telefonePattern.test(telefone)) {
      showMessage("❌ Telefone inválido! Use o formato 00.00000.0000", "erro");
      return;
    }

    if (!cepPattern.test(cep)) {
      showMessage("❌ CEP inválido! Use o formato 00000-000", "erro");
      return;
    }

    showMessage("✅ Dados válidos! Formulário enviado com sucesso!", "sucesso");
    form.reset();
  });
});
