import Ciudad from "../Modules/Ciudad.js";

class CiudadServicio {
    constructor() {
        this.OBJCiudad = new Ciudad();
    }

    async getAll() {
        try {
            const ciudades = await this.OBJCiudad.getAll();

            if (ciudades.length === 0) {
                throw new Error("No hay ciudades registradas.");
            }
            return ciudades;
        } catch (error) {
            throw new Error(`Error al obtener las ciudades: ${error.message}`);
        }
    }

    async getById(id) {
        try {
            const ciudad = await this.OBJCiudad.getById(id);

            if (ciudad.length === 0) {
                throw new Error("No existe la ciudad.");
            }
            return ciudad;
        } catch (error) {
            throw new Error(`Error al obtener la ciudad: ${error.message}`);
        }
    }

    async create(ciudad) {
        try {
            if (!isNaN(ciudad)) throw new Error("La ciudad no puede ser un número.");

            const resultado = await this.OBJCiudad.create(ciudad);
            return { id: resultado.insertId, ciudad };
        } catch (error) {
            throw new Error(`Error al crear la ciudad: ${error.message}`);
        }
    }

    async update(id, ciudad) {
        try {
            const resultado = await this.OBJCiudad.update(id, ciudad);

            if (resultado.affectedRows === 0) {
                throw new Error("Ciudad no encontrada.");
            }
            return { id, ciudad };
        } catch (error) {
            throw new Error(`Error al actualizar la ciudad: ${error.message}`);
        }
    }

    async partialUpdate(id, campos) {
        try {
            let comando = "";
            for (const propiedad in campos) {
                comando += `${propiedad} = "${campos[propiedad]}", `;
            }

            comando = comando.substring(0, comando.length - 2);

            const resultado = await this.OBJCiudad.partialUpdate(id, comando);
      
            if (resultado.affectedRows === 0) throw new Error("Ciudad no encontrada.");

            return { id, camposActualizados: campos };
        } catch (error) {
            throw new Error(`Error al actualizar la ciudad: ${error.message}`);
        }
    }

    async delete(id) {
        try {
            const resultado = await this.OBJCiudad.delete(id);

            if (resultado.affectedRows === 0) {
                throw new Error("Ciudad no encontrada.");
            }
            return { id };
        } catch (error) {
            throw new Error(`Error al eliminar la ciudad: ${error.message}`);
        }
    }
}

export default CiudadServicio;