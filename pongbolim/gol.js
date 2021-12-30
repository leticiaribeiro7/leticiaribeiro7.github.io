let xGol_1 = 2;
let xGol_2 = 597;

//variáveis que servem para os 2 gols
let yGol = 150;
let GolLargura = 1;
let GolAltura = 100;

//pontuações
let golTimePurple = 0;
let golTimeBlue = 0;


function mostraGol(x, y) {
  fill(255, 255, 255);
  rect(x, y, GolLargura, GolAltura);
}

function marcaGol() {
  if (yBola >= 150 && yBola <= 250) {
    if(xBola < 10) {
      golTimeBlue++;
      xBola = 300;
      yBola = 200;
      ponto.play();
    }

    if(xBola > 590) {
      golTimePurple++;
      xBola = 300;
      yBola = 200;
      ponto.play();
    }
  } 
}

function mostraPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  
  fill(color(106,90,205));
  rect(130, 20, 40, 20);
  
  fill(255);
  text(golTimePurple, 150, 36);
  
  fill(color(0,191,255));
  rect(430, 20, 40, 20);
  
  fill(255);
  text(golTimeBlue, 450, 36);
  
}