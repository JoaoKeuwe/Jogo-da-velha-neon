$(function () {
  var vez = 1;
  var vencedor = "";
  function casasiguais(a, b, c) {
    // cria  uma funcao para verificar se as casas  são iguais pra saber se a pessoa ganhoou ou não
    var casaA = $("#casa" + a);
    var casaB = $("#casa" + b);
    var casaC = $("#casa" + c);
    var bgA = $("#casa" + a).css("background-image");
    var bgB = $("#casa" + b).css("background-image");
    var bgC = $("#casa" + c).css("background-image");
    if (bgA == bgB && bgB == bgC && bgA != "none" && bgA != "") {
      // verificação das casas
      if (bgA.indexOf("1.png") >= 0) {
        // estrtura se

        vencedor = "1";
      } else {
        vencedor = "2";
      }
      return true;
    } else {
      return false;
    }
  }
  function verificiarfimDeJogo() {
    if (
      casasiguais(1, 2, 3) ||
      casasiguais(4, 5, 6) ||
      casasiguais(7, 8, 9) || // chama a função casasiguais para atribuir as  linhas na funcaocasaiguais
      casasiguais(1, 4, 7) ||
      casasiguais(2, 5, 8) ||
      casasiguais(1, 2, 3) ||
      casasiguais(3, 6, 9) || // chama a função casasiguais para atribuir ascolunas na funcaocasaiguais
      casasiguais(1, 5, 9) ||
      casasiguais(3, 5, 7)
    ) {
      // chama a função casasiguais para atribuir os  x e o nos orizontais na funcaocasaiguais
      $(".playerWin").show();
      $(".playerWin").html(` <h1> O jogador ${vencedor} Venceu `);
      $(".casa").off("click");
    }
  }

  $(".casa").click(function () {
    var bg = $(this).css("background-image");
    if (bg == "none" || bg == "") {
      var fig = "url(" + vez.toString() + ".png)";
      $(this).css("background", fig);
      vez = vez == 1 ? 2 : 1;
      verificiarfimDeJogo();
    }
  });
});
