import { error } from "console";

export function converteTemperatura(temperatura, unidade) {
    let resultado = 0;
    let unidadeResultado = '';

    const unidadeNormalizada = unidade.toLowerCase();
    //isso serve para independente de como o usuário digitar a unidade, o código vai funcionar
    //se ele digitar Celsius, Celsius, celsius, C, c, o código vai funcionar


    if (unidadeNormalizada === 'c' || unidadeNormalizada === 'celsius') {
        resultado = (temperatura * 9/5) + 32; // Celsius to Fahrenheit
        unidadeResultado = 'f';
    }
    else if (unidadeNormalizada === 'f' || unidadeNormalizada === 'fahrenheit' ){
        resultado = (temperatura - 32) * 5/9; // Fahrenheit to Celsius
        unidadeResultado = 'c';
    }
    else {
        throw new Error('Unidade não reconhecida. Por favor, use "C" para Celsius ou "F" para Fahrenheit.');
    }
    
    return {
        resultado: resultado,
        unidadeResultado: unidadeResultado
        //retorna um objeto com o resultado e a unidade
    };

}; //fim da função
