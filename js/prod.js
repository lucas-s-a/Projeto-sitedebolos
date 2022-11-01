var lista = []
var valores = []

function limpar(lista,valores){
    var x = lista.length
            
    var y = valores.length
    if (x > 0 || y > 0){
        while (x > 0 ){    
            lista.pop()     
            valores.pop()   
            console.log(x)
            x-=1    
        }      
    }
    else{
        console.log("lista vazia")
    }        
    pfechado.innerHTML=''      
    listaitens.innerHTML=''     
} 
function Orçamento(valores){
    var sum = 0;
    for (var i = 0; i < valores.length; i++) {
        sum += valores[i];
    }
    console.log(sum)
    pfechado.innerHTML=`Total a pagar até o momento é ${sum}`    
}
function pedidofechado(valores){
    var sum = 0;
    for (var i = 0; i < valores.length; i++) {
        sum += valores[i];
    }
    console.log(valores)
    pfechado.innerHTML=`Valor Final da compra é ${sum}`    
}
function exibir(lista,valores){
    console.log(lista)
    console.log(valores)
    listaitens.innerHTML=''
    for(var i = 0; i < lista.length; i++){
        listaitens.innerHTML+=lista[i]+"<br>"
    }   
}
function compreibolo1(){
    var num1 =document.getElementsByClassName("v1")[0].innerText; 
    var y = parseInt(num1)
    lista.push("Bolo de Chocolate e Morango")
    valores.push(y)
    console.log(valores)
    exibir(lista)
    Orçamento(valores)
}                    
function compreibolo2(){
    var num2 =document.getElementsByClassName("v2")[0].innerText; 
    lista.push("Bolo Sabor Coco")
    var y = parseInt(num2)
    valores.push(y)
    console.log(valores)
    exibir(lista)
    Orçamento(valores)   
}
function compreibolo3(){
    lista.push("Bolo Abacaxi com Coco")
    var num1 =document.getElementsByClassName("v3")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    console.log(valores)
    exibir(lista)
    Orçamento(valores)
}
function compreibolo4(){
    lista.push("Bolo Black Cake")
    var num1 =document.getElementsByClassName("v4")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores) 
}
function compreibolo5(){
    lista.push("Bolo Bombom")
    var num1 =document.getElementsByClassName("v5")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)
}
function compreibolo6(){
    lista.push("Bolo Brigadeirão")
    var num1 =document.getElementsByClassName("v6")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)     
}
function compreibolo7(){
    lista.push("Bolo Delícia de Damasco")
    var num1 =document.getElementsByClassName("v7")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                    
}
function compreibolo8(){
    lista.push("Bolo Doce de leite com Coco")
    var num1 =document.getElementsByClassName("v8")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                    
}
function compreibolo9(){
    lista.push("Bolo Morango com Chantilly")
    var num1 =document.getElementsByClassName("v9")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                    
}
function compreibolo10(){
    lista.push("Bolo Nozes")
    var num1 =document.getElementsByClassName("v10")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                    
}
function compreibolo11(){
    lista.push("Bolo Morango Trufado")
    var num1 =document.getElementsByClassName("v11")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                    
}
function compreibolo12(){
    lista.push("Torta Cheese Cake")
    var num1 =document.getElementsByClassName("v12")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                    
}
function compreibolo13(){
    lista.push("Torta Crocante")
    var num1 =document.getElementsByClassName("v13")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                    
}
function compreibolo14(){
    lista.push("Torta KitKat Morango")
    var num1 =document.getElementsByClassName("v14")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                    
}
function compreibolo15(){
    lista.push("Torta Pave Russa")
    var num1 =document.getElementsByClassName("v15")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                    
}
function compreibolo16(){
    lista.push("Torta Prestígio")
    var num1 =document.getElementsByClassName("v16")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                    
}
function compreibolo17(){
    lista.push("Torta Holandesa")
    var num1 =document.getElementsByClassName("v17")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                    
}
function compreibolo18(){
    lista.push("Torta Integral")
    var num1 =document.getElementsByClassName("v18")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                    
}
function compreibolo19(){
    lista.push("Torta Limão")
    var num1 =document.getElementsByClassName("v19")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                   
}
function compreibolo20(){
    lista.push("Torta Mousse Chocolate")
    var num1 =document.getElementsByClassName("v20")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                    
}
function compreibolo21(){
    lista.push("Doces Banofee")
    var num1 =document.getElementsByClassName("v21")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                    
}
function compreibolo22(){
    lista.push("Doces Biscoito Goiaba")
    var num1 =document.getElementsByClassName("v22")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                    
}
function compreibolo23(){
    lista.push("Doces Bomba de Chocolate")
    var num1 =document.getElementsByClassName("v23")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)
}
function compreibolo24(){
    lista.push("Doces Brigadeirão Gourmet")
    var num1 =document.getElementsByClassName("v24")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                    
}
function compreibolo25(){
    lista.push("Minisonho Recheado")
    var num1 =document.getElementsByClassName("v25")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                    
}
function compreibolo26(){
    lista.push("Palha Italiana")
    var num1 =document.getElementsByClassName("v26")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)                    
}
function compreibolo27(){
    lista.push("Petit Gateo")
    var num1 =document.getElementsByClassName("v27")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)
}
function compreibolo28(){
    lista.push("Pudim de Padaria")
    var num1 =document.getElementsByClassName("v28")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)
}
function compreibolo29(){
    lista.push("Mini Quindim")
    var num1 =document.getElementsByClassName("v29")[0].innerText;
    var y = parseInt(num1)
    valores.push(y)
    exibir(lista)
    Orçamento(valores)
}