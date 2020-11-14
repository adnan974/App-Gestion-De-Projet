import {React,useState} from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
    

    const [formData,setFormData] = useState({
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
    });

    const handleChange = (e) =>{
        const {name,value} = e.target
       
        setFormData({...formData,errors:{...formData.errors,lastName:"",userName:"",email:""}})
        switch(name){
            case "userName":
                if(value.length < 5){
                   // formData.errors.lastName = "test"
                    setFormData({...formData,errors:{...formData.errors,userName:"erreur, le nom d'utlisateur est trop petit"}})
                    console.log(formData)
                    
                }
                break
                
            case "email":
                if(value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) === null){
                    console.log("email invalide")
                    setFormData({...formData,errors:{...formData.errors,email:"erreur: email invalide"}})
                    
                }
                break
        }
    }
    
    return (
        <div className="container" id="SignInComponent" >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">S'inscrire </h5>
                    <form>

                        <label htmlFor="lastName">Nom</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" onChange={handleChange}/>
                        {formData.errors.lastName && <p>{formData.errors.lastName}</p>}

                        <label htmlFor="fisrtName">Prenom</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" onChange={handleChange} />

                        <label htmlFor="email">E-mail</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={handleChange} />
                        {formData.errors.email && <p>{formData.errors.email}</p>}

                        
                        <label htmlFor="userName">Nom d'utilisateur</label>
                        <input type="text" className="form-control" id="userName" name="userName" onChange={handleChange}/>
                        {formData.errors.userName && <p>{formData.errors.userName}</p>}

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