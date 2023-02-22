document.querySelector('.button').addEventListener('click', function (event) {
    event.preventDefault(); // previne o envio do formulário
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let idade=document.getElementById('idade').value;
    let cidade=document.getElementById('cidade').value;
    if (window.confirm(`${nome} você confirma o pedido para teste grátis?`) === true) {
        if (window.confirm(`Obrigado ${nome} ${sobrenome} registramos os seguintes dados: Nome:${nome} , Sobrenome: ${sobrenome} idade: ${idade} cidade: ${cidade} Emial: ${email} você confirma esses dados:`) === true) {
            window.alert(`Ok Confirmado seus dados ${nome}`);
        } else {
            window.alert(`Ok ${nome} seus dados não serão armazenados`);
        }
    } else {
        window.alert(`Ok ${nome} seus dados não serão armazenados`);
    }

    console.log(nome,email,sobrenome,idade,cidade)

    // Limpa o formulário
    document.querySelector('.form').reset();
});