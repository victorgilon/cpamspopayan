import { useState } from "react";
import Header from "../componentes/Header";

function Talleres() {
  const [error, setError] = useState(false);
  const [cedula, setCedula] = useState('');

  const handleGuardar = (e) => {
    e.preventDefault();
    if (cedula.trim() === '') {
      setError(true);
    } else {
      setError(false);
    }
  };
  

  return (
    <div >
      <Header />
      <h3 style={{ padding: '25px' }}>Talleres</h3>
      <form onSubmit={handleGuardar}  style={{ backgroundColor: '#f0f0f0', padding: '25px', borderRadius: '10px'}}>
        <label htmlFor="cedula" style={{ marginRight: '10px' }}>Numero de cedula Guardian:</label>
        <input
          type="number"
          id="cedula"
          placeholder="Número cedula"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
          style={{ marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '5px 10px', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Buscar</button>
      </form>
      {error && <div style={{ color: 'red' }}>Ingrese numero de cedula</div>}
    </div>
  );
}

export default Talleres;
