import { pool } from "../db.js";

export const getCompras = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM compra ORDER BY id ASC");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCompra = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM compra WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: "Compra no encontrado" });
    } else {
      res.json(result[0]);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCompra = async (req, res) => {
  try {
    const { id_cliente, id_producto } = req.body;
    const [result] = await pool.query(
      "INSERT INTO compra(id_cliente, id_producto) VALUES (?, ?)",
      [id_cliente, id_producto]
    );

    res.json({
      id: result.insertId,
      id_cliente,
      id_producto,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCompra = async (req, res) => {
  try {
    const result = await pool.query("UPDATE compra SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCompra = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM compra WHERE id= ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Compra no encontrado" });
    } else {
      return res.sendStatus(204);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
