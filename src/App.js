import './App.css';
import NavBar from './components/NavBar';
import ContainerCard from './components/ContainerCard';
import CardDetailContainer from './components/CardDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">

      <header>
         <NavBar />
      </header>
        
      <section className="container">
        <ContainerCard />

        <CardDetailContainer />
      </section>
      
    </div>
  );
}

export default App;