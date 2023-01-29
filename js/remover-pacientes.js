let pacientes = document.querySelectorAll(".paciente")

let tabela = document.querySelector("table")

tabela.addEventListener("dblclick", (event) => {
   event.target.parentNode.remove()
})

/*pacientes.forEach((paciente) =>{
    paciente.addEventListener("dblclick", () => {
        this.remove()
    })
})*/