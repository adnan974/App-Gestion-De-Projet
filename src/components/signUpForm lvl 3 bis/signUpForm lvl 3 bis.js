import { React, useState } from "react";
import { Link } from "react-router-dom";
import {useFormik} from "formik";
  

const SignUpForm = () => {

    const onSubmit = (values) => {
        
        
    }

    const validate = (values) => {
       
            let errors = {}

            if(!values.name){
                errors.name = 'Required'
            }

            if(!values.email){
                errors.email = 'Required'
            }

            if(!values.channel){
                errors.channel = 'Required'
            }

            return errors
        
    }


    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            channel:''
        },
        onSubmit,
        validate,
    })

    console.log("form errors :", formik.errors)


    return (
        <div className="container" id="SignInComponent" >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">S'inscrire </h5>
                    <form onSubmit={formik.handleSubmit} noValidate>
                        <div>
                            <label htmlFor="name">Nom</label>
                            <input type="text" className="form-control" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
                            {formik.errors.name && <small className="text-danger"> {formik.errors.name} </small>}
                        </div>

                        

                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" className="form-control" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
                            {formik.errors.email && <small className="text-danger"> {formik.errors.email} </small>}
                        </div>

                        <div>
                            <label htmlFor="channel">channel</label>
                            <input type="text" className="form-control" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel}/>
                            {formik.errors.channel && <small className="text-danger"> {formik.errors.channel} </small>}
                        </div>

                        

                        <button type="submit" className="btn btn-outline-primary" >valider</button>

                    </form>
                    <Link to="/signIn">se connecter</Link>
                </div>
            </div>
        </div>

    )
}

export default SignUpForm;