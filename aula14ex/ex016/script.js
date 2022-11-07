
function contar() {
    let inicio = window.document.getElementById('txtinicio')
    let fim = window.document.getElementById('txtfim')
    let passo = window.document.getElementById('txtpasso')
    let res = window.document.getElementById('res')


if (inicio.valeu.length == 0 || fim.valeu.length == 0 || passo.valeu.length == 0) {
    window.alert(`[ERRO] Faltam Dados`)
} else {
    if (passo == 0) {
        window.alert(`Passo Inválido! Considerado Passo 1`)
    }
}
  
}