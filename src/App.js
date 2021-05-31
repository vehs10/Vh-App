import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <header>
         <NavBar />
       </header>
       

       <section className="mt-3">
         <h1>Pokedex</h1>

       </section>
       
    </div>
  );
}

export default App;
