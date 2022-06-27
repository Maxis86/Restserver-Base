const { Router } = require("express");
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require("../controllers/usuarios");

const router = Router();

//Rest endpoint

//Obtener información
router.get("/", usuariosGet);

//Put para actualizar registros
router.put("/:id", usuariosPut);

//Post se utiliza para crear nuevos recursos
router.post("/", usuariosPost);

//Delete para borrar algo
router.delete("/", usuariosDelete);

module.exports = router;
