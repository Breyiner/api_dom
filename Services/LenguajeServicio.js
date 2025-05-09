import Lenguaje from "../Modules/Lenguaje.js";

class LenguajeServicio {
    constructor() {
        this.OBJLenguaje = new Lenguaje();
    }

    async getAll() {
        try {
            const lenguajes = await this.OBJLenguaje.getAll();

            if (lenguajes.length === 0) {
                throw new Error("No hay lenguajes registrados.");
            }
            return lenguajes;
        } catch (error) {
            throw new Error(`Error al obtener los lenguajes: ${error.message}`);
        }
    }

    async getById(id) {
        try {
            const lenguaje = await this.OBJLenguaje.getById(id);

            if (lenguaje.length === 0) {
                throw new Error("No existe el lenguaje.");
            }
            return lenguaje;
        } catch (error) {
            throw new Error(`Error al obtener el lenguaje: ${error.message}`);
        }
    }

    async create(lenguaje) {
        try {
            if(!isNaN(lenguaje)) throw new Error("El lenguaje no puede ser un número.");

            const resultado = await this.OBJLenguaje.create(lenguaje);
            return { id: resultado.insertId, lenguaje };
        } catch (error) {
            throw new Error(`Error al crear el lenguaje: ${error.message}`);
        }
    }

    async update(id, lenguaje) {
        try {
            const resultado = await this.OBJLenguaje.update(id, lenguaje);

            if (resultado.affectedRows === 0) {
                throw new Error("Lenguaje no encontrado,");
            }
            return { id, lenguaje };
        } catch (error) {
            throw new Error(`Error al actualizar el lenguaje: ${error.message}`);
        }
    }

    async partialUpdate(id, campos) {
        try {
            let comando = "";
            for (const propiedad in campos) {
                comando += `${propiedad} = "${campos[propiedad]}", `;
            }

            comando = comando.substring(0, comando.length - 2);

            const resultado = await this.OBJLenguaje.partialUpdate(id, comando);
      
            if (resultado.affectedRows == 0) throw new Error("Lenguaje no encontrado.");

            return {id, camposActualizados: campos};
        } catch (error) {
            throw new Error(`Error al actualizar el lenguaje: ${error.message}`);
        }
    }

    async delete(id) {
        try {
            const resultado = await this.OBJLenguaje.delete(id);

            if (resultado.affectedRows === 0) {
                throw new Error("Lenguaje no encontrado,");
            }
            return { id };
        } catch (error) {
            throw new Error(`Error al actualizar el lenguaje: ${error.message}`);
        }
    }
}

export default LenguajeServicio;