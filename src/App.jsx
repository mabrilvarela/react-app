import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  return (

    <div>

        <NavBar />

        <ItemListContainer />

        <ItemDetailContainer />

    </div>
  );
}


export default App;
