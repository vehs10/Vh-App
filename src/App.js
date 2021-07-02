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
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"
import {StoreProvider} from "./context/CartContext";

function App() {
  return (
    <StoreProvider>
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
           </Route>

           <Route path="/contact">
             <Contact />
           </Route>

           <Route path="/pokemon/:id">
             <CardDetailContainer />
           </Route>
        </Switch>
      </section>
      <Footer />
    </Router> 
    </div>
    </StoreProvider>
  );
}

export default App;