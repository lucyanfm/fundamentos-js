function apresentar(nome) {
    return `meu nome é ${nome}`;
}

// Arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1,nume2) => num1 + nume2;

//Arrow function com mais de uma linha de estução

const somaNumerosPequenos = (num1,num2) => {
    if (num1 || num2 > 10) {
        return "somente numeros de um a nove"
    }else{
        return num1 + num2;
    }
}