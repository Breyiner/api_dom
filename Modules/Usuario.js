import connection from "../utils/bd.js";

class Usuario {
    /**
   * Método para obtener los registros de la base de datos
   * @returns {Array} Listado de los usuarios en un arreglo
   */
  async getAll() {
    const [rows] = await connection.query("SELECT * FROM usuarios");
    return rows;
  }

  async getById(id) {
    const [row] = await connection.query("SELECT * FROM usuarios WHERE id = ?", [id]);
    return row;
  }

  async create(dataCampos) {
    const [result] = await connection.query("INSERT INTO usuarios (nombre, apellido, documento, telefono, usuario, contrasena, id_genero, id_ciudad) VALUES (?,?,?,?,?,?,?,?)", [...dataCampos]);
    return result;
  }

  async update(id, dataCampos) {
    const [result] = await connection.query("UPDATE usuarios SET nombre = ?, apellido = ?, documento = ?, telefono = ?, usuario = ?, contrasena = ?, id_genero = ?, id_ciudad = ? WHERE id = ?", [...dataCampos, id]);
    return result;
  }

  async partialUpdate(id, comando) {
    const [result] = await connection.query(`UPDATE usuarios SET ${comando} WHERE id = ?`, [id]);
    return result;
  }

  async delete(id) {
    const [result] = await connection.query("DELETE FROM usuarios WHERE id = ?", [id]);
    return result;
  }
}

export default Usuario;