var numero_1 = 16
var numero_2 = 16
var numero_3 = 15

var resul = ``

if (numero_1 == numero_2 && numero_1 == numero_3){
resul = `Todos eles sao IGUAIS `
}
else if( numero_2 >= numero_1 && numero_2 >= numero_3){
    resul = `maior numero : ${numero_2}`
}
else if(numero_1 >= numero_2 && numero_1 >= numero_3){
    resul = `maior numero ${numero_1}`
}

else{
    resul = `maior numero : ${numero_3}`
}

console.log(resul)

