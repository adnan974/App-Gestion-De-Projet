import {React,useState} from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import Validate from "./validateLogin"

const SignUpForm = () => {

    const submit = () =>{
        console.log("submited succesfully")
    }

    const {values,handleChange,handleSubmit} = useForm(submit,Validate);
    
    return (
        <div className="container" id="SignInComponent" >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">S'inscrire </h5>
                    <form onSubmit={handleSubmit} noValidate>

                        <label htmlFor="lastName">Nom</label>
                        <input type="text" className="form-control" id="lastName" name="lastName"  onChange={handleChange}/>

                        <label htmlFor="fisrtName">Prenom</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" onChange={handleChange} />

                        <label htmlFor="email">E-mail</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={handleChange} />

                        
                        <label htmlFor="userName">Nom d'utilisateur</label>
                        <input type="text" className="form-control" id="userName" name="userName" onChange={handleChange}/>

                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={handleChange}/>

                        <label htmlFor="passwordConfirmation">Confirmation de mot de passe</label>
                        <input type="password" className="form-control" id="passwordConfirmation"  name="passwordConfirmation" onChange={handleChange}/>

                        <button type="submit" className="btn btn-outline-primary" >valider</button>

                    </form>
                    <Link to="/signIn">se connecter</Link>
                </div>
            </div>
        </div>

    )
}

export default SignUpForm;