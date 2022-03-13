import NavBar from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

function App() {

  return (

    <div className="App">

        <NavBar />

        <img src={logo} className="App-logo" alt="logo" />

    </div>
  );
}


export default App;
