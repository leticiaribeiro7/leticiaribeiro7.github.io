
let xTimePurple = [100, 400];  // 0-atacante, 1-zagueiro
let yTimePurple = 100;

let xTimeBlue = [200, 500];  //0-zagueiro, 1-atacante
let yTimeBlue = 200;

let jogadoresAltura = 70;
let jogadoresLargura = 10;


let totalJogadores = xTimePurple.length + xTimeBlue.length;
let colidiu = false;


function mostraJogadores() {
  for (let i = 0; i < xTimePurple.length; i++) {
    fill(color(106,90,205)); //purple
    rect(xTimePurple[i], yTimePurple, jogadoresLargura, jogadoresAltura);

    fill(color(0,191,255)); //blue
    rect(xTimeBlue[i], yTimeBlue, jogadoresLargura, jogadoresAltura);
  }
}


function movimentaJogadores() {
  if (keyIsDown(UP_ARROW)) {
      yTimePurple -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
      yTimePurple += 10;
  }
  if (keyIsDown(87)) { //87- keycode for "w"
      yTimeBlue -= 10;
  }
  if (keyIsDown(83)) { //83- keycode for "s"
      yTimeBlue += 10;
  }
}


function verificaColisaoJogador(x, y) {
  colidiu = collideRectCircle(x, y, jogadoresLargura, jogadoresAltura, xBola, yBola, raio);
  if(colidiu) {
    velocidadeXBola *= -1;
    chute.play();
  }
}