import LenguajeUsuario from "../Modules/LenguajeUsuario.js";
import LenguajeServicio from "./lenguajeServicio.js";
import UsuarioServicio from "./UsuarioServicio.js";

class LenguajeUsuarioServicio {
    constructor() {
        this.OBJLenguajeUsuario = new LenguajeUsuario();
        this.OBJUsuarioServicio = new UsuarioServicio();
        this.OBJLenguajeServicio = new LenguajeServicio();
    }
    
    async getAll() {
        try {
            const lenguajesUsuario = await this.OBJLenguajeUsuario.getAll();

            if (lenguajesUsuario.length === 0) {
                throw new Error("No hay datos registrados.");
            }
            return lenguajesUsuario;
        } catch (error) {
            throw new Error(`Error al obtener los registros: ${error.message}`);
        }
    }

    async getById(id) {
        try {
            const lenguajeUsuario = await this.OBJLenguajeUsuario.getById(id);

            if (lenguajeUsuario.length === 0) {
                throw new Error("No existe el registro.");
            }
            return lenguajeUsuario;
        } catch (error) {
            throw new Error(`Error al obtener el registro: ${error.message}`);
        }
    }

    async getByUserId(id_usuario) {
        try {
            const usuario = await this.OBJLenguajeUsuario.getByUserId(id_usuario);

            if (usuario.length === 0) {
                throw new Error("No existe el Usuario.");
            }
            return usuario;
        } catch (error) {
            throw new Error(`Error al obtener el usuario: ${error.message}`);
        }
    }

    async getByLenguajeId(id_lenguaje) {
        try {
            const lenguaje = await this.OBJLenguajeUsuario.getByLenguajeId(id_lenguaje);

            if (lenguaje.length === 0) {
                throw new Error("No existe el lenguaje.");
            }
            return lenguaje;
        } catch (error) {
            throw new Error(`Error al obtener el lenguaje: ${error.message}`);
        }
    }

    async validarExistencia(id_usuario, id_lenguaje) {
        if(id_usuario) await this.OBJUsuarioServicio.getById(id_usuario);
        if(id_lenguaje) await this.OBJLenguajeServicio.getById(id_lenguaje);
    }

    async create(id_usuario, id_lenguaje) {
        try {
            if(isNaN(id_lenguaje)) throw new Error("El id del lenguaje no puede ser una cadena de texto.");
            if(isNaN(id_usuario)) throw new Error("El id del usuario no puede ser una cadena de texto.");

            await this.validarExistencia(id_usuario, id_lenguaje);

            const resultado = await this.OBJLenguajeUsuario.create(id_usuario, id_lenguaje);
            return { id: resultado.insertId, id_usuario, id_lenguaje };
        } catch (error) {
            throw new Error(`Error al crear el registro: ${error.message}`);
        }
    }

    async update(id, id_usuario, id_lenguaje) {
        try {
            await this.validarExistencia(id_usuario, id_lenguaje);

            const resultado = await this.OBJLenguajeUsuario.update(id, id_usuario, id_lenguaje);
            
            if (resultado.affectedRows === 0) {
                throw new Error("Registro no encontrado.");
            }
            return { id, id_usuario, id_lenguaje };
        } catch (error) {
            throw new Error(`Error al actualizar el registro: ${error.message}`);
        }
    }

    async partialUpdate(id, campos) {
        try {
            const {id_usuario, id_lenguaje} = campos;
            await this.validarExistencia(id_usuario, id_lenguaje);

            let comando = "";
            for (const propiedad in campos) {
                comando += `${propiedad} = "${campos[propiedad]}", `;
            }

            comando = comando.substring(0, comando.length - 2);

            const resultado = await this.OBJLenguajeUsuario.partialUpdate(id, comando);
      
            if (resultado.affectedRows == 0) throw new Error("Usuario no encontrado.");

            return {id, camposActualizados: campos};
        } catch (error) {
            throw new Error(`Error al actualizar el Usuario: ${error.message}`);
        }
    }

    async delete(id) {
        try {
            const resultado = await this.OBJLenguajeUsuario.delete(id);

            if (resultado.affectedRows === 0) {
                throw new Error("Registro no encontrado.");
            }
            return { id };
        } catch (error) {
            throw new Error(`Error al eliminar el registro: ${error.message}`);
        }
    }

    async deleteByUserId(id_usuario) {
        try {
            const resultado = await this.OBJLenguajeUsuario.deleteByUserId(id_usuario);

            if (resultado.affectedRows === 0) {
                throw new Error("Usuario no encontrado.");
            }
            return { id_usuario };
        } catch (error) {
            throw new Error(`Error al eliminar el Usuario: ${error.message}`);
        }
    }
}

export default LenguajeUsuarioServicio;