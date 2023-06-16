
class Player{
    constructor(){
      this.imagem = loadImage('./IMG_JOGO/avestruz.gif');
      this.largura = 109;
      this.altura = 116;
      this.vel = 6;
      this.posX = 18;
      this.posY = 377;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
    mova(){
      image(this.imagem, this.posX,this.posY,this.largura,this.altura);

      if ((status_player == "PULO") && (player.posY > 200)) {
        player.posY -= player.vel;
      }
      if(player.posY < 210){
        status_player = "CHAO";
      }
      if((status_player == "CHAO") && (player.posY < 377)){
        player.posY += player.vel; 
      }


      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }      