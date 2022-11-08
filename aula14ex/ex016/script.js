
function contar() {
    let inicio = window.document.getElementById('txtinicio')
    let fim = window.document.getElementById('txtfim')
    let passo = window.document.getElementById('txtpasso')
    let res = window.document.getElementById('res')


if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = `Impossível contar!`
    window.alert(`[ERRO] Faltam Dados!`)    
} else {
    res.innerHTML = `Contando: <br>`

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p <= 0) {
        window.alert(`Passo Inválido! Considerarando Passo 1!`)
        p = 1
    }

    if (i < f) {
        //CONTAGEM CRESCENTE
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${ c } \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    } else {
        //CONTAGEM REGRESSIVA
        for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${ c } \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}` 
    }
           
    }
}
  
