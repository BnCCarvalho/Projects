//código do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  keyIsDown(UP_ARROW) ? (yAtor -= 3) : "";
  keyIsDown(DOWN_ARROW) ? (podeSeMoverY() ? (yAtor += 3) : "") : "";

  keyIsDown(LEFT_ARROW) ? (podeSeMoverXE() ? (xAtor -= 3) : "") : "";
  keyIsDown(RIGHT_ARROW) ? (podeSeMoverXD() ? (xAtor += 3) : "") : "";
}

function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xAtor,
      yAtor,
      15
    );
    if (colisao) {
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial() {
  yAtor = 366;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);
}

function marcaPonto() {
  if (yAtor < 15) {
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeSeMoverY() {
  return yAtor < 366;
}

function podeSeMoverXD() {
  return xAtor < 465;
}

function podeSeMoverXE() {
  return xAtor > 2;
}
