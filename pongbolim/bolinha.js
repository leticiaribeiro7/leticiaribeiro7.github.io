let xBola = 300;
let yBola = 200;
let diametro = 15;
let raio = diametro/2
let velocidadeXBola = 6;
let velocidadeYBola = 6;


function mostraBola() {
  circle(xBola, yBola, diametro);
}

function movimentaBola() {
  xBola += velocidadeXBola;
  yBola += velocidadeYBola;
}


function verificaColisaoBorda() {
  if (xBola + raio > width || xBola - raio < 0) {
      velocidadeXBola *= -1;
  }
  if (yBola + raio > height || yBola - raio < 0) {
      velocidadeYBola *= -1;
  }
}

