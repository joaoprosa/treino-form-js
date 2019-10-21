let caixatexto = document.getElementById('caixa')
let tela = document.querySelector('.titulo')

function send(event){
    
    event.preventDefault() 

    tela.innerHTML = "Hoje eu vou para "+caixatexto.value+" e você?"
}