function Erro(props){
    return (
      <div className="App">
        <header className="App-header">
          <p>Erro na Consulta</p>
          <p>{props.errorMessage}</p>
          <button>VOLTAR</button>
          </header>
      </div>
    );
  
  }
  export default Erro;
  
  