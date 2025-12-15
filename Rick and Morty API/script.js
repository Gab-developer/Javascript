let main_div = document.createElement("div")
let body = document.body
function mostrar_personagens(){
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(dados => {
       
        for (personagens of dados.results){
          
            let dudes = document.createElement("p")
            dudes.innerHTML = personagens.name
            let imgs = document.createElement("img")
            imgs.setAttribute("src", personagens.image)
            let gender = document.createElement("span")
            gender.innerHTML = personagens.gender
            let glass = document.createElement("div")
            main_div.setAttribute("class", "main_div")
            let status = document.createElement("span")
            status.innerHTML = personagens.status
            let sec_div = document.createElement("div")
            sec_div.style.display = "flex"
            sec_div.style.justifyContent = "space-around"
            sec_div.style.padding = "10px"
            sec_div.append(gender, status)
            glass.setAttribute("class", "glass")
            glass.append(dudes, imgs, sec_div)
            main_div.append(glass)
        }
        body.append(main_div)
    })
}