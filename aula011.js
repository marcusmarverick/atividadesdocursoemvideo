// Exercicio de Estrutura aninhada
 
var idade = 67 // Bloco de variaveis

// Bloco de estrutura aninhada
console.log ('você tem ${idade} anos')
if (idade < 16) {
    console.log('não vota')
} else if (idade < 18 || idade >65) { 
    console.log('voto opicional')
}
else{
    console.log('voto obrigatorio')
}