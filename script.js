let boxes = document.querySelectorAll(".box");
let jogadorX = document.querySelector(".jogador-x");
let jogadorO = document.querySelector(".jogador-o");

let jogador = ['X', 'O'];
let contadorJogadas = 0;
let terminou = false;
//=========================

function registraJogada(box){
    box.innerText = jogador[0];
    box.classList.add("box-marcado");    
    contadorJogadas++;    
}

function trocaJogador(){
    jogador.reverse();

    if(!terminou){
        jogadorX.classList.toggle("jogador-vez");
        jogadorO.classList.toggle("jogador-vez");
    }    
}

function reiniciar(){
    contadorJogadas = 0;
    terminou = false;
    jogador = ['X', 'O'];
    jogadorX.classList.add("jogador-vez");
    jogadorO.classList.remove("jogador-vez");

    boxes.forEach(box => {
        box.innerText = "";
        box.removeAttribute("style");
        box.classList.remove("box-marcado");
    });
}

function verificaSeGanhou(){
    comparaBoxes(boxes[0], boxes[1], boxes[2]);
    comparaBoxes(boxes[3], boxes[4], boxes[5]);
    comparaBoxes(boxes[6], boxes[7], boxes[8]);
    comparaBoxes(boxes[0], boxes[3], boxes[6]);
    comparaBoxes(boxes[1], boxes[4], boxes[7]);
    comparaBoxes(boxes[2], boxes[5], boxes[8]);
    comparaBoxes(boxes[0], boxes[4], boxes[8]);
    comparaBoxes(boxes[2], boxes[4], boxes[6]);
}

function comparaBoxes(b1, b2, b3){
    if(b1.innerText != "" && b1.innerText == b2.innerText && b2.innerText == b3.innerText){
        b1.style.backgroundColor = "green";
        b2.style.backgroundColor = "green";
        b3.style.backgroundColor = "green";
        terminou = true;
    }
}

boxes.forEach(box => {
    box.addEventListener("click", (e)=>{
        if(!terminou && e.target.innerText == ""){
            registraJogada(e.target);
            verificaSeGanhou();
            trocaJogador();
            if(contadorJogadas == 9){
                terminou = true;
            }
        }

    });
});