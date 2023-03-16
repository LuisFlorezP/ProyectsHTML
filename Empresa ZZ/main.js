const inicioSesion = document.querySelector('#inicioSesion');
const salir = document.querySelector('#salir');
const portatil = document.querySelector('#portatil');
const cliente = document.querySelector('#cliente');
const celular = document.querySelector('#celular');
const guardarPl = document.querySelector('#guardarPl');
const guardarCr = document.querySelector('#guardarCr');
const guardarCe = document.querySelector('#guardarCe');

const acceso = () => {
    const nombre = document.querySelector('#nombre');
    const contra = document.querySelector('#contra');
    const validar = document.querySelector('#validar');

    if ((nombre.value == 'Luis' && contra.value == '2004')) {
        const inicio = document.querySelector('#ranuraLogin');

        inicio.classList.add('ocultar');

        nombre.value = '';
        contra.value = '';
        validar.textContent = '';
    } else if (nombre.value == '' && contra.value == '') {
        validar.textContent = '';
    } else {
        validar.textContent = 'USUARIO O CONTRASEÑA INCORRECTA';
    }
}

const salida = () => {
    const inicio = document.querySelector('#ranuraLogin');
    const inicial = document.querySelector('#inicial');
    const formPortatil = document.querySelector('#formPortatil');
    const formCelular = document.querySelector('#formCelular');
    const formCliente = document.querySelector('#formCliente');

    inicio.classList.remove('ocultar');
    inicial.classList.remove('ocultar');
    formPortatil.classList.remove('ocultar');
    formCliente.classList.remove('ocultar');
    formCelular.classList.remove('ocultar');
}

const menuPortatil = () => {
    const inicial = document.querySelector('#inicial');
    const formPortatil = document.querySelector('#formPortatil');
    const cartaP = document.querySelector('#cartaP');
    const cartaC = document.querySelector('#cartaC');

    inicial.classList.add('ocultar');
    formPortatil.classList.remove('ocultar');

    cartaP.classList.add('ocultar');
    cartaC.classList.add('ocultar');
}

const menuCelular = () => {
    const inicial = document.querySelector('#inicial');
    const formPortatil = document.querySelector('#formPortatil');
    const formCelular = document.querySelector('#formCelular');
    const cartaP = document.querySelector('#cartaP');
    const cartaC = document.querySelector('#cartaC');

    inicial.classList.add('ocultar');
    formPortatil.classList.add('ocultar');
    formCelular.classList.remove('ocultar');

    cartaP.classList.add('ocultar');
    cartaC.classList.add('ocultar');
}

const menuCliente = () => {
    const inicial = document.querySelector('#inicial');
    const formPortatil = document.querySelector('#formPortatil');
    const formCelular = document.querySelector('#formCelular');
    const formCliente = document.querySelector('#formCliente');
    const cartaP = document.querySelector('#cartaP');
    const cartaC = document.querySelector('#cartaC');

    inicial.classList.add('ocultar');
    formPortatil.classList.add('ocultar');
    formCelular.classList.add('ocultar');
    formCliente.classList.remove('ocultar');

    cartaP.classList.add('ocultar');
    cartaC.classList.add('ocultar');
}

const cartaPl = () => {
    const cartaP = document.querySelector('#cartaP');
    const formPortatil = document.querySelector('#formPortatil');
    const formCelular = document.querySelector('#formCelular');
    const formCliente = document.querySelector('#formCliente');

    const nombrePl = document.querySelector('#nombrePl');
    const referenciaPl = document.querySelector('#referenciaPl');
    const codigoPl = document.querySelector('#codigoPl');
    const valorPl = document.querySelector('#valorPl');
    const cantidadPl = document.querySelector('#cantidadPl');
    const imagenPl = document.querySelector('#imagenPl');

    if ((codigoPl.value != '') && (nombrePl.value != '') && (referenciaPl.value != '') && (valorPl.value != '') && (cantidadPl.value != '') && (imagenPl.value != '')) {
        cartaP.classList.remove('ocultar');
        formPortatil.classList.add('ocultar');
        formCelular.classList.add('ocultar');
        formCliente.classList.add('ocultar');

        const dato1 = document.querySelector('#dato1');
        const dato2 = document.querySelector('#dato2');
        const dato3 = document.querySelector('#dato3');
        const dato4 = document.querySelector('#dato4');
        const dato5 = document.querySelector('#dato5');
        const muestra1 = document.querySelector('#muestra1');

        const imagen = imagenPl.files;
        const ruta = URL.createObjectURL(imagen[0]);

        dato1.innerHTML = '<strong>Cod: </strong>' + codigoPl.value;
        dato2.innerHTML = nombrePl.value;
        dato3.innerHTML = '<strong>REF: </strong>' + referenciaPl.value;
        dato4.innerHTML = '<strong>Precio: </strong>$ ' + valorPl.value;
        dato5.innerHTML = '<strong>Cantidad: ' + cantidadPl.value;
        muestra1.src = ruta;

        codigoPl.value = '';
        nombrePl.value = '';
        referenciaPl.value = '';
        valorPl.value = '';
        cantidadPl.value = '';
        imagenPl.src = '';
    }
}

const cartaCr = () => {
    const cartaP = document.querySelector('#cartaP');
    const formPortatil = document.querySelector('#formPortatil');
    const formCelular = document.querySelector('#formCelular');
    const formCliente = document.querySelector('#formCliente');

    const nombreCr = document.querySelector('#nombreCr');
    const referenciaCr = document.querySelector('#referenciaCr');
    const codigoCr = document.querySelector('#codigoCr');
    const valorCr = document.querySelector('#valorCr');
    const cantidadCr = document.querySelector('#cantidadCr');
    const imagenCr = document.querySelector('#imagenCr');

    if ((codigoCr.value != '') && (nombreCr.value != '') && (referenciaCr.value != '') && (valorCr.value != '') && (cantidadCr.value != '') && (imagenCr.value != '')) {
        cartaP.classList.remove('ocultar');
        formPortatil.classList.add('ocultar');
        formCelular.classList.add('ocultar');
        formCliente.classList.add('ocultar');

        const dato1 = document.querySelector('#dato1');
        const dato2 = document.querySelector('#dato2');
        const dato3 = document.querySelector('#dato3');
        const dato4 = document.querySelector('#dato4');
        const dato5 = document.querySelector('#dato5');
        const muestra1 = document.querySelector('#muestra1');

        const imagen = imagenCr.files;
        const ruta = URL.createObjectURL(imagen[0]);

        dato1.innerHTML = '<strong>Cod: </strong>' + codigoCr.value;
        dato2.innerHTML = nombreCr.value;
        dato3.innerHTML = '<strong>REF: </strong>' + referenciaCr.value;
        dato4.innerHTML = '<strong>Precio: </strong>$ ' + valorCr.value;
        dato5.innerHTML = '<strong>Cantidad: ' + cantidadCr.value;
        muestra1.src = ruta;

        codigoCr.value = '';
        nombreCr.value = '';
        referenciaCr.value = '';
        valorCr.value = '';
        cantidadCr.value = '';
        imagenCr.src = '';
    }
}

const cartaCe = () => {
    const cartaC = document.querySelector('#cartaC');
    const formPortatil = document.querySelector('#formPortatil');
    const formCelular = document.querySelector('#formCelular');
    const formCliente = document.querySelector('#formCliente');

    const nombreCe = document.querySelector('#nombreCe');
    const documentoCe = document.querySelector('#documentoCe');
    const telefonoCe = document.querySelector('#telefonoCe');
    const direccionCe = document.querySelector('#direccionCe');
    const emailCe = document.querySelector('#emailCe');

    if ((documentoCe.value != '') && (nombreCe.value != '') && (telefonoCe.value != '') && (direccionCe.value != '') && (emailCe.value != '')) {
        cartaC.classList.remove('ocultar');
        formPortatil.classList.add('ocultar');
        formCelular.classList.add('ocultar');
        formCliente.classList.add('ocultar');

        const dato6 = document.querySelector('#dato6');
        const dato7 = document.querySelector('#dato7');
        const dato8 = document.querySelector('#dato8');
        const dato9 = document.querySelector('#dato9');
        const dato10 = document.querySelector('#dato10');

        dato6.innerHTML = documentoCe.value;
        dato7.innerHTML = '<strong>Nombre: </strong>' + nombreCe.value;
        dato8.innerHTML = '<strong>Celular: </strong>' + telefonoCe.value;
        dato9.innerHTML = '<strong>Dirección: </strong>' + direccionCe.value;
        dato10.innerHTML = '<strong>Correo: </strong>' + emailCe.value;

        documentoCe.value = '';
        nombreCe.value = '';
        telefonoCe.value = '';
        direccionCe.value = '';
        emailCe.value = '';
    }
}

inicioSesion.addEventListener('click', acceso);
salir.addEventListener('click', salida);
portatil.addEventListener('click', menuPortatil);
celular.addEventListener('click', menuCelular);
cliente.addEventListener('click', menuCliente);
guardarPl.addEventListener('click', cartaPl);
guardarCr.addEventListener('click', cartaCr);
guardarCe.addEventListener('click', cartaCe);