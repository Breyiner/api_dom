import CiudadServicio from "./CiudadServicio.js";
import GeneroServicio from "./GeneroServicio.js";

class UsuarioValidaciones {
    constructor() {
        this.OBJGeneroServicio = GeneroServicio();
        this.OBJCiudadServicio = CiudadServicio();
    }

    async validarCampos(campos) {
        const { nombre, apellido, documento, telefono, usuario, contrasena, id_genero, id_ciudad } = campos;

        const errores = {};
        if (typeof nombre !== 'string') {
            errores.nombre = "El nombre debe ser una cadena de texto.";
        } else if (nombre.length > 30) {
            errores.nombre = "El nombre no puede exceder los 30 caracteres.";
        }

        if (typeof apellido !== 'string') {
            errores.apellido = "El apellido debe ser una cadena de texto.";
        } else if (apellido.length > 30) {
            errores.apellido = "El apellido no puede exceder los 30 caracteres.";
        }

        if(isNaN(documento)) {
            errores.documento = "El documento debe ser un número entero.";
        }
        
        if(isNaN(telefono)) {
            errores.telefono = "El teléfono debe ser un número entero.";
        }
        
        if (typeof usuario !== 'string') {
            errores.usuario = "El usuario debe ser una cadena de texto.";
        } else if (usuario.length > 20) {
            errores.usuario = "El usuario no puede exceder los 20 caracteres.";
        }
        
        if (typeof contrasena !== 'string') {
            errores.contrasena = "La contraseña debe ser una cadena de texto.";
        } else if (contrasena.length > 20) {
            errores.contrasena = "La contraseña no puede exceder los 20 caracteres.";
        }

        if (isNaN(id_genero) || id_genero <= 0) {
            
            errores.id_genero = "El ID de género debe ser un número entero positivo.";
        }
        
        if (isNaN(id_ciudad) || id_ciudad <= 0) {
            errores.id_ciudad = "El ID de ciudad debe ser un número entero positivo.";
        }
        
        return errores;
    }
}

export default UsuarioValidaciones;