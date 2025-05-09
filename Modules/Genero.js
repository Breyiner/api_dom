import connection from "../utils/bd.js";

class Genero {
    /**
     * Método para obtener los registros de la base de datos
     * @returns {Array} Listado de los géneros en un arreglo
     */
    async getAll() {
        const [rows] = await connection.query("SELECT * FROM generos");
        return rows;
    }

    async getById(id) {
        const [row] = await connection.query("SELECT * FROM generos WHERE id = ?", [id]);
        return row;
    }

    async create(genero) {
        const [result] = await connection.query("INSERT INTO generos (genero) VALUES (?)", [genero]);
        return result;
    }

    async update(id, genero) {
        const [result] = await connection.query("UPDATE generos SET genero = ? WHERE id = ?", [genero, id]);
        return result;
    }

    async partialUpdate(id, comando) {
        const [result] = await connection.query(`UPDATE generos SET ${comando} WHERE id = ?`, [id]);
        return result;
    }

    async delete(id) {
        const [result] = await connection.query("DELETE FROM generos WHERE id = ?", [id]);
        return result;
    }
}

export default Genero;