function calcular_valor() {
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const carne = (homens * 500) + (mulheres * 300) + (criancas * 200);
    const frango = (homens * 200) + (mulheres * 200) + (criancas * 100);
    const linguica = (homens * 200) + (mulheres * 200) + (criancas * 200);
    const refrigerante = (homens * 300) + (mulheres * 400) + (criancas * 200);
    const cerveja = (homens * 800) + (mulheres * 500);

    document.getElementById('carne').textContent = `Carne bovina: ${carne}g`;
    document.getElementById('frango').textContent = `Frango: ${frango}g`;
    document.getElementById('linguica').textContent = `Linguiça: ${linguica}g`;
    document.getElementById('refrigerante').textContent = `Refrigerante: ${refrigerante}ml`;
    document.getElementById('cerveja').textContent = `Cerveja: ${cerveja}ml`;
}
