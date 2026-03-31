

let nomeCliente = "Vinicios Henrique";
let tipoCliente = "premium";

let nomeProduto = "Teclado Mecânico";
let precoProduto = 180.00;
let estoque = 10
let quantidadePedido = 5;

let estoqueOK = quantidadePedido <= estoque;

if (!estoqueOK) {
    console.log("Pedido RECUSADO - estoque insuficiente")
}