import connection from "../utils/bd.js";

class LenguajeUsuario {
    /**
   * Método para obtener los registros de la base de datos
   * @returns {Array} Listado de los lenguajes relacionados a usuarios en un arreglo
   */
    async getAll() {
        const [rows] = await connection.query("SELECT * FROM lenguaje_usuario");
        return rows;
    }

    async getById(id) {
        const [row] = await connection.query("SELECT * FROM lenguaje_usuario WHERE id = ?", [id]);
        return row;
    }

    async getByUserId(id_usuario) {
        const [row] = await connection.query("SELECT * FROM lenguaje_usuario WHERE id_usuario = ?", [id_usuario]);
        return row;
    }

    async getByLenguajeId(id_lenguajes) {
        const [row] = await connection.query("SELECT * FROM lenguaje_usuario WHERE id_lenguaje = ?", [id_lenguajes]);
        return row;
    }


    async create(id_usuario, id_lenguaje) {
        const [result] = await connection.query("INSERT INTO lenguaje_usuario (id_usuario, id_lenguaje) VALUES (?,?)", [id_usuario, id_lenguaje]);
        return result;
    }

    async update(id, id_usuario, id_lenguaje) {
        const [result] = await connection.query("UPDATE lenguaje_usuario SET id_usuario = ?, id_lenguaje = ? WHERE id = ?", [id_usuario, id_lenguaje, id]);
        return result;
    }

    async partialUpdate(id, comando) {
        const [result] = await connection.query(`UPDATE lenguaje_usuario SET ${comando} WHERE id = ?`, [id]);
        return result;
    }

    async delete(id) {
        const [result] = await connection.query("DELETE FROM lenguaje_usuario WHERE id = ?", [id]);
        return result;
    }

    async deleteByUserId(id_usuario) {
        const [result] = await connection.query("DELETE FROM lenguaje_usuario WHERE id_usuario = ?", [id_usuario]);
        return result;
    }
}

export default LenguajeUsuario;