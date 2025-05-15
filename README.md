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

<p>
  O front-end deste repositório foi desenvolvido em React, utilizando Vite para proporcionar uma experiência rápida e moderna. Ele oferece uma interface intuitiva para realizar conversões de temperatura, peso e distância.
</p>

<h2>Principais características</h2>
<ul>
  <li><strong>Interface amigável:</strong> Permite selecionar o tipo de conversão, inserir valores e escolher as unidades de origem e destino.</li>
  <li><strong>Integração com a API:</strong> As conversões são feitas em tempo real, consumindo os endpoints da API Node.js.</li>
  <li><strong>Exibição instantânea:</strong> O resultado da conversão aparece imediatamente após o envio.</li>
  <li><strong>Código organizado:</strong> O projeto possui estrutura simples, facilitando manutenção e futuras melhorias.</li>
</ul>

<h2>Estrutura do front-end</h2>
<ul>
  <li><code>src</code>: Contém os arquivos principais da aplicação React.</li>
  <li><code>src/App.jsx</code>: Componente principal da aplicação, responsável pela interface e lógica de conversão.</li>
  <li><code>src/main.jsx</code>: Ponto de entrada da aplicação.</li>
</ul>

<p>
  <strong>Observação:</strong> Certifique-se de que a API esteja em execução para que o front-end funcione corretamente.
</p>
