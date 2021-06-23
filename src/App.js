import './App.css';
import NavBar from './components/NavBar';
import ContainerCard from './components/ContainerCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDetailContainer from './components/CardDetailContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";




function App() {
  return (
    <div className="App">
    <Router>
         <NavBar Link={Link}/>
       
      <section className="container">

        <Switch>
          <Route path="/" exact>
            <ContainerCard />
            
            
          </Route>

          <Route path="/about">
            <About />
            <CardDetailContainer />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

      </section>
    </Router> 
    </div>
  );
}

export default App;