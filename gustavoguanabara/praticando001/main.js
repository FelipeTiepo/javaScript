function carregar(){
var conteudo__pergunta1__texto = window.document.getElementById('conteudo__pergunta1__texto');
var conteudo__pergunta2__imagem = window.document.getElementById('conteudo__pergunta2__imagem');
var data = new Date();
var hora = data.getHours();

conteudo__pergunta1__texto.innerHTML = `Agora são ${hora} horas.`;
if(hora >= 0 && hora < 12) {
    //BOM DIA
    conteudo__pergunta2__imagem.src = 'imagens/manha.png';
    document.body.style.background = '#e2ab84';
} else if(hora >= 12 && hora < 18) {
    //BOA TARDE
    conteudo__pergunta2__imagem.src = 'imagens/tarde.png';
    document.body.style.background = '#8272a2';
} else{
    //BOA NOITE 
    conteudo__pergunta2__imagem.src = 'imagens/noite.png';
    document.body.style.background = '#000912';
}
}