import { pool } from "../db.js";

export const getProveedores = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM proveedor ORDER BY nombre ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProveedor = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM proveedor WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: "proveedor no encontrado" });
    } else {
      res.json(result[0]);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProveedor = async (req, res) => {
  try {
    const { nombre, nit, direccion } = req.body;
    const [result] = await pool.query(
      "INSERT INTO proveedor(nombre, nit, direccion) VALUES (?, ?, ?)",
      [nombre, nit, direccion]
    );

    res.json({
      id: result.insertId,
      nombre,
      nit,
      direccion,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProveedor = async (req, res) => {
  try {
    const result = await pool.query("UPDATE proveedor SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProveedor = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM proveedor WHERE id= ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "proveedor no encontrado" });
    } else {
      return res.sendStatus(204);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
