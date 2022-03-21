import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer'
import ItemCount from './container/ItemListContainer/ItemCount/ItemCount';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  return (

    <div>

        <NavBar />

        <ItemListContainer greeting= 'Soy el desafío 4' />

        <ItemCount />

    </div>
  );
}


export default App;
