let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let paciente = document.querySelector("#primeiro-paciente");

let tdPeso = paciente.querySelector(".info-peso");
let peso = tdPeso.textContent;

let tdAltura = paciente.querySelector(".info-altura");
let altura = tdAltura.textContent;

let tdImc = paciente.querySelector(".info-imc");

let pesoValido = true;
let alturaValida = true;

if (peso < 0 || peso > 1000){
    console.log("Peso inválido")
    pesoValido = false;
    tdImc.textContent = "Peso inválido!"
}

if (altura < 0 || peso > 3){
    console.log("Altura inválida")
    alturaValida = false;
    tdImc.textContent = "Altura inválida!"
}

if (alturaValida && pesoValido){
    let imc = peso / (altura * altura);
    tdImc.textContent = imc;
}