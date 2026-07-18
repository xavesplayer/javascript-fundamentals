function contar() {
    let txti = document.getElementById('txti').value
    let txtf = document.getElementById('txtf').value
    let txtp = document.getElementById('txtp').value
    let res = document.getElementById('res')
    let final = document.getElementById('final')

    if (txti.length == 0 || txtf.length == 0) {
        window.alert('Faltam dados!')
        res.innerHTML = 'Impossível contar!'
        return
    }

    let ini = Number(txti)
    let fim = Number(txtf)
    let passo = Number(txtp)

    if (passo <= 0) {
        window.alert('Passo inválido! Usando passo 1')
        passo = 1
    }

    if (ini <= fim) {
        for (let c = ini; c <= fim; c += passo) {
            res.innerHTML += `👉 ${c} | `
        }

    //contagem regressiva
    } else {
        for (let c = ini; c >= fim; c -= passo) {
            res.innerHTML += `👉 ${c} | `
        }
    }

    final.innerHTML = 'Fim 🏁'
}
