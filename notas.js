let qtde = Number(prompt('Quantidade de alunos: '))

let somaNotas = 0
let maiorNota = 0
let menorNota = 100
let contador = 0 

while(contador < qtde){
    let nota = Number(prompt(`Digite a nota do aluno${contador + 1}`))
    somaNotas += nota

    if(nota > maiorNota){
        maiorNota = nota
    }

    if (nota < menorNota){
        menorNota = nota;
    }

    contador++

}

let mediaTurma = somaNotas / qtde

console.log(`A média da turma e de: ${mediaTurma.toFixed(2)}`)
console.log(`A maior nota e de: ${maiorNota}`)
console.log(`A menor nota e de: ${menorNota}`)


