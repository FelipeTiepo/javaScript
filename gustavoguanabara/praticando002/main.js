function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('idade');
    var conteudo__pergunta2 = document.getElementById('conteudo__pergunta2');

    if(fAno.value.length == 0 || fAno.value.length > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    } else{
        var sexo = document.getElementsByName('sexo');
        var idade = ano - Number(fAno.value);
        var gênero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            gênero = 'homem';
            if(idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'imagens/bebe-homem.png')
            }else if(idade < 21){
            //Jovem
            img.setAttribute('src', 'imagens/jovem-garoto.png')
            }else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'imagens/homem.png')
            }else{
            //Idoso
            img.setAttribute('src', 'imagens/idoso.png')
            }

        } else if(sexo[1].checked){
            gênero = 'mulher'
            if(idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'imagens/bebe-mulher.png')
            }else if(idade < 21){
            //Jovem
            img.setAttribute('src', 'imagens/jovem-garota.png')
            }else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'imagens/mulher.png')
            }else{
            //Idoso
            img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        conteudo__pergunta2.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
        conteudo__pergunta2.appendChild(img)
        img.style.borderRadius('50px')
    }

};