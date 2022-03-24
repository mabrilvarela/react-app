import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer'
import ItemCount from './container/ItemListContainer/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';
import Item from './components/Item';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  return (

    <div>

        <NavBar />

        <ItemListContainer greeting= 'Soy el desafío 5' />

        <ItemCount />

        <ItemList />

        <Item />

    </div>
  );
}


export default App;
