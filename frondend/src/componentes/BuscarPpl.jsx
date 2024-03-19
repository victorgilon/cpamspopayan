import React, { useState } from "react";
import Axios from 'axios';
import Tabla from '../componentes/Tabla'

function BuscarPpl() {
  const [error, setError] = useState('');
  const [ppl, setPpl] = useState('');
  const [nombrePpl, setNombrePpl] = useState('');
  const [perfilPpl, setPerfilPpl] = useState('');
  const [aliasPpl, setAliasPpl] = useState('');
  const [patioPpl, setPatioPpl] = useState('');
  const [delitoPpl, setDelitoPpl] = useState('');
  const [tablaData, setTablaData] = useState([]);
  const [errorGuardar, setErrorGuardar] = useState(false);

  const handlePplChange = (e) => {
    const nui = e.target.value;
    setPpl(nui);
    handlePpl(nui); 
  };

  const handlePpl = (nui) => {
    if (!nui) {
      setError('Por favor ingrese el número NUI');
      return;
    }

    Axios.post('http://localhost:3001/buscarPpl', {
      nui_ppl: nui,
    })
      .then(response => {
        const data = response.data;
        setNombrePpl(data.nombre_usuario);
        setPerfilPpl(data.perfil);
        setAliasPpl(data.alias_ppl);
        setPatioPpl(data.patio);
        setDelitoPpl(data.delito);
        setError('');
      })
      .catch(error => {
        setError('No se encontró ningún PPL con este NUI');
        setNombrePpl('');
        setPerfilPpl('');
        setAliasPpl('');
        setPatioPpl('');
        setDelitoPpl('');
      });
  };

  const handleGuardarClick = (e) => {
    e.preventDefault();
    if (ppl === '' || ppl.length !== 5 || nombrePpl === '') {
      setErrorGuardar(true);
      return;
    }
    setErrorGuardar(false);
    const newData = { 
      nombre: nombrePpl, 
      alias: aliasPpl, 
      patio: patioPpl, 
      delito: delitoPpl 
    };
    setTablaData([...tablaData, newData]);
    setNombrePpl('')
    setPpl('')
  };

  return (
    <div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="codigoNUI" style={{ marginRight: '10px' }}>Código NUI:</label>
        <input type="number" id="codigoNUI" value={ppl} placeholder="Número NUI" onChange={handlePplChange} style={{ marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
        <input type="text" placeholder="Nombre PPL" value={nombrePpl} readOnly style={{ marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '250px' }} />
      </div>
      {errorGuardar && <p style={{ color: 'red' }}>Ingrese NUI de 5 números y asegúrese de tener un nombre de PPL válido.</p>}
      <input type="button" value="Agregar" onClick={handleGuardarClick} className="boton" style={{ backgroundColor: 'green', width: '120px' }}/>
      <Tabla datos={tablaData} />
    </div>
  );
}

export default BuscarPpl;
