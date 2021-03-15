
function filtrarXdiagnostico(pListaPacientes, pDiagnostico) {
    let listaFiltrada = pListaPacientes.filter(paciente =>
        paciente.diagnostico == pDiagnostico)
    imprimirListaFiltrada(listaFiltrada);
    imprimirContador(listaFiltrada)
    return listaFiltrada;
}

function filtrarXEdad(pListaPacientes, pEdadMinima, pEdadMaxima) {
    let listaFiltrada = pListaPacientes.filter(paciente =>
        paciente.edad >= pEdadMinima && paciente.edad <= pEdadMaxima)

    imprimirListaFiltrada(listaFiltrada);
    imprimirContador(listaFiltrada)
    return listaFiltrada;
}

function filtradoNombre(pListaPacientes, pLetra) {
 
    listaFiltrada = pListaPacientes.filter(paciente => {
        let nombre = paciente.nombre.toLowerCase();
        let busqueda = pLetra.toLowerCase();

        console.log(nombre.includes(busqueda))
        return nombre.includes(busqueda);
    })

    return listaFiltrada

}

function imprimirListaFiltrada(pListaFiltrada) {
    sectionResultado.innerHTML = '';

    for (clave of pListaFiltrada) {

        let article = document.createElement('article');
        let h3NomApellido = document.createElement('h3');
        let ul = document.createElement('ul');
        let liEdad = document.createElement('li');
        let liNumero = document.createElement('li');
        let divDiagnostico = document.createElement('div');

        let contenidoNomApe = document.createTextNode(clave.nombre + ' ' + clave.apellido);
        let contenidoEdad = document.createTextNode(clave.edad + ' años');
        let contenidoNumero = document.createTextNode('Número SS: ' + clave.numeroSS);
        let contenidoDiagnostico = document.createTextNode(clave.diagnostico);

        liEdad.appendChild(contenidoEdad);
        liNumero.appendChild(contenidoNumero);
        ul.appendChild(liEdad)
        ul.appendChild(liNumero);

        h3NomApellido.appendChild(contenidoNomApe);
        divDiagnostico.appendChild(contenidoDiagnostico);

        article.appendChild(h3NomApellido);
        article.appendChild(ul);
        article.appendChild(divDiagnostico);
        sectionResultado.appendChild(article);
    }
}

function imprimirContador(pListaFiltrada) {
    contadorResultados.innerHTML = pListaFiltrada.length

    if (pListaFiltrada.length <= 0) {
        sectionResultado.innerHTML = '';
        let fail = document.createElement('h3');
        let contenifoFail = document.createTextNode('No hay resultados para tu busqueda');

        fail.appendChild(contenifoFail);
        sectionResultado.appendChild(fail);
    }
}
