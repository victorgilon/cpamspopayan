import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import popayanImage from "../img/p.jpg";
import Axios from 'axios';

function Login() {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (correo === '' || contrasena === '') {
            setError(true);
        } else {
            Axios.post('http://localhost:3001/login', {
                correo_usuario: correo,
                contrasena_usuario: contrasena
            })
            .then(response => {
                alert(`Bienvenido ${response.data}`);
                navigate('/Inicio');
            })
            .catch(error => {
                setError(true);
            });
        }
    }

    return (
        <div style={{ display: 'flex' }}>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={handleLogin}>
                        <h2 style={{color:'black'}}>Iniciar sesión</h2>
                        <div className="inputbox">
                            <label htmlFor="correo">Correo electrónico</label>
                            <input type="email" id="correo" value={correo} style={{color:'white'}} onChange={(e) => setCorreo(e.target.value)} />
                        </div>
                        <div className="inputbox">
                            <label htmlFor="contrasena">Contraseña</label>
                            <input type="password" id="contrasena" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                        </div>
                        <div>
                            <input type="submit" style={{color:'black'}} value="Ingresar" className="boton" />
                            <p style={{padding:'15px',color:'white'}}>  ¿No tienes cuenta? <Link  to='/crear-cuenta' style={{ color: 'black' }}> Crear cuenta</Link></p>
                        </div>
                    </form>
                    {error && <p style={{ color: 'red' }}>Correo o contraseña incorrectos</p>}
                </div>
            </div>
            <div className="image-container">
                <img src={popayanImage} alt="Popayan" />
            </div>
        </div>
    );
}

export default Login;
