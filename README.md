# Tabuada Automática

> Projeto desenvolvido para treinar **Lógica de Programação** e estruturas de repetição em JavaScript.

Esta aplicação web permite que o usuário digite qualquer número e gera instantaneamente a tabuada de multiplicação (de 1 a 10) correspondente. O foco do projeto foi manipular elementos HTML dinamicamente através do JavaScript.

## Tecnologias Utilizadas

- **HTML5** (Estrutura da página)
- **CSS3** (Estilização e layout centralizado)
- **JavaScript** (Lógica de cálculo e manipulação do DOM)

## Funcionalidades

- [x] **Geração de Tabuada:** Calcula a multiplicação do número inserido pelos fatores de 1 a 10.
- [x] **Renderização Dinâmica:** Cria elementos `<option>` dentro de um `<select>` via código, sem precisar escrever o HTML manualmente para cada linha.
- [x] **Validação Básica:** Garante que o usuário inseriu um dado válido antes de calcular.
- [x] **Limpeza Automática:** Limpa o resultado anterior antes de gerar uma nova tabuada.

## Aprendizados e Destaques do Código

Este projeto foi essencial para fixar o conceito de **Laços de Repetição**:

1. **Loop `for`:** Utilizei a estrutura `for` para iterar de 1 a 10, realizando o cálculo matemático em cada volta do laço.
2. **Manipulação do Select:** Em vez de usar uma lista comum, optei por injetar as linhas dentro de um elemento `<select>`, usando `document.createElement('option')` e `appendChild`, entendendo como o JavaScript interage com a árvore de elementos do navegador.
3. **Tratamento de Strings:** Uso de *Template Strings* (`${num} x ${c} = ...`) para formatar o texto de saída de forma limpa.

## Como rodar o projeto

1. Clone este repositório.
2. Abra o arquivo `index.html` no seu navegador.
3. Digite um número e clique em "Calcular"!

---
Desenvolvido por **Fabio** durante estudos de Frontend e JavaScript.
