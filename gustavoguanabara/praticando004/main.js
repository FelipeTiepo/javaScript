function tabuada(){
    var numero = document.getElementById('txtn');
    var tabuada = document.getElementById('seltab');

    if(numero.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else{
        var n = Number(numero.value)
        var c = 1;
        tabuada.innerHTML = ''; 

        while(c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`;
            item.value = `tabuada${c}`
            tabuada.appendChild(item)
            c++
        }
    }


}