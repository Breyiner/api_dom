import connection from "../utils/bd.js";

class Ciudad {
    /**
     * Método para obtener los registros de la base de datos
     * @returns {Array} Listado de las ciudades en un arreglo
     */
    async getAll() {
        const [rows] = await connection.query("SELECT * FROM ciudades");
        return rows;
    }

    async getById(id) {
        const [rows] = await connection.query("SELECT * FROM ciudades WHERE id = ?", [id]);
        return rows;
    }

    async create(ciudad) {
        const [result] = await connection.query("INSERT INTO ciudades (ciudad) VALUES (?)", [ciudad]);
        return result;
    }

    async update(id, ciudad) {
        const [result] = await connection.query("UPDATE ciudades SET ciudad = ? WHERE id = ?", [ciudad, id]);
        return result;
    }

    async partialUpdate(id, campos) {
        const [result] = await connection.query(`UPDATE ciudades SET ${campos} WHERE id = ?`, [id]);
        return result;
    }

    async delete(id) {
        const [result] = await connection.query("DELETE FROM ciudades WHERE id = ?", [id]);
        return result;
    }
}

export default Ciudad;
