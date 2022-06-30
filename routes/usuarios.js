const { Router } = require("express");
const { check } = require("express-validator");
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
} = require("../controllers/usuarios");
const { esRoleValido, emailExiste, existeUsuarioPorId } = require("../helpers/db-validators");

const {validarCampos} = require('../middlewares/validar-campos');
const router = Router();

//Rest endpoint

//Obtener información
router.get("/", usuariosGet);

//Put para actualizar registros
router.put("/:id",
  [
    check("id",'No es un ID válido').isMongoId(),
    check("id").custom(existeUsuarioPorId),
    check("rol").custom(esRoleValido),
    validarCampos
  ]
  , usuariosPut);

//Post se utiliza para crear nuevos recursos
router.post("/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(), // no tiene que estar vacio
    check("password", "El password debe ser de más de 6 letras").isLength({min:6}),
    // check("rol", "No es un rol permitido").isIn('ADMIN_ROLE', 'USER_ROL'),
    check("correo", "Eñ correo no es válido").isEmail(),
    check("correo").custom(emailExiste),
    check("rol").custom(esRoleValido),
    validarCampos
  ],
  usuariosPost
);

//Delete para borrar algo
router.delete("/:id",
[
  check("id",'No es un ID válido').isMongoId(),
  check("id").custom(existeUsuarioPorId),
  validarCampos
]
, usuariosDelete);

module.exports = router;
