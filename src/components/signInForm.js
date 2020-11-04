import React from "react";
import "./signInForm.css";

const SignInForm = () => {
    return (
        <div className="container" id="SignInComponent" >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Connexion </h5>
                    <form>
                        <label for="userName">Nom d'utilisateur </label>
                        <input type="text" className="form-control" id="userName" />
                        <label for="passwordInput">Mot de passe</label>
                        <input type="password" className="form-control" id="passwordInput" />
                    </form>
                </div>
            </div>
        </div>


    )
}

export default SignInForm;