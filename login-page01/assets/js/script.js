document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obter valores dos campos
    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();

    // Elementos de mensagem de erro
    const userError = document.getElementById('userError');
    const passError = document.getElementById('passError');

    let valid = true;

    // Validação do usuário
    if (usuario === '') {
        userError.style.display = 'block';
        valid = false;
    } else {
        userError.style.display = 'none';
    }

    // Validação da senha
    if (senha === '') {
        passError.style.display = 'block';
        valid = false;
    } else {
        passError.style.display = 'none';
    }

    if (valid) {
        // Aqui você pode adicionar a lógica para processar o login
        alert('Login realizado com sucesso!');
        // Por exemplo, redirecionar para outra página:
        // window.location.href = 'dashboard.html';
    }
});

// Funcionalidade de Mostrar Senha
document.getElementById('showPassword').addEventListener('change', function () {
    const senhaInput = document.getElementById('senha');
    if (this.checked) {
        senhaInput.type = 'text';
    } else {
        senhaInput.type = 'password';
    }
});
