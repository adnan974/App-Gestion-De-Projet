import React from "react";
import "./signInForm.css";
import { Link } from "react-router-dom";

const SignInForm = () => {
    return (
        <div className="container" id="SignInComponent" >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Connexion </h5>
                    <form>
                        <label htmlFor="userName">Nom d'utilisateur </label>
                        <input type="text" className="form-control" id="userName" />
                        <label htmlFor="passwordInput">Mot de passe</label>
                        <input type="password" className="form-control" id="passwordInput" />
                        <button type="submit" className="btn btn-outline-primary" >valider</button>
                    </form>
                    <Link to="/signUp">s'inscrire</Link>
                </div>
            </div>
        </div>


    )
}

export default SignInForm;