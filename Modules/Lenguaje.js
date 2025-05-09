import connection from "../utils/bd.js";

class Lenguaje {
    /**
   * Método para obtener los registros de la base de datos
   * @returns {Array} Listado de los lenguajes en un arreglo
   */
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM lenguajes");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener los lenguajes");
    }
  }

  async getById(id) {
    try {
      const [row] = await connection.query("SELECT * FROM lenguajes WHERE id = ?", [id]);
      return row;
    } catch (error) {
      throw new Error("Error al obtener lenguaje");
    }
  }
}

export default Lenguaje;