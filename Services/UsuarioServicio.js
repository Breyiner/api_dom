import Usuario from "../Modules/Usuario.js";
import CiudadServicio from "./CiudadServicio.js";
import GeneroServicio from "./GeneroServicio.js";

class UsuarioServicio {
    constructor() {
        this.OBJUsuario = new Usuario();
        this.OBJGeneroServicio = new GeneroServicio();
        this.OBJCiudadServicio = new CiudadServicio();
    }

    async getAll() {
        try {
            const usuarios = await this.OBJUsuario.getAll();

            if (usuarios.length === 0) {
                throw new Error("No hay usuarios registrados.");
            }
            return usuarios;
        } catch (error) {
            throw new Error(`Error al obtener los usuarios: ${error.message}`);
        }
    }

    async getById(id) {
        try {
            const usuario = await this.OBJUsuario.getById(id);
            if (usuario.length === 0) throw new Error("No existe el usuario.");
            const {id_ciudad, id_genero} = usuario[0];
            
            const ciudad = await this.OBJCiudadServicio.getById(id_ciudad);
            const genero = await this.OBJGeneroServicio.getById(id_genero);

            
            return {
                ...usuario[0],
                ciudad: ciudad[0].ciudad,
                id_ciudad: undefined,
                genero: genero[0].genero,
                id_ciudad: undefined
            }
        } catch (error) {
            throw new Error(`Error al obtener el usuario: ${error.message}`);
        }
    }

    async validarExistencia(campos) {
        const {id_genero, id_ciudad} = campos;

        if(id_genero) await this.OBJGeneroServicio.getById(id_genero);
        if(id_ciudad) await this.OBJCiudadServicio.getById(id_ciudad);
    }
    
    async create(campos) {
        try {
            // const errores = await this.validarCampos(campos);
            
            // if (Object.keys(errores).length > 0) {
            //     return errores;
            // }

            await this.validarExistencia(campos);

            const data = [];
            for (const campo in campos) {
                data.push(campos[campo]);
            }

            const resultado = await this.OBJUsuario.create(data);

            return { id: resultado.insertId, dataCreated: campos };
        } catch (error) {
            throw new Error(`Error al crear el usuario: ${error.message}`);
        }
    }

    async update(id, campos) {
        try {
            await this.validarExistencia(campos);
            
            const data = [];
            for (const campo in campos) {
                data.push(campos[campo]);
            }

            const resultado = await this.OBJUsuario.update(id, data);
            
            if (resultado.affectedRows === 0) {
                throw new Error("Usuario no encontrado.");
            }
            return { id, camposActualizados: campos };
        } catch (error) {
            throw new Error(`Error al actualizar el usuario: ${error.message}`);
        }
    }

    async partialUpdate(id, campos) {
        try {
            await this.validarExistencia(campos);

            let comando = "";
            for (const propiedad in campos) {
                comando += `${propiedad} = "${campos[propiedad]}", `;
            }

            comando = comando.substring(0, comando.length - 2);

            const resultado = await this.OBJUsuario.partialUpdate(id, comando);
      
            if (resultado.affectedRows == 0) throw new Error("Usuario no encontrado.");

            return {id, camposActualizados: campos};
        } catch (error) {
            throw new Error(`Error al actualizar el Usuario: ${error.message}`);
        }
    }

    async delete(id) {
        try {
            const resultado = await this.OBJUsuario.delete(id);

            if (resultado.affectedRows === 0) {
                throw new Error("Usuario no encontrado.");
            }
            return { id };
        } catch (error) {
            throw new Error(`Error al eliminar el usuario: ${error.message}`);
        }
    }
}

export default UsuarioServicio;