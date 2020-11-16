import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUpForm from "./components/signUpForm lvl 3 bis/signUpForm lvl 3 bis";
import SignInForm from "./components/signInForm";
import LoginForm from "./components/signUpForm lvl 3/test";
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact >
            <SignInForm />
          </Route>
          <Route path="/signIn" exact>
            <SignInForm />
          </Route>
          <Route path="/signUp" exact>
            <SignUpForm />
          </Route>
          <Route path="/home">
            <NavBar/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
