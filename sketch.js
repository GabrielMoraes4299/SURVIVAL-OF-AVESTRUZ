//variável que cria o obstáculo "cacto"
var cacto;
//variável que cria o jogador
var player;
//variável que armazena o fundo do jogo
var fundo;
//variável que armazena o status do player
var status_player = "CHAO";
//variável que armazena o status do jogo
var status_jogo = "INICIO";
//variável que armazena os pontos do jogo
var pontos = 0;

//função que carrega as varíaveis com suas determinadas classes
function preload() {
  player = new Player();
  fundo = new Fundo();
  cacto = new Obstaculo();
}

//função que prepara o espaço que acontecerá o jogo
function setup() {
  createCanvas(800, 600).parent("jogo");
}

//função que define o que acontecerá se alguma tecla(específica ou não) for pressionada
function keyPressed(){
  if (keyCode == 32) {
    status_player = "PULO";
  }
}

function mousePressed(){
  status_player = "PULO";
}

//função que desenha o jogo
function draw() {

  if (status_jogo == "INICIO") {
    executarJogo();
  }

}