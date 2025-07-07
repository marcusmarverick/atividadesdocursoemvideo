// exercicio de estrutura aninhada

var agora = new Date // bloco de variavel
var hora = agora.getHours()

// estrutura aninhada
console.log('Agora são ${hora} horas.')
if (hora < 12){
    console.log('bom dia')
} else if (hora <=18){
    console.log('boa tarde')
} else {
    console.log('boa noite')
}