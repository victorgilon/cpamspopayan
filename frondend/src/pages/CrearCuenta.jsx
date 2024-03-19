import { useState } from "react";
import { Link } from "react-router-dom";
import popayanImage from "../img/p.jpg";
import Axios from 'axios';

function CrearCuenta() {
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const [correo, setCorreo] = useState('');
  let id_usuario_tipo_usuario = 1;

  const agregarUsuario = () => {
    Axios.post('http://localhost:3001/crear', {
      nombre_usuario: nombre,
      contrasena_usuario: contrasena,
      correo_usuario: correo,
      id_usuario_tipo_usuario: id_usuario_tipo_usuario,
    })
      .then(() => {
        alert(`Usuario ${nombre} registrado!!`)
      })
      .catch(error => {
        if (error.response && error.response.status === 400) {
          setError('El nombre de usuario o correo electrónico ya están registrados');
        } else {
          setError('Error al procesar la solicitud');
        }
      });
  }

  const handleGuardar = (e) => {
    e.preventDefault();

    if (nombre === '' || contrasena === '' || correo === '') {
      setError('Todos los campos son obligatorios');
    } else {
      setError('');
      agregarUsuario();
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      <div className="image-container">
        <img src={popayanImage} alt="Popayan" />
      </div>
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleGuardar}>
            <h2 style={{ color: 'black' }}>Registrar</h2>
            <div className="inputbox">
              <label htmlFor="nombre">Nombre usuario</label>
              <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="inputbox">
              <label htmlFor="">Ingrese Correo</label>
              <input type="email" onChange={(e) => setCorreo(e.target.value)} />
            </div>
            <div className="inputbox">
              <label htmlFor="contrasena">Contraseña</label>
              <input type="password" id="contrasena" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
            </div>
            <div>
              <input type="submit" value="Guardar" className="boton" />
            </div>
            <div>
              <p style={{ padding: '15px', color: 'white' }}>¿Ya tienes cuenta?<Link to='/' style={{ color: 'black' }}> Iniciar sesión</Link></p>
            </div>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default CrearCuenta;
