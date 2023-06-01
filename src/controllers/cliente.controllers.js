import { pool } from "../db.js";

export const getClientes = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM cliente ORDER BY nombre, apellido ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCliente = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM cliente WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    } else {
      res.json(result[0]);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCliente = async (req, res) => {
  try {
    const { nombre, apellido, ci, fecha_nac, direccion } = req.body;
    const [result] = await pool.query(
      "INSERT INTO cliente(nombre, apellido, ci, fecha_nac, direccion) VALUES (?, ?, ?, ?, ?)",
      [nombre, apellido, ci, fecha_nac, direccion]
    );

    res.json({
      id: result.insertId,
      nombre,
      apellido,
      ci,
      fecha_nac,
      direccion,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCliente = async (req, res) => {
  try {
    const result = await pool.query("UPDATE cliente SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM cliente WHERE id= ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "cliente no encontrado" });
    } else {
      return res.sendStatus(204);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
