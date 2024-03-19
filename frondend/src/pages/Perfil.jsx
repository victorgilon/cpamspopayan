import { Link } from "react-router-dom";
import Header from "../componentes/Header";

function Perfil() {
  return (
    <div>
      <Header />
      <div style={{ marginTop: '20px' }}>
      <h3 style={{ padding: '25px' }}>Perfil</h3>
        <form style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px',display:'contents' }}>
          <div style={{ marginBottom: '15px' }}>
            <img src="" alt="" />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="nombre" style={{ marginRight: '10px' }}>Nombre:</label>
            <input type="text" id="nombre" style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="cedula" style={{ marginRight: '10px' }}>Cédula:</label>
            <input type="number" id="cedula" style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="compania" style={{ marginRight: '10px' }}>Compañía:</label>
            <input type="text" id="compania" style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <input type="submit" value="Salir" style={{ padding: '5px 10px', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }} />
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Perfil;
