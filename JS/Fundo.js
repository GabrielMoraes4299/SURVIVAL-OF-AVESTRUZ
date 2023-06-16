class Fundo{
    constructor(){
      this.imagem = loadImage('./IMG_JOGO/bg_jogo.png');
      this.largura = 1600;
      this.altura = 600;
      this.vel = 9;
      this.posX = 0;
      this.posY = 0;
    }
    mova(){
      image(this.imagem, this.posX,this.posY,this.largura,this.altura);
      if(fundo.posX > -800){
        this.posX -= this.vel; 
      }
      else{
        this.posX = -3;
      }
  }
  }