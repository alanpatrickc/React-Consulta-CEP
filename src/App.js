import logo from './logo.svg';
import './App.css';
import Pesquisar from './Containers/Pesquisar';
import Carregando from './Containers/Carregando';
import Resultados from './Containers/Resultados'; 
import Erro from './Containers/Erro';
function App() {
  return <div><Resultados result={ {
    "RUA": "Rua Canario",
    "Cidade": "Santa Inês",
    "UF": "MA",
    
    }}/></div>
}

export default App;
