import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  return (

    <div>

        <NavBar />

        <ItemListContainer greeting= 'Soy el desafío 3' />

    </div>
  );
}


export default App;
