//Você é um detetive em uma pequena cidade e está investigando um roubo que aconteceu na região.
//Durante a investigação, você descobre que uma carteira com 150 fulampos (o dinheiro da região) foram roubados. A vítima não lembra exatamente o que havia em sua carteira, mas sabe que existiam apenas duas notas.
//Em pouquíssimo tempo, a polícia encontrou alguns suspeitos e acredita-se que o ladrão não tenha conseguido usar ou trocar o dinheiro roubado. Agora, você precisa descobrir quais deles poderiam ter roubado os 150 fulampos verificando a carteira de cada um deles.
//Escreva uma função que recebe como parâmetro um array de números inteiros ordenados (referente às notas na carteira de um suspeito) e retorne, no menor tempo possível, se ele pode ter roubado os 150 fulampos da nossa vítima.
//Faça o upload do arquivo de solução abaixo, utilizando a sua linguagem de preferência.

function quemRoubou(notas) {
    let left = 0;
    let right = notas.length - 1;

    //Explicando a lógica do laço while utilizada na instrução abaixo.
    //Se soma for igual a 150, a função retorna true, indicando que encontrou duas notas que somam 150.
    //Se soma for menor que 150, o índice left é incrementado (left++), movendo para a próxima nota maior.
    //Se soma for maior que 150, o índice right é decrementado (right--), movendo para a próxima nota menor.

    while (left < right) {
        const soma = notas[left] + notas[right];
        if (soma === 150) {
            return true;
        } else if (soma < 150) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

function verificarNotas() {
    const input = document.getElementById('notas').value;
    //Obtém o valor do campo de texto com o ID notas no documento HTML. Esse valor é uma string contendo notas separadas por vírgulas.

    const notas = input.split(',').map(Number).sort((a, b) => a - b);
    //Chama a função quemRoubou passando o array de notas. Esta função retorna true se encontrar duas notas que somam exatamente 150, caso contrário, retorna false.

    const resultado = quemRoubou(notas);
    //Define o texto do elemento HTML com o ID resultado baseado no valor de resultado.
    //Se resultado for true, o texto será "O suspeito pode ter roubado os 150 fulampos."
    //Se resultado for false, o texto será "O suspeito não pode ter roubado os 150 fulampos."

    document.getElementById('resultado').innerText = resultado
        ? "O suspeito pode ter roubado os 150 fulampos."
        : "O suspeito não pode ter roubado os 150 fulampos.";
}