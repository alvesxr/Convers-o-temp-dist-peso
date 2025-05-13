//linha 2 serve para importar a função de conversão da distância
export function converterDistancia (distancia, unidade) {
    let resultado = 0;
    let unidadeResultado = '';
    const unidadeNormalizada = unidade.toLowerCase();// // Normaliza a unidade para minúsculas
    //isso serve para independente de como o usuário digitar a unidade, o código vai funcionar

    if (unidadeNormalizada === 'km' || unidadeNormalizada === 'quilometro') {
        resultado = distancia * 0.621371; // Quilômetros para Milhas
        unidadeResultado = 'mi';
    }
    else if (unidadeNormalizada === 'mi' || unidadeNormalizada === 'milha' || unidadeNormalizada === 'm') {
        resultado = distancia / 0.621371; // Milhas para Quilômetros
        unidadeResultado = 'km';
    }
    else {
        throw new Error('Unidade não reconhecida. Por favor, use "km" para Quilômetros ou "mi" para Milhas.');
    }
    return {
        resultado: resultado,
        unidadeResultado: unidadeResultado
        //retorna um objeto com o resultado e a unidade
    }
};