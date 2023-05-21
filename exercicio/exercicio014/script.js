function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('imagem')
    var data = new  Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'bomdia.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        //Boa tarde!
        img.src = 'boatarde.png'
        document.body.style.background = '#b9846f'
    }else {
        //Boa noite!
        img.src = 'boanoite.png'
        document.body.style.background = 'black'
    }
}