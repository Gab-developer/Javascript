let body = document.body
function listar_racas(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then (dados => {
    for (raca in dados.message){
        let dog = document.createElement("span")
        dog.innerHTML = `-> ${raca}`
        dog.style.color = "white"
        let dog_img = document.querySelector(".dog_image")
        dog_img.append(dog)
        while (dog_img < 12){
            body.append(dog_img)
        }
    }})
}

function random_img(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then (dados => {
        let img = document.createElement("img")
        img.setAttribute("src", dados.message)
        img.style.width = "200px"
        img.style.height = "200px"
        let dog_img = document.querySelector(".dog_image")
        dog_img.append(img)
    })
}