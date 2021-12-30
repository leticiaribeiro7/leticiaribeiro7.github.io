
//variáveis da trilha sonora
let chute;
let ponto;
let trilha;


function preload() {
  ponto = loadSound("assets/ponto.mp3");
  chute = loadSound("assets/chute.mp3");
  trilha = loadSound("assets/trilha.mp3");
  
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function campo() {
  background(23, 165, 18);
  stroke(255, 255, 255);
  strokeWeight(2);
  
  //borda
  fill(color(23, 165, 18));
  rect(15, 15, 570, 370);
  
  //grande area esquerda
  circle(100, 200, 100);
  rect(15, 85, 110, 230);
  
  //grande area direita
  circle(500, 200, 100);
  rect(475, 85, 110, 230);
  
  //pequena area esquerda
  rect(15, 120, 50, 160);
  
  //pequena area direita
  rect(535, 120, 50, 160);
  
  //area central
  circle(300, 200, 100);
  
  //linha do meio
  rect(300, 15, 1, 370);
  
  //area do gol
  rect(10, 175, 5, 50);
  rect(585, 175, 5, 50);
  
  //escanteios
  noFill();
  arc(585, 15, 20, 20, PI/2, PI);
  arc(15, 15, 20, 20, 0, PI/2);
  arc(585, 385, 20, 20, PI, 3*PI/2);
  arc(15, 385, 20, 20, 3*PI/2, 2*PI);
  
  //meio e marca de penalti
  fill(255);
  circle(300, 200, 4);
  circle(100, 200, 4);
  circle(500, 200, 4);

}

function draw() {
  campo();
  mostraBola();
  mostraJogadores();
  movimentaJogadores();
  movimentaBola();
  verificaColisaoBorda();

  for (let i = 0; i < xTimePurple.length; i++) {
    verificaColisaoJogador(xTimePurple[i], yTimePurple);
    verificaColisaoJogador(xTimeBlue[i], yTimeBlue);
  }

  mostraGol(xGol_1, yGol);
  mostraGol(xGol_2, yGol);
  marcaGol();
  mostraPlacar();
}

