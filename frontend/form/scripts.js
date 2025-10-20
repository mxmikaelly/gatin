const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const userType = document.getElementById("user-type");
const cpfField = document.getElementById("cpf-field");
const cnpjField = document.getElementById("cnpj-field");
const cpf = document.getElementById("cpf");
const cnpj = document.getElementById("cnpj");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordConfirmationValue = passwordConfirmation.value.trim();
  const userTypeValue = userType.value;

  // Nome de usuário
  if (usernameValue === "") {
    setError(username, "Nome de usuário é obrigatório");
  } else {
    setSuccess(username);
  }

  // Email
  if (emailValue === "") {
    setError(email, "Email é obrigatório");
  } else if (!checkEmail(emailValue)) {
    setError(email, "Email inválido");
  } else {
    setSuccess(email);
  }

  // Senha
  if (passwordValue === "") {
    setError(password, "Senha é obrigatória");
  } else {
    setSuccess(password);
  }

  // Confirmar senha
  if (passwordConfirmationValue === "") {
    setError(passwordConfirmation, "Confirmação é obrigatória");
  } else if (passwordValue !== passwordConfirmationValue) {
    setError(passwordConfirmation, "Senhas não coincidem");
  } else {
    setSuccess(passwordConfirmation);
  }

  // Tipo de usuário
  if (userTypeValue === "fisico") {
    if (cpf.value.trim().length !== 11) {
      setError(cpf, "CPF deve ter 11 números");
    } else {
      setSuccess(cpf);
    }
  }

  if (userTypeValue === "juridico") {
    if (cnpj.value.trim().length !== 14) {
      setError(cnpj, "CNPJ deve ter 14 números");
    } else {
      setSuccess(cnpj);
    }
  }
}

// Funções auxiliares
function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Mostrar CPF ou CNPJ dependendo do tipo selecionado
userType.addEventListener("change", () => {
  if (userType.value === "fisico") {
    cpfField.style.display = "block";
    cnpjField.style.display = "none";
    cnpj.value = "";
  } else if (userType.value === "juridico") {
    cnpjField.style.display = "block";
    cpfField.style.display = "none";
    cpf.value = "";
  } else {
    cpfField.style.display = "none";
    cnpjField.style.display = "none";
    cpf.value = "";
    cnpj.value = "";
  }
});

