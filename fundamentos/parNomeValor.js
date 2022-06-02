const saudacao = 'Opa';


function exe() {
    const saudacao = 'Falaaa'
    return saudacao;
}

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Tal tal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exe());
console.log(cliente.endereco.logradouro);