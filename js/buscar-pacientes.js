let botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", () =>{
    

    let xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener("load", () =>{
       let resposta = xhr.reponseText
       let pacientes = JSON.parse(resposta)

       pacientes.forEach((paciente) =>{
            adicionaPacienteNaTabela(paciente)
       })
        
    });

    xhr.send()
})