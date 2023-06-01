import { Router } from "express";
import {
  getClientes,
  getCliente,
  createCliente,
  updateCliente,
  deleteCliente,
} from "../controllers/cliente.controllers.js";

import {
  getProveedores,
  getProveedor,
  createProveedor,
  updateProveedor,
  deleteProveedor,
} from "../controllers/proveedor.controllers.js";

import {
  getCompras,
  getCompra,
  createCompra,
  updateCompra,
  deleteCompra,
} from "../controllers/compra.controllers.js";

import {
  getProductos,
  getProducto,
  createProducto,
  updateProducto,
  deleteProducto,
} from "../controllers/producto.controllers.js";

const router = Router();

/**************CLIENTES************** */

router.get("/clientes", getClientes);

router.get("/cliente/:id", getCliente);

router.post("/clientes", createCliente);

router.put("/clientes/:id", updateCliente);

router.delete("/clientes/:id", deleteCliente);

/**************PROVEEDORES************** */

router.get("/Proveedores", getProveedores);

router.get("/proveedor/:id", getProveedor);

router.post("/proveedores", createProveedor);

router.put("/proveedores/:id", updateProveedor);

router.delete("/proveedores/:id", deleteProveedor);

/**************COMPRA************** */

router.get("/compras", getCompras);

router.get("/compra/:id", getCompra);

router.post("/compras", createCompra);

router.put("/compras/:id", updateCompra);

router.delete("/compras/:id", deleteCompra);

/**************PRODUCTO************** */

router.get("/productos", getProductos);

router.get("/producto/:id", getProducto);

router.post("/productos", createProducto);

router.put("/productos/:id", updateProducto);

router.delete("/productos/:id", deleteProducto);
export default router;
