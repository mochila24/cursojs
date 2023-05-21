function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Erro! Ano inválido!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade: ${idade}`
        var gênero = ''
        var img = document.createElement('img') //como se tivesse criado um elemento imagem
        img.setAttribute('id','foto') //criou um id='foto' para img.
        if (fsex[0].checked) { //se o 1º fsex estiver marcado (checked)
            gênero = 'Homem'
            if (idade >= 0 && idade <=12){
                //criança
                img.setAttribute('src','menino.png') // a foto tem que tá dentro da mesma pasta
            } else if (idade <= 18) {
                //adolescênte
                img.setAttribute('src','adolescente.png')
            } else if (idade <65) {
                //adulto
                img.setAttribute('src','adulto.png')
            } else {
                //idoso
                img.setAttribute('src','idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <=12){
                //criança
                img.setAttribute('src','menina.png')
            } else if (idade <= 18) {
                //adolescênte
                img.setAttribute('src','adolescenta.png')
            } else if (idade <65) {
                //adulto
                img.setAttribute('src','adulta.png')
            } else {
                //idoso
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //faz aparecer a foto.
    }


}