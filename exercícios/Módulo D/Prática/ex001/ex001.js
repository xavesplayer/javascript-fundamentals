function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
        img.src = '../../../../img/manha.jpg'
        document.body.style.background = '#e2cd9f'
    }
    else if (hora > 12 && hora <= 18){
        msg.innerHTML = `Agora são ${hora} horas. Boa Tarde!`
        img.src = '../../../../img/tardezinha.jpg'
        document.body.style.background = '#b9846f'
    }
    else{
        msg.innerHTML = `Agora são ${hora} horas. Boa Noite!`
        img.src = '../../../../img/noite.jpg'
        document.body.style.background = '#515154'
    }
}