export function converterPeso(peso, unidade){
    let resultado = 0;
    let unidadeResultado = '';
    const unidadeNormalizada = unidade.toLowerCase(); // Normaliza a unidade para minúsculas
    //isso serve para independente de como o usuário digitar a unidade, o código vai funcionar

    if(unidadeNormalizada === 'kg' || unidadeNormalizada === 'quilograma') {
        resultado = peso * 2.20462; // Quilogramas para Libras
        unidadeResultado = 'lb';
    }
    else if(unidadeNormalizada === 'lb' || unidadeNormalizada === 'libra' || unidadeNormalizada === 'l'){
        resultado = peso / 2.20462; // Libras para Quilogramas
        unidadeResultado = 'kg';
    }
    else {
        throw new Error('Unidade não reconhecida. Por favor, use "kg" para Quilogramas ou "lb" para Libras.');
    }
    return {
        resultado: resultado,
        unidadeResultado: unidadeResultado // corrigido aqui
        //retorna um objeto com o resultado e a unidade
    }
};