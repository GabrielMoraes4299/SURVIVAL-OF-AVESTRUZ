class Obstaculo{
    constructor(){
      this.imagem = loadImage('./IMG_JOGO/cacto.png');
      this.largura = 71;
      this.altura = 90;
      this.vel = 9;
      this.posX = 800;
      this.posY = 416;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
    mova(){
      image(this.imagem, this.posX,this.posY,this.largura,this.altura);
      if(cacto.posX > -71){
        this.posX -= this.vel; 
      }
      else{
        cacto = new Obstaculo();
      }
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }