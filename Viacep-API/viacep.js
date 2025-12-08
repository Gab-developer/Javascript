function pegarCep() {
    let cep = document.getElementById("input").value
    let cep_1 = document.getElementById("input")
    let botaoEnviar = document.querySelector("button")
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(dados => {
            let bairro = document.createElement("span")
            bairro.innerHTML = `Bairro: <span>${dados.bairro}</span> `
            let logradouro = document.createElement("span")
            logradouro.innerHTML = `Logradouro: <span>${dados.logradouro}</span> `
            let estado = document.createElement("span")
            estado.innerHTML = `Estado: <span> ${dados.estado}</span> `
            let localidade = document.createElement("span")
            localidade.innerHTML = `Localidade: <span>${dados.localidade}</span> `
            let regiao = document.createElement("span")
            regiao.innerHTML = `Região: <span>${dados.regiao}</span> `
            let div_discart = document.getElementById("glass2")
            div_discart.style.display = "none"
            let div_content = document.createElement("div")
            div_content.style.display = "flex"
            div_content.style.flexDirection = "column"
            div_content.style.gap = "5px"
            div_content.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"
            div_content.append(bairro, logradouro, estado, localidade, regiao)
            let div_main = document.createElement("div")
            div_main.append(cep, cep_1, botaoEnviar)
            div_content.setAttribute("class", "glass")
            let body = document.body
            body.append(div_content)
        })
}





