function contar(){
    var num = Number(document.getElementById('numero').value)
    var tab = document.getElementById('tabuada')

    if (num <=0 || isNaN(num)) {
        //tab.innerHTML = `ERRO! DIGITE UM NÚMERO VÁLIDO`
        window.alert('erro')
        return;
    }

    tab.innerHTML= ' '

    for (C = 1; C <= 10; C++){
        var item = document.createElement('option')
        item.text += `${num} x ${C} = ${num*C}`
        item.value = `tab${C}`
        tab.appendChild(item)

    }





}