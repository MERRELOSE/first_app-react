import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Connexion from './Composant/Gestion Acte de naissance/Connexion.jsx';
import Accueil from './Composant/Gestion Acte de naissance/accueil.jsx';
import Naissance from './Composant/Gestion Acte de naissance/naissance.jsx';



const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Connexion} />
        <Route path="/accueil" component={Accueil} />
        <Route path="/naissance" component={Naissance} />
        {/* Route par défaut */}
        <Route component={Connexion} />
      </Switch>
    </Router>
  );
};

export default App;

