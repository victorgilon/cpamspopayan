

function Tabla({ datos, eliminarFila }) {
  return (
    <div style={styles.container}>
      <div style={{ marginBottom: '15px', padding: '10px' }}>
        <label htmlFor="area" style={{ marginRight: '10px' }}>A dónde se dirigen:</label>
        <select id="area" style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}>
          <option value="">--Elegir--</option>
          <option value="1">Talleres</option>
          <option value="2">Educativas</option>
          <option value="3">Coyugales</option>
          <option value="3">Sanidad</option>
        </select>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Nombre</th>
            <th style={styles.th}>Alias</th>
            <th style={styles.th}>Patio</th>
            <th style={styles.th}>Delito</th>
            <th style={styles.th}>Acción</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item, index) => (
            <tr key={index} style={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
              <td style={styles.td}>{item.nombre.toUpperCase()}</td>
              <td style={styles.td}>{item.alias.toUpperCase()}</td>
              <td style={styles.td}>{item.patio}</td>
              <td style={styles.td}>{item.delito}</td>
              <td style={styles.td}>
                <button onClick={() => eliminarFila(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <input type="submit" value="Guardar" className="boton" style={{ backgroundColor: 'green', width: '120px' }}/>
    </div>
  );
}

const styles = {
  container: {
    marginBottom: "15px",
  },
  table: {
    borderCollapse: "collapse",
    width: "100%",
  },
  th: {
    backgroundColor: "#f0f0f0",
    color: "black",
    padding: "10px",
    borderBottom: "1px solid #ddd",
    textAlign: "center",

  },
  rowEven: {
    backgroundColor: "#f9f9f9",
  },
  rowOdd: {
    backgroundColor: "#ffffff",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    textAlign: 'center'
  },
};

export default Tabla;
