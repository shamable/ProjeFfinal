import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Accueil from './Components/Accueil';
import VoirRecette from './Components/VoirRecette';
import ModifierRecette from './Components/ModifierRecette';
import Erreur from './Components/Erreur';
import Navbar from './Components/Navbar';
import AjoutRecette from './Components/AjoutRecette';


// http://localhost:9000/api/recipes


function App() {
  return(
    <>
    <Navbar/>
    <Router>
      <Switch>
          <Route path="/" exact>
            <Accueil />
          </Route>

          <Route path="/recette/:id">
            <VoirRecette/>
          </Route>
          
          <Route path="/ModifierRecette/">
          </Route>
          <Route path="/AjoutRecette">
            <AjoutRecette/>
          </Route>

          <Route>
            <Erreur/>
          </Route>
        </Switch>
        
    </Router>
    </>
  )
 
}

export default App;