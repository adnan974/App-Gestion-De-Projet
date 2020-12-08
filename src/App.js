import logo from './logo.svg';
import './App.css';
import { createContext, React, useReducer } from 'react'
import {
  BrowserRouter as Router
} from "react-router-dom";
import RoutesManagement from './components/routesManagement';


// Tag : [authentification state management]
// Tuto 
// 1- On créer un contexte avec create context
// 2- On met en place un Usereducer qui aura des état à gérer et des action à acoomplir
// 3- use reducer aura comme état initialState et comme dispatch la fonciton reducer
// 4- On encapsule dans un AuthContext.Provider les composants qui auront accès à use context avec 
//    les infos/fonctions qu'on veut partager
// 5- Utiliser les infos/fonctions dans les autres composant (voir composant SignInForm)

// 1 
export const AuthContext = createContext();

//  Tag : [authentification state management] 
//  3
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

// Tag : [authentification state management]
// 3

// A FAIRE: fonction à compléter. Lorsque je refresh ma page react, je reviens automatiquement à la page d'index
//          Je dois créer une fonction qui vérifie si un token existe. Dans ce cas, mettre is Authentificated à true
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      //localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

function App() {

  // Tag : [authentification state management]
  // 2
  const [state, dispatch] = useReducer(reducer, initialState);
  return (

    // Tag : [authentification state management]
    // 4
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <div className="App">
        <Router>
          {/* ce composant permet en autre de cacher et afficher le header et footer en fonction de la route */}
          <RoutesManagement />
        </Router>
      </div>
    </AuthContext.Provider>


  );
}

export default App;
