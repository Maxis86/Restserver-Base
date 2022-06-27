const {response, request} = require ('express');

const usuariosGet = (req, res) => {
    
    const {q, nombre, apikey} = req.query;
    
    res.json({
    msg: "get Api - Controlador",
    q,
    nombre,
    apikey
  });
};

const usuariosPost = (req, res) => {
    const {nombre, edad} = req.body;
    
    res.json({
        msg: "post Api - Controlador",
        nombre,
        edad
  });
};

const usuariosPut = (req, res) => {
    
    const {id} = req.params;
    
    res.json({
    msg: "put Api - Controlador",
    id
  });
};

const usuariosDelete = (req, res) => {
    res.json({
    msg: "delete Api - Controlador",
  });
};


module.exports = {
    
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}