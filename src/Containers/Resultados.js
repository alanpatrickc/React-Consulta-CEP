function Resultados(props){
 const result = props.result;


  const keys = Object.keys(result);
  const elements = keys.map(key =>(
    <span key = {key}><b>{key}: </b>{result[key]}</span>
  ))
    return (
      <div className="App">
        <header className="App-header">
          <p> Resultados para o CEP 147896</p>
          {elements}
          <button>NOVA CONSULTA</button>
          </header>
      </div>
    );
  
  }

  /*<span><b>RUA:</b> Canario Q21 C64 Parque Santa Cruz</span>
          <span><b>CIDADE:</b>Santa Inês-MA</span>
          */
  export default Resultados;