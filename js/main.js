
let mob = true;
let pc = false;


function formatTable(btn) {

    if (btn.innerHTML == 'Mobile') {
        mob = true;
        pc = false;
    }
    else {
        pc = true;
        mob = false;
    }
    document.getElementById('tblInfo').innerHTML = (mob) ? 'Mobile' : 'Emulador';

    for (let x = 1; x <= 5; x++){
        tbl1(
            document.getElementById(`q${x}`).value,
            document.getElementById(`a${x}`).value,
            document.getElementById(`p${x}`)
        )
    }
}


function final() {

    let p1 = (document.getElementById('p1').innerHTML == '') ? 0 : parseInt(document.getElementById('p1').innerHTML);
    let p2 = (document.getElementById('p2').innerHTML == '') ? 0 : parseInt(document.getElementById('p2').innerHTML);
    let p3 = (document.getElementById('p3').innerHTML == '') ? 0 : parseInt(document.getElementById('p3').innerHTML);
    let p4 = (document.getElementById('p4').innerHTML == '') ? 0 : parseInt(document.getElementById('p4').innerHTML);
    let p5 = (document.getElementById('p5').innerHTML == '') ? 0 : parseInt(document.getElementById('p5').innerHTML);

    let soma = p1 + p2 + p3 + p4 + p5;
    document.getElementById('soma').innerHTML = soma;
}
function tbl1(posicao, abates, pontos) {
    const pFormat = (posicao == '') ? 0 : parseInt(posicao);
    const aFormat = (abates == '') ? 0 : parseInt(abates);

    if (mob) {
        if (pFormat == 1) {
            pontos.innerHTML = 12 + aFormat;
        }
        else if (pFormat >= 2 && pFormat <= 10) {
            pontos.innerHTML = (11 - pFormat) + aFormat;
        }
        else if (pFormat == 12 || pFormat == 11) {
            pontos.innerHTML = aFormat;
        }
        else if (pFormat == 0 || pFormat > 12) {
            pontos.innerHTML = aFormat;
        }
    }
    else {
        
        if (pFormat == 1) {
            pontos.innerHTML = 20 + (aFormat * 2);
        }
        else if (pFormat >= 2) {
            pontos.innerHTML = 14  + (aFormat * 2);
        }
        else if (pFormat == 3) {
            pontos.innerHTML = 10 + (aFormat * 2);
        }
        else if (pFormat >= 4 && pFormat >= 11) {
            pontos.innerHTML = (12 - pFormat) + (aFormat * 2);
        }
        else if (pFormat >= 12) {
            pontos.innerHTML = aFormat * 2;
        }

    }
    final();
}