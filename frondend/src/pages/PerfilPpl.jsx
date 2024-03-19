import React, { useState } from "react";
import Axios from 'axios';
import Tabla from '../componentes/Tabla'

function PerfilPpl() {
  const [error, setError] = useState('');
  const [ppl, setPpl] = useState('');
  const [nombrePpl, setNombrePpl] = useState('');
  const [perfilPpl, setPerfilPpl] = useState('');
  const [aliasPpl, setAliasPpl] = useState('');
  const [patioPpl, setPatioPpl] = useState('');
  const [delitoPpl, setDelitoPpl] = useState('');

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
    // Aquí puedes llamar a una función en el componente padre para agregar los datos a la tabla
  };

  return (
    <div>
      <div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="codigoNUI" style={{ marginRight: '10px' }}>Código NUI:</label>
          <input type="number" id="codigoNUI" value={ppl} placeholder="Número NUI" onChange={handlePplChange} style={{ marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <input type="text" placeholder="Nombre PPL" value={nombrePpl} readOnly style={{ marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '250px' }} />
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <form style={{ display: 'flex', padding: '15px', alignItems: 'center', flexDirection: 'column',textAlign: 'center'}} onSubmit={handleGuardarClick}>
          <div style={{ display: 'flex', padding: '15px', alignItems: 'center', flexDirection: 'column' }}>
            <label htmlFor="">Perfil</label>
            <input type="text" readOnly name="" id="" value={perfilPpl} style={{textAlign: 'center', marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <label htmlFor="">Alias</label>
            <input type="text" readOnly name="" id="" value={aliasPpl.toUpperCase()} style={{ textAlign: 'center',marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <label htmlFor="">Patio</label>
            <input type="text" readOnly name="" id="" value={patioPpl} style={{textAlign: 'center', marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <label htmlFor="">Delito</label>
            <input type="text" readOnly name="" id="" value={delitoPpl} style={{ textAlign: 'center',marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <input type="submit" value="Cerrar" className="boton" style={{ backgroundColor: 'green', width: '120px' }} />
        </form>
      </div>
    </div>
  );
}

export default PerfilPpl;







// import { useState } from "react";
// import BuscarPpl from "../componentes/BuscarPpl";

// function PerfilPpl() {
//   const [perfilData, setPerfilData] = useState({
//     nombrePpl: '',
//     perfilPpl: '',
//     aliasPpl: '',
//     patioPpl: '',
//     delitoPpl: ''
//   });

//   const handleBuscarPpl = (data) => {
//     setPerfilData(data);
//   };

//   return (
// <div>
//   <div>
//     <BuscarPpl onBuscarPpl={handleBuscarPpl}/>
//     {console.log(perfilData.aliasPpl)}
//     <img src="" alt="" />
//     <form style={{ display: 'flex', padding: '15px', alignItems: 'center', flexDirection: 'column' }}>
//       <div style={{ display: 'flex', padding: '15px', alignItems: 'center', flexDirection: 'column' }}>
//         <label htmlFor="">Perfil</label>
//         <input type="text" readOnly name="" id="" value={perfilData.perfilPpl} style={{ marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
//         <label htmlFor="">Alias</label>
//         <input type="text" readOnly name="" id="" value={perfilData.aliasPpl} style={{ marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
//         <label htmlFor="">Patio</label>
//         <input type="text" readOnly name="" id="" value={perfilData.patioPpl} style={{ marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
//         <label htmlFor="">Delito</label>
//         <input type="text" readOnly name="" id="" value={perfilData.delitoPpl} style={{ marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
//       </div>
//       <input type="submit" value="Cerrar" className="boton" style={{ backgroundColor: 'green', width: '120px' }} />
//     </form>
//   </div>
// </div>
//   )
// }

// export default PerfilPpl;
