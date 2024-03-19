const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdcpamspopayan'
})

app.post('/crear', (req, res) => {
    const nombre_usuario = req.body.nombre_usuario;
    const contrasena_usuario = req.body.contrasena_usuario;
    const correo_usuario = req.body.correo_usuario;
    const id_usuario_tipo_usuario = req.body.id_usuario_tipo_usuario;

    db.query('SELECT * FROM usuarios WHERE nombre_usuario = ?', nombre_usuario, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error interno del servidor');
        } else if (result.length > 0) {
            res.status(400).send('El nombre de usuario ya está registrado');
        } else {
            db.query('SELECT * FROM usuarios WHERE correo_usuario = ?', correo_usuario, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Error interno del servidor');
                } else if (result.length > 0) {
                    res.status(400).send('El correo electrónico ya está registrado');
                } else {
                    db.query('INSERT INTO usuarios(nombre_usuario, contrasena_usuario, correo_usuario, id_usuario_tipo_usuario) VALUES (?, ?, ?, ?)',
                        [nombre_usuario, contrasena_usuario, correo_usuario, id_usuario_tipo_usuario],
                        (err, result) => {
                            if (err) {
                                console.log(err);
                                res.status(500).send('Error interno del servidor');
                            } else {
                                res.send('Usuario registrado con éxito');
                            }
                        }
                    );
                }
            });
        }
    });
});


app.post('/login', (req, res) => {
    const correo_usuario = req.body.correo_usuario;
    const contrasena_usuario = req.body.contrasena_usuario;

    db.query('SELECT * FROM usuarios WHERE correo_usuario = ? AND contrasena_usuario = ?', [correo_usuario, contrasena_usuario], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error interno del servidor');
        } else if (result.length === 0) {
            res.status(401).send('Correo o contraseña incorrectos');
        } else {
            res.send('Inicio de sesión exitoso');
        }
    });
});


app.post('/buscarGuardian', (req, res) => {
    const cedula_usuario = req.body.cedula_usuario;

    db.query('SELECT nombre_usuario FROM usuarios WHERE cedula_usuario = ?', cedula_usuario, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error interno del servidor');
        } else if (result.length === 0) {
            res.status(400).send('La cédula no está registrada');
        } else {
            res.send(result[0].nombre_usuario);
        }
    });
});


app.post('/buscarPpl', (req, res) => {
    const nui_ppl = req.body.nui_ppl;

    db.query('SELECT usuarios.nombre_usuario, ppls.perfil_ppl, ppls.alias_ppl, ppls.patio_ppl, ppls.delito_ppl FROM ppls INNER JOIN usuarios ON usuarios.id_usuario = ppls.id_ppl_usuario WHERE ppls.nui_ppl = ?', nui_ppl, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error interno del servidor');
        } else if (result.length === 0) {
            res.status(400).send('El número de PPL no está registrado');
        } else {
            const { nombre_usuario, perfil_ppl, alias_ppl, patio_ppl, delito_ppl } = result[0];
            res.send({ nombre_usuario, perfil_ppl, alias_ppl, patio_ppl, delito_ppl});
        }
    });
});




app.listen(3001, () => {
    console.log('Escuchando por puerto 3001')
});
