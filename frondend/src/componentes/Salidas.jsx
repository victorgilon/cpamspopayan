import { useState } from "react";
import Axios from 'axios';
import Tabla from '../componentes/Tabla';
import BuscarPpl from "./BuscarPpl";

function Salidas() {
  const [cedula, setCedula] = useState('');
  const [nombreGuardian, setNombreGuardian] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  const handleGuardian = (cedula) => {
    if (!cedula) {
      setError('Por favor ingrese el número de cédula');
      return;
    }

    setLoading(true);

    Axios.post('http://localhost:3001/buscarGuardian', {
      cedula_usuario: cedula,
    })
      .then(response => {
        setNombreGuardian(response.data);
        setError('');
      })
      .catch(error => {
        setError('No se encontró ningún guardián con esa cédula');
        setNombreGuardian('');
      })
      .finally(() => {
        setLoading(false);
      });
  };


  const handleCedulaChange = (e) => {
    const cedula = e.target.value;
    setCedula(cedula);
    handleGuardian(cedula);
  };

  return (
    <div>
      <div>
        <div>
          <h3 style={{ padding: '25px' }}>Salidas</h3>
          <form style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="cedulaGuardian" style={{ marginRight: '10px' }}>Cédula del Guardian:</label>
              <input type="number" id="cedulaGuardian" value={cedula} onChange={handleCedulaChange} placeholder="Número de cédula" style={{ marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
              <input type="text" value={nombreGuardian} readOnly placeholder="Nombre del guardián" style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '250px' }} />
            </div>
            <BuscarPpl/>
          </form>
          <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Salidas;
