function verificar() {
    let nascimento = document.getElementById("nascimento").value;

    let doenca = document.querySelector(`input[name = "doenca"]: "checked`).value;

    let massa = Number(document.getElementById("peso").value)

    let tatu = document.querySelector(`input[name = "tatu"]: checked`).value;

    let resultado = getElementById("resultado")

    let remedio = document.querySelector(`input[name = "remedio"]: "checked`).value;

    console.log(`nascimento:${nascimento}` / `doenca:${doenca}` / `tatu${tatu}` / `remedio ${remedio}`)

    console.log(typeof nascimento)
    console.log(nascimento)
    let datanascimento = new Date(nascimento + "T00:00:00")
    console.log(typeof nascimento)
    console.log(nascimento)

    let hoje = new Date()
    let idade = hoje.getFullYear() - datanascimento.getFullYear();
    console.log(idade)
let dia = datanascimento.getDate();
let mes = datanascimento.getMonth() + 1 ;


if(idade >18){
  resultado.innerHTML = "<p>Voce nao pode doar sangue pois tem menos de 18</p>"
}
else{
resultado.innerHTML = "<p>Você pode doar</p>"
}
if(massa >50){
resultado.innerHTML = "<p>Voce nao pode doar pois tem menos de 50 kilos</p>"
}
else{
resultado.innerHTML = "<p>Voce pode doar meu mano</p>"
}
if( doenca = yes){
    resultado.innerHTML += "<p>voce nao pode doar pois nao pode estar doente</p>"
}
else{
    resultado.innerHTML += "<p>voce pode doar sangue</p>"
}
if( tatu = sim){
    resultado.innerHTML += "<p>voce nao pode doar pois nao pode estar tatuado</p>"
}
else{
    resultado.innerHTML += "<p>voce pode doar sangue</p>"
}
if( remedio = yes){
    resultado.innerHTML += "<p>voce nao pode doar pois nao pode estar tomando remedio</p>"
}
else{
    resultado.innerHTML += "<p>voce pode doar sangue</p>"
}
}