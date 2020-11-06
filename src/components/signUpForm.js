import React from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
    const formData = {
        lastName: null,
        firstName: null,
        email: null,
        userName: null,
        password: null,
        passwordConfirmation:null,
        errors:{
            lastName: "",
            firstName: "",
            email: "",
            userName: "",
            password: "",
            passwordConfirmation:"",
        }
    }
    return (
        <div className="container" id="SignInComponent" >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">S'inscrire </h5>
                    <form>

                        <label for="lastName">Nom</label>
                        <input type="text" className="form-control" id="lastName" />

                        <label for="fisrtName">Prenom</label>
                        <input type="text" className="form-control" id="firstName" />

                        <label for="email">E-mail</label>
                        <input type="email" className="form-control" id="email" />

                        <label for="userName">Nom d'utilisateur</label>
                        <input type="text" className="form-control" id="userName" />

                        <label for="password">Mot de passe</label>
                        <input type="password" className="form-control" id="password" />

                        <label for="passwordConfirmation">Confirmation de mot de passe</label>
                        <input type="password" className="form-control" id="passwordConfirmation" />

                        <button type="submit" className="btn btn-outline-primary" >valider</button>

                    </form>
                    <Link to="/signIn">se connecter</Link>
                </div>
            </div>
        </div>

    )
}

export default SignUpForm;