document.querySelector('.button').addEventListener('click', function(event) {
    event.preventDefault(); // previne o envio do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
   window.alert(`Obrigado ${nome} já registramos seu email: ${email}`);

    // Faça algo com os dados aqui, como enviá-los para um servidor

    // Limpa o formulário
    document.querySelector('.form').reset();
});

