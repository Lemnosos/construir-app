//Funciones de control publicas

const getIndex = (req, res) => {
    res.render('indice', { titulo: "Práctica JWT" });
};

const getApi = (req, res) => {

    res.status(200).json({
        posts: [
            {
                id: 0,
                title: "Primer post",
                username: 'Pepe'
            },
            {
                id: 1,
                title: "Segundo post",
                username: 'Ana'
            }
        ]
    })

};

const getLogin = (req, res) => {
    res.render('logIn', {
        nombre: "Nombre de usuario",
        contraseña: "Contraseña",
        texto: "Iniciar sesion"
    });
};

const postAuth = (req, res) => {
    const { username, password } = req.body;

    const user = { username: username }
};

module.exports = { getIndex, getApi, getLogin, postAuth }