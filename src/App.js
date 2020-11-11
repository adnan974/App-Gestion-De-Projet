import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUpForm from "./components/signUpForm lvl 2/signUpForm(lvl 2)";
import SignInForm from "./components/signInForm";
import LoginForm from "./components/signUpForm lvl 3/test";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact >
            <SignInForm />
          </Route>
          <Route path="/signIn" exact>
            <LoginForm />
          </Route>
          <Route path="/signUp" exact>
            <SignUpForm />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
