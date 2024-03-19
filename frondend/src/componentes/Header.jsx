import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header" style={{marginRight:'20px', borderRadius:'30px'}}>
      <div className="navbar">
        <Link to='/Inicio'>Inicio</Link>
        <Link to='/Talleres'>Talleres</Link>
        <Link to='/Perfil'>Perfil</Link>
      </div>
    </header>
  );
}

export default Header;

