class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    const erro = this.retornaErros(itens);

    if (erro != "") {
      return erro;
    }

    let valor = this.retornaValor(itens);
    let valorInt = Number(valor);
    if (valor > 0) {
      switch (metodoDePagamento) {
        case "dinheiro":
          let desconto = valor * 0.05;
          desconto = desconto.toString();
          desconto = desconto.substring(0, 4);
          valor -= desconto;
          break;
        case "credito":
          valorInt += valorInt * 0.03;
          valorInt = parseFloat(valorInt).toFixed(2);
          valor = valorInt;
          break;
        case "debito":
          break;
        default:
          return "Forma de pagamento inválida!";
      }
    } else {
      return "Item inválido!";
    }
    const valorString = String(valor).replace(".", ",");
    return "R$ " + valorString;
  }

  retornaValor(itens) {
    let valor = 0;
    itens.forEach((item) => {
      let indexVirgula = item.indexOf(",");
      let itemNome = item.substring(0, indexVirgula);
      let qtdItem = Number(item.substring(indexVirgula + 1));
      switch (itemNome) {
        case "cafe":
          valor += qtdItem * 3;
          break;
        case "chantily":
          valor += qtdItem * 1.5;
          break;
        case "suco":
          valor += qtdItem * 6.2;
          break;
        case "sanduiche":
          valor += qtdItem * 6.5;
          break;
        case "queijo":
          valor += qtdItem * 2;
          break;
        case "salgado":
          valor += qtdItem * 7.25;
          break;
        case "combo1":
          valor += qtdItem * 9.5;
          break;
        case "combo2":
          valor += qtdItem * 7.5;
        default:
          valor += 0;
      }
    });
    return valor.toFixed(2);
  }

  retornaErros(itens) {
    if (itens.length == 0) {
      return "Não há itens no carrinho de compra!";
    }
    itens = itens.toString();

    if (
      (itens.includes("chantily") && !itens.includes("cafe")) ||
      (itens.includes("queijo") && !itens.includes("sanduiche"))
    ) {
      return "Item extra não pode ser pedido sem o principal";
    }
    if (itens.includes("0")) {
      return "Quantidade inválida!";
    }
    return "";
  }
}
export { CaixaDaLanchonete };
