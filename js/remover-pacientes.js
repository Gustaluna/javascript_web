let pacientes = document.querySelectorAll(".paciente")

let tabela = document.querySelector("table")

tabela.addEventListener("dblclick", (event) => {
    let alvoEvento = event.target
    let paiDoAlvo = alvoEvento.parentNode
    paiDoAlvo.remove()
})

/*pacientes.forEach((paciente) =>{
    paciente.addEventListener("dblclick", () => {
        this.remove()
    })
})*/