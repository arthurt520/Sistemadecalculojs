function calcular(){
    var num1 = window.document.getElementById('num1')
    var num2 = window.document.getElementById('num2')
    var res = document.getElementById("res")
    var sinal = document.getElementById("sinal")
    var n1 = Number(num1.value)
    var n2 = Number (num2.value)
   

    
    if(sinal.value=="+"){ 
        s = n1 + n2
        res.innerHTML='A soma entre ' + n1 + " e " + n2 + " é igual a " + s

     }
     else if(sinal.value=="-"){
        s = n1 - n2
        res.innerHTML='A subtração entre ' + n1 + " e " + n2 + " é igual a " + s
     }
     else if(sinal.value=="*"){
        s = n1 * n2
        res.innerHTML='A multiplicação entre ' + n1 + " e " + n2 + " é igual a " + s
     }
     else if(sinal.value=="/"){
        s = n1 / n2
        res.innerHTML='A divisão entre ' + n1 + " e " + n2 + " é igual a " + s
     }

    else{
        res.innerHTML="Insira o sinal da operação"
    }

}