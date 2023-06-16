function executarJogo(){
    fundo.mova();
    player.mova();
    cacto.mova();
    player.vida = 1;
    if(player.xInicial < cacto.xFinal &&
        player.xFinal > cacto.xInicial &&
        player.yInicial < cacto.yFinal &&
        player.yFinal > cacto.yInicial){
        
        player.vida = 0;
        cacto = new Obstaculo();
    }
    textSize(20);
    text('Pontos :' + pontos, 500, 50);
}