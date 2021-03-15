var diagnostico = document.querySelector('#diagnostico');
var sectionResultado = document.getElementById('pacientes');
var contadorResultados = document.querySelector('#numeropacientes');
var botonEdad = document.getElementById('botonEdad');
var superBoton = document.getElementById('superboton');
var botonBuscar = document.querySelector('#buscar');

diagnostico.addEventListener('click',selecDiagnostico)

function selecDiagnostico(event){
    let busqueda = event.target.value;
    filtrarXdiagnostico(listaPacientes, busqueda);
}


botonEdad.addEventListener('click', selecEdad)

function selecEdad(event){
    event.preventDefault();
    let edadMinima = document.querySelector('#edadMin').value;
    let edadMax = document.querySelector('#edadMaxima').value;

    filtrarXEdad(listaPacientes, edadMinima, edadMax)
}

superBoton.addEventListener('click', multiSeleccion)

function multiSeleccion(event){
    event.preventDefault();
    let edadMinima = document.querySelector('#edadMin2').value;
    let edadMax = document.querySelector('#edadMaxima2').value;
    let diagnostico = document.querySelector('#diagnostico2').value  

    let filtroMulti = filtrarXdiagnostico (filtrarXEdad(listaPacientes, edadMinima, edadMax), diagnostico);
}

botonBuscar.addEventListener('click', selecBuscador)

function selecBuscador(event){
    let busquedaPaciente = document.querySelector('#pacienteNombre').value;
    
    filtradoNombre(listaPacientes,busquedaPaciente);
    imprimirListaFiltrada(listaFiltrada);
    imprimirContador(listaFiltrada)
}
