<h1>API de Conversão de Unidades</h1>

<p>
  Esta API realiza conversões entre diferentes unidades de <strong>temperatura</strong>, <strong>peso</strong> e <strong>distância</strong>. Ela foi desenvolvida em Node.js com Express e está pronta para integração com aplicações front-end, como o React (já incluso no repositório).
</p>

<h2>Funcionalidades</h2>
<ul>
  <li><strong>Conversão de Temperatura:</strong> Permite converter valores entre Celsius e Fahrenheit.</li>
  <li><strong>Conversão de Peso:</strong> Permite converter valores entre Quilogramas (kg) e Libras (lb).</li>
  <li><strong>Conversão de Distância:</strong> Permite converter valores entre Quilômetros (km) e Milhas (mi).</li>
</ul>

<h2>Como funciona</h2>
<p>
  A API recebe requisições HTTP do tipo POST com os valores e unidades a serem convertidos. Ela retorna o resultado da conversão e a unidade correspondente.
</p>
<h1>Front-end React</h1> 

O front-end deste repositório foi desenvolvido em React, utilizando Vite para proporcionar uma experiência rápida e moderna. Ele oferece uma interface intuitiva para realizar conversões de temperatura, peso e distância.

<h1>Principais características</h1>

- **Interface amigável:** Permite selecionar o tipo de conversão, inserir valores e escolher as unidades de origem e destino.
- **Integração com a API:** As conversões são feitas em tempo real, consumindo os endpoints da API Node.js.
- **Exibição instantânea:** O resultado da conversão aparece imediatamente após o envio.
- **Código organizado:** O projeto possui estrutura simples, facilitando manutenção e futuras melhorias.

<h1>Estrutura do front-end</h1>
- `src`: Contém os arquivos principais da aplicação React.
- `src/App.jsx`: Componente principal da aplicação, responsável pela interface e lógica de conversão.
- `src/main.jsx`: Ponto de entrada da aplicação.

> Certifique-se de que a API esteja em execução para que o front-end funcione corretamente.
