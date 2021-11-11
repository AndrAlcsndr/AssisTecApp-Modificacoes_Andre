function calc() {

  var n1 = parseFloat(document.getElementById('Quantidade').value);
  var n2 = parseFloat(document.getElementById('Valor').value);

  const round = (num, places) => {
    if (!("" + num).includes("e")) {
      return +(Math.round(num + "e+" + places) + "e-" + places);
    } else {
      let arr = ("" + num).split("e");
      let sig = ""
      if (+arr[1] + places > 0) {
        sig = "+";
      }

      return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + places)) + "e-" + places);
    }
  }

  var result = eval(n1 * n2);
  var x = round(result, 2)
  let dinheiro = convertCurrency(x);
  document.getElementById('Total').value = dinheiro;

}

function limpar() {
  document.getElementById('Total').value = "";

}

function convertCurrency (e)
{


  if (e) {
    let dinheiro = e.toLocaleString ("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
    return dinheiro;

  } else {
    var valor = parseFloat(document.getElementById('Valor').value);
    valor = valor.toLocaleString ("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
    document.getElementById('Valor').value = valor;

  }



}
