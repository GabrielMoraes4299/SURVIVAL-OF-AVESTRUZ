function executarJogo(){
    fundo.mova();
    player.mova();
    cacto.mova();
    conta ++
    if (conta == 30) {
        pontos ++
        conta = 0
    }
    if(player.xInicial < cacto.xFinal &&
        player.xFinal > cacto.xInicial &&
        player.yInicial < cacto.yFinal &&
        player.yFinal > cacto.yInicial){
        
        pontos = 0;
        cacto = new Obstaculo();
    }
    textSize(20);
    text('Pontos :' + pontos, 500, 50);
}