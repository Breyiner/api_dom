import connection from "../utils/bd.js";

class Lenguaje {
    /**
   * Método para obtener los registros de la base de datos
   * @returns {Array} Listado de los lenguajes en un arreglo
   */
  async getAll() {
    const [rows] = await connection.query("SELECT * FROM lenguajes");
    return rows;
  }

  async getById(id) {
    const [row] = await connection.query("SELECT * FROM lenguajes WHERE id = ?", [id]);
    return row;
  }

  async create(lenguaje) {
    const [result] = await connection.query("INSERT INTO lenguajes (lenguaje) VALUES (?)", [lenguaje]);
    return result;
  }

  async update(id, lenguaje) {
    const [result] = await connection.query("UPDATE lenguajes SET lenguaje = ? WHERE id = ?", [lenguaje, id]);
    return result;
  }

  async partialUpdate(id, comando) {
    const [result] = await connection.query(`UPDATE lenguajes SET ${comando} WHERE id = ?`, [id]);
    return result;
  }

  async delete(id) {
    const [result] = await connection.query("DELETE FROM lenguajes WHERE id = ?", [id]);
    return result;
  }
}

export default Lenguaje;