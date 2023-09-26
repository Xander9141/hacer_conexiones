function reName(event) {
    event.preventDefault(); 

    var nameElement = document.getElementById("name");  
    var editProfileLink = document.getElementById("editProfile");
    
    if (nameElement.textContent === "Jane Doe") {
        nameElement.textContent = "Avatar Anng";
        editProfileLink.textContent = "edit profile (back)";
    } else {
        nameElement.textContent = "Jane Doe";
        editProfileLink.textContent = "edit profile";
    }
}


function removerConexion(elemento) {
    elemento.closest('.card-list-item').remove();
    let elementoNumeroDeConexiones = document.querySelector('.badge'); // Selecciona el elemento con la clase "badge"
    let numeroDeConexiones = parseInt(elementoNumeroDeConexiones.innerText, 10);
    numeroDeConexiones -= 1; // Decrementa en lugar de incrementar
    elementoNumeroDeConexiones.textContent = numeroDeConexiones;
}

function agregarConexion(elemento) {
    let misConexiones = document.querySelector('#myConnections');
    let imagenDeAvatar = elemento.closest('.card-list-item').querySelector('.avatar-s');
    let nombreDeConexion = elemento.closest('.card-list-item').querySelector('span').innerText;


    let nuevaConexion = document.createElement('li');
    nuevaConexion.classList.add('card-list-item', 'start');
    nuevaConexion.innerHTML = `
        <img src="${imagenDeAvatar.src}" alt="${imagenDeAvatar.alt}" class="avatar-s">
        ${nombreDeConexion}
    `;


    misConexiones.appendChild(nuevaConexion);


    let elementoTotalDeConexiones = document.querySelector('#totalConnections');
    let numeroDeConexiones = parseInt(elementoTotalDeConexiones.innerText, 10);
    numeroDeConexiones++;
    elementoTotalDeConexiones.innerText = numeroDeConexiones;


    removerConexion(elemento);
}
