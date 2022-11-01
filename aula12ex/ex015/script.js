function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotocriança-m.png')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotojovem-m.png')
            } else if  (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotoadulto-m.png')
            } else if (idade >= 50) {
                //idoso
                img.setAttribute('src', 'fotoidoso-m.png')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotocriança-f.png')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotojovem-f.png')
            } else if  (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotoadulto-f.png')
            } else if (idade >= 50) {
                //idoso
                img.setAttribute('src', 'fotoidoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}