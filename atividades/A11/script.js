function consultaEndereco(){
    let cep = document.querySelector('#cep').value;
    if (cep.length !== 8){
        alert('cep invalido');
        return;
    }


    let url =  `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarResultado(data)
        })
    });
}
function mostrarResultado(dados){
    let resultado = document.querySelector('#resultado');
    if (dados.erro){
        resultado.innerHTML = `<p> cep invalido!!</p>`;
    }else{
    resultado.innerHTML = 
    `<p>Endereço: ${dados.logradouro}</p>
    <p>Complemento: ${dados.complemento}</p>
    <p>Bairro: ${dados.bairro}</p>
    <p>Cidade: ${dados.localidade} - ${dados.uf}</p>`
    
    }
}