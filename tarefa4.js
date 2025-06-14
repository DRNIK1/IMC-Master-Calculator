//entrada
function imcCalculado(){
    
    let seuNome = document.getElementById('nome').value;
    let seuPeso = document.getElementById('peso').value;
    let suaAltura = document.getElementById('altura').value;

//processamento

    let suaAlturaEmMetros = suaAltura / 100;
    let imc = seuPeso / Math.pow(suaAlturaEmMetros, 2);
    let imcCurto = imc.toFixed(3);

    if (imcCurto < 18.5){
        document.getElementById('resultado').textContent = 'Resultado: ' + seuNome + ' \nseu IMC é cerca de ' + imcCurto + ', significa que está abaixo do peso.';
    }

    else if (imcCurto > 18.5 && imcCurto < 24.9){
        document.getElementById('resultado').textContent = 'Resultado: ' + seuNome + ' \nseu IMC é cerca de ' + imcCurto + ', significa que está com o peso normal.';
    }

    else if (imcCurto > 25 && imcCurto < 29.9){
        document.getElementById('resultado').textContent = 'Resultado: ' + seuNome + ' \nseu IMC é cerca de ' + imcCurto + ', significa que está com sobrepeso.';
    }
    else{
        alert('valor incorreto!!!');
    }
//saida

    
}

