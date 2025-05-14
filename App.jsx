import { useState } from 'react'
import './App.css'

function App() {
  // variáveis de estado para armazenar os valores de entrada e resultado
  // da conversão de temperatura
  const [temperatura, setTemperatura] = useState('');
  const [unidadeTemperatura, setUnidadeTemperatura] = useState('');
  const [resultadoTemperatura, setResultadoTemperatura] = useState('');
  
  const handleSubmitTemperatura = async (e) => {
  e.preventDefault(); // impede o recarregamento da página
  try {
    const response = await fetch('http://localhost:3000/converter_temperatura', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        temperatura: temperatura,
        unidade: unidadeTemperatura
      })
    });
    const data = await response.json();
    setResultadoTemperatura(`${data.resultado} ${data.unidadeResultado}`);
  } catch (error) {
    setResultadoTemperatura('Erro ao converter temperatura');
  }
};

  // da conversão de peso
  const [peso, setPeso] = useState('');
  const [unidadePeso, setUnidadePeso] = useState('');
  const [resultadoPeso, setResultadoPeso] = useState('');
  // da conversão de distância
  const [distancia, setDistancia] = useState('');
  const [unidadeDistancia, setUnidadeDistancia] = useState('');
  const [resultadoDistancia, setResultadoDistancia] = useState('');



  return (
    <>
      <div className='Conversor_de_Unidades'>
        <h1>Conversor de Unidades</h1>
      </div>
      <div className='forms-container'>
        <form onSubmit={handleSubmitTemperatura}>
          <input
            type="number"
            value={temperatura}
            onChange={(e) => setTemperatura(e.target.value)}
            placeholder="Temperatura"
          />
          <input
            type="text"
            value={unidadeTemperatura}
            onChange={(e) => setUnidadeTemperatura(e.target.value)}
            placeholder="Unidade de Temperatura (C/F)"
          />
          <button type="submit">Converter</button>
          {resultadoTemperatura && <p>Resultado: {resultadoTemperatura}</p>}
        </form>
        <form>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Peso"
          />
          <input
            type="text"
            value={unidadePeso}
            onChange={(e) => setUnidadePeso(e.target.value)}
            placeholder="Unidade de Peso (kg/lb)"
          />
          <button type="submit">Converter</button>
        </form>
        <form>
          <input
            type="number"
            value={distancia}
            onChange={(e) => setDistancia(e.target.value)}
            placeholder="Distância"
          />
          <input
            type="text"
            value={unidadeDistancia}
            onChange={(e) => setUnidadeDistancia(e.target.value)}
            placeholder="Unidade de Distância (km/mi)"
          />
          <button type="submit">Converter</button>
        </form>
      </div>
    </>
  )
}

export default App
