import React from "react";
import "./signInForm.css";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import *  as Yup from "yup";

const SignInForm = () => {

    const history = useHistory()

    const initialValues = {
        userName: "",
        password: "",
    }

    const onSubmit = () => {
        history.push("/home")
    }

    const validationSchema = Yup.object({
        username: Yup.string().required("Champs obligatoire"),
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
                            <div>
                                <label htmlFor="username">Nom d'utilisateur </label>
                                <Field name="username" type="text" className="form-control" id="username" />
                                <ErrorMessage name="username">{(msg) => <small className="text-danger"> {msg} </small>}</ErrorMessage>
                            </div>

                            <div>
                                <label htmlFor="password">Mot de passe</label>
                                <Field name="password" type="password" className="form-control" id="password" />
                                <ErrorMessage name="password">{(msg) => <small className="text-danger"> {msg} </small>}</ErrorMessage>
                            </div>



                            <button type="submit" className="btn btn-outline-primary" >valider</button>


                        </Form>
                    </Formik>
                    <Link to="/signup">s'inscrire</Link>
                </div>
            </div>
        </div>


    )
}

export default SignInForm;