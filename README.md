# Verifição De Suspeitos

A Verificação de Suspeitos foi um teste aplicado em uma seleção para vaga de desenvolvedor front-end, para testar o nível de entendimento de funções, array list e lógica de programação.

![image](https://github.com/jcamposmelo/Verifica-oDeSuspeitos/assets/101723959/9068c88b-e5a6-4aff-8e10-b4329f7ce578)


## 🔨 Funcionalidades do projeto

Aplicação web em formato permite ao policial investigar quem roubou a quantia da carteira da vítima, baseado na quantidade de notas encontradas e do total correspondente à unidade monetária.

## ✔️ Técnicas e tecnologias utilizadas

As técnicas e tecnologias utilizadas foram:

- `HTML`: criação dos elementos da tela;
- `CSS`: estilização da aplicação;
- `JavaScript`: construção de elementos dinâmicos para checagem dos valores encontrados nas carteiras dos suspeitos, baseado na quantidade monetária e quantidade de cédulas encontradas.

#
## Detalhamento de trechos do código

- Função criada para verificar através de um laço de repetição indicando que encontrou duas notas que somam 150, premissa básica para achar o responsável pelo furto.
  
        function quemRoubou(notas) {
            let left = 0;
            let right = notas.length - 1;
        
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

## 📁 Acesso ao projeto

Você pode acessá-lo de forma gratuita e aprimorar!

Após baixar o projeto, você pode abrir com o Visual Studio Code. Para isso, no menu superior, clique em:

- **File** > **Open Folder**
- O projeto está salvo em 1 pasta `Desafio-1` basta selecionar. (Caso o projeto esteja compactado na extensão .zip, será necessário extraí-lo antes de procurá-lo)
- Por fim clique em OK!

Ao finalizar esses passos, você pode executar a aplicação com a extensão Live Server 🏆 

