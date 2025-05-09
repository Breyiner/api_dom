import Genero from "../Modules/Genero.js";

class GeneroServicio {
    constructor() {
        this.OBJGenero = new Genero();
    }

    async getAll() {
        try {
            const generos = await this.OBJGenero.getAll();

            if (generos.length === 0) {
                throw new Error("No hay géneros registrados.");
            }
            return generos;
        } catch (error) {
            throw new Error(`Error al obtener los géneros: ${error.message}`);
        }
    }

    async getById(id) {
        try {
            const genero = await this.OBJGenero.getById(id);

            if (genero.length === 0) {
                throw new Error("No existe el género.");
            }
            return genero;
        } catch (error) {
            throw new Error(`Error al obtener el género: ${error.message}`);
        }
    }

    async create(genero) {
        try {
            if (!isNaN(genero)) throw new Error("El género no puede ser un número.");

            const resultado = await this.OBJGenero.create(genero);
            return { id: resultado.insertId, genero };
        } catch (error) {
            throw new Error(`Error al crear el género: ${error.message}`);
        }
    }

    async update(id, genero) {
        try {
            const resultado = await this.OBJGenero.update(id, genero);

            if (resultado.affectedRows === 0) {
                throw new Error("Género no encontrado.");
            }
            return { id, genero };
        } catch (error) {
            throw new Error(`Error al actualizar el género: ${error.message}`);
        }
    }

    async partialUpdate(id, campos) {
        try {
            let comando = "";
            for (const propiedad in campos) {
                comando += `${propiedad} = "${campos[propiedad]}", `;
            }

            comando = comando.substring(0, comando.length - 2);

            const resultado = await this.OBJGenero.partialUpdate(id, comando);
      
            if (resultado.affectedRows === 0) throw new Error("Género no encontrado.");

            return { id, camposActualizados: campos };
        } catch (error) {
            throw new Error(`Error al actualizar el género: ${error.message}`);
        }
    }

    async delete(id) {
        try {
            const resultado = await this.OBJGenero.delete(id);

            if (resultado.affectedRows === 0) {
                throw new Error("Género no encontrado.");
            }
            return { id };
        } catch (error) {
            throw new Error(`Error al eliminar el género: ${error.message}`);
        }
    }
}

export default GeneroServicio;