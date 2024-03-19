import { useState } from "react";
import Header from "../componentes/Header";
//import Tabla from "../componentes/tabla";
import Usuarios from "../componentes/Usuarios";
import Salidas from "../componentes/Salidas";
import Ingresos from "../componentes/Ingresos";

function Inicio() {
  const [componente, setComponente] = useState(null);

  const handleComponente = (nombre) => {
    switch (nombre) {
      case "Salidas":
        setComponente(<Salidas />);
        break;
      case "Ingresos":
        setComponente(<Ingresos />);
        break;
      case "Usuarios":
        setComponente(<Usuarios />);
        break;
      default:
        setComponente(null);
        break;
    }
  };

  return (
    <div>
      <Header />
      <div style={{borderRadius: '30px', color: 'black', textAlign: 'justify', padding:'10px'}}>
        <form className="navbar-2" style={{padding:'25px'}}>
          <input type="button" value="Salidas" onClick={() => handleComponente("Salidas")} className="boton"  />
          <input type="button" value="Ingresos" onClick={() => handleComponente("Ingresos")} className="boton" />
          <input type="button" value="Usuarios" onClick={() => handleComponente("Usuarios")} className="boton" />
        </form>
      </div>
     <div style={{padding:'25px'}}>
     {componente}
     </div>
      <div>
        {/* <Tabla /> */}
      </div>
    </div>
  );
}

export default Inicio;
