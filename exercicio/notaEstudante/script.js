var txnome = document.querySelector('input#txtnome')
var txn1 = document.querySelector('input#txtn1')
var txn2 = document.querySelector('input#txtn2')
var res = document.querySelector('div#resmedia')
var l01 = document.getElementById('lest')
var rel = []
var c = 0

function media() {
    var tnome = txnome.value
    let tn1 = txn1.value
    let tn2 = txn2.value
    if (tnome.length == 0) {
        alert('O campo NOME precisa ser preenchido')
    } else {
        let n1 = Number(tn1)
        let n2 = Number(tn2)
        l01.innerHTML = ''
        var media = ((n1 + n2)/2).toFixed(1)
        var r = media >= 6?'Aprovado':'Reprovado'
        res.innerHTML = `A média de ${tnome} é ${media}: ${r}`
        rel.push(`A média de ${tnome} é ${media}: ${r}`)
     }
}
    
function listar() {
    var item = document.createElement('option')
    item.text =`${rel[c]}`
    item.value = `l01.${c}`
    l01.appendChild(item)
    c++
    res.innerHTML =''
}
