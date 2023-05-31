import { pool } from "../db.js";

export const getProductos = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM producto ORDER BY nombre ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProducto = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM producto WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    } else {
      res.json(result[0]);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProducto = async (req, res) => {
  try {
    const { nombre, codigo, precio, id_proveedor } = req.body;
    const [result] = await pool.query(
      "INSERT INTO producto(nombre, codigo, precio, id_proveedor) VALUES (?, ?, ?, ?)",
      [nombre, codigo, precio, id_proveedor]
    );

    res.json({
      id: result.insertId,
      nombre,
      codigo,
      precio,
      id_proveedor,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProducto = async (req, res) => {
  try {
    const result = await pool.query("UPDATE Producto SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProducto = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM producto WHERE id= ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    } else {
      return res.sendStatus(204);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
