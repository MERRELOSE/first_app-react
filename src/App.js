import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connexion from './Composant/Gestion Acte de naissance/Connexion.jsx';
import Accueil from './Composant/Gestion Acte de naissance/accueil.jsx';
import Naissance from './Composant/Gestion Acte de naissance/naissance.jsx';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Connexion} />
        <Route path="/accueil" component={Accueil} />
        <Route path="/naissance" component={Naissance} />
        {/* Route par défaut */}
        <Route component={Connexion} />
      </Routes>
    </Router>
  );
};

export default App;

