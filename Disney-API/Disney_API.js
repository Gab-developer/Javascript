await fetch("https://api.disneyapi.dev/character")
    .then(res => res.json())
    .then(dados => {console.log(dados)
        for(let filme of dados.data){
            let imagem = document.createElement("img")
            let nome_person = document.createElement("span")
            let filmes = document.createElement("span")
            let btn = document.createElement("a")
            btn.textContent = "Link"
            btn.setAttribute("href", filme.url)
            filmes.textContent = filme.films
            nome_person.textContent = filme.name
            imagem.src = filme.imageUrl
            let main_div = document.createElement("div")
            main_div.append(imagem, nome_person, filmes, btn)
            main_div.style.display = "flex"
            main_div.style.flexDirection = "column"
            main_div.setAttribute("class", "main_div")
            let body = document.body
            body.append(main_div)
        }
            
    })
