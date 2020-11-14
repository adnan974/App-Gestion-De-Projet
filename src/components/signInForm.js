import React from "react";
import "./signInForm.css";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import *  as Yup from "yup";

const SignInForm = () => {


    const initialValues = {
        userName: "",
        password: "",
    }

    const onSubmit = () => {
        console.log("Submitted succesfully")
    }

    const validationSchema = Yup.object({
        userName: Yup.string().required("Champs obligatoire"),
        password: Yup.string().required("Champs obligatoire")

    })

    return (
        <div className="container" id="SignInComponent" >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Connexion </h5>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        <Form>
                            <label htmlFor="userName">Nom d'utilisateur </label>
                            <Field name="userName" type="text" className="form-control" id="userName" />
                            <label htmlFor="password">Mot de passe</label>
                            <Field name="password" type="password" className="form-control" id="password" />

                            <button type="submit" className="btn btn-outline-primary" >valider</button>
                        </Form>
                    </Formik>
                    <Link to="/signUp">s'inscrire</Link>
                </div>
            </div>
        </div>


    )
}

export default SignInForm;