const objetoPessoa ={
    nome: "Thauane",
    idade: 17,
    cpf: " 6792344123142",
    email:"thauane.lourenco@escola.pr.gov.br",

}


console.log( `O nome do cliente é ${objetoPessoa["nome"]} e sua idade é ${ objetoPessoa["idade"]} anos`)

const chaves =[ "nome","idade","cpf" , "email", "altura"];

chaves.forEach((chave) => {
    console.log(` A chave ${chave}tem valor ${ objetoPessoa[chave]}`);
});