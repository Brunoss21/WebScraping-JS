Link página: https://pt.wikipedia.org/wiki/Lista_de_presidentes_do_Brasil

Código para colar console do navegador: 

const linhas = document.querySelectorAll('.wikitable tbody tr');

linhas.forEach((linha, index)=>{

    if (index % 2 === 0) {
        linha.style.color="#fff";
        linha.style.backgroundColor = 'green';
        linha.style.border="solid #ffffff "
    } else {
        linha.style.color="blue";
        linha.style.border="solid #ffffff "
        linha.style.backgroundColor = 'yellow';
    }

    const colunas = linha.querySelectorAll('td');
    if(colunas.length < 3) return;

    const ordem = colunas[0]?.textContent.trim() || 'N/A';
    const nome = colunas[1].textContent.trim();
    const mandato = colunas[3].textContent.trim();
    const partido = colunas[4].textContent.trim();
    const vicePres = colunas[5].textContent.trim();
    const eleicao = colunas[6].textContent.trim();

    console.log(`Ordem: ${ordem}\nPresidente: ${nome}\nMandato: ${mandato}\nPartido: ${partido}\nVice-Presidente: ${vicePres}\nAno Eleição: ${eleicao}`);

});

const links = document.querySelectorAll('.wikitable a');

links.forEach(link => {
  const texto = link.style.color="blue"
});
