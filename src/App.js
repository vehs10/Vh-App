
import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      <header>
         <NavBar />
      </header>

      <section className="mx-auto container">
       <div className="row"> 
      <Card name="Charmander" type="Fuego" />
      <Card name="Bulbasaur" type="Planta" />
      <Card name="Squirtle" type="Agua" />
      <Card name="Pikachu" type="Trueno" />
      <Card name="Pidegeot" type="Volador" />
      <Card name="Rattata" type="Normal" />
       </div>
      </section>

    </div>
  );
}

export default App;
