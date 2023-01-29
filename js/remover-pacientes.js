let pacientes = document.querySelectorAll(".paciente")

pacientes.forEach((paciente) =>{
    paciente.addEventListener("dbclick", () => {
        this.remove()
    })
})