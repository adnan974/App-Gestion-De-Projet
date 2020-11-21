import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import RoutesManagement from './components/routesManagement';

function App() {
  return (
    <div className="App">
      <Router>
        {/* ce composant permet en autre de cacher et afficher le header et footer en fonction de la route */}
        <RoutesManagement />
      </Router>
    </div>


  );
}

export default App;
