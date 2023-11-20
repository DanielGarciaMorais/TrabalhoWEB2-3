var azul = document.getElementById('azul');
var vermelho = document.getElementById('vermelho');
var quantVezes = 0;

azul.addEventListener('click', function (){
    quantVezes++;
    azul.style.display = 'none';
    var quantClicks = 1;
    var quantClicksPorSegundo;
    vermelho.addEventListener('click', function ()
    {
        quantClicks++;
    
    });
    setTimeout(function ()
    {
        alert('Quantidade de clicks em 5 segundos: ' + quantClicks);
        azul.style.display = 'block';
        quantClicksPorSegundo = quantClicks / 5;
        var tabela = document.getElementById('placar');
        var novaLinha = document.createElement("tr");
        var posicao = document.createElement("td");
        var clicks = document.createElement("td");
        var clicksPS = document.createElement("td");
        posicao.innerHTML = quantVezes;
        clicks.innerHTML = quantClicks;
        clicksPS.innerHTML = quantClicksPorSegundo;
        novaLinha.appendChild(posicao);
        novaLinha.appendChild(clicks);
        novaLinha.appendChild(clicksPS);
        tabela.appendChild(novaLinha);
    }, 5000);

});