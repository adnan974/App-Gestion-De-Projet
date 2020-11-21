import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./signUpForm.css";
import * as Yup from "yup";
import { Link } from "react-router-dom";



const SignUpForm = () => {

    const onSubmit = () => {
        // evoie des données à nest js
        console.log("submited successfully")
    }

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required("Champs obligatoire"),
        lastName: Yup.string().required("Champs obligatoire"),
        email: Yup.string().email("Le format du mail est invalide").required("Champs obligatoire"),
        userName: Yup.string().required("Champs obligatoire"),
        password: Yup.string().required("Champs obligatoire"),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Les mots de passes doivent être identiques').required("champs obligatoire")

    })

    return (
        <div className="container" id="signInComponent">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"> S'inscrire </h5>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}

                    >
                        <div>
                            <Form>
                                <div className="form-block">
                                    <label htmlFor="firstName" > Prénom </label>
                                    <Field type="text" id="firstName" name="firstName" className="form-control" />
                                    <ErrorMessage name="firstName"  >{msg => <small className="text-danger">{msg}</small>}</ErrorMessage>
                                </div>

                                <div className="form-block">
                                    <label htmlFor="lastName" > Nom </label>
                                    <Field type="text" id="lastName" name="lastName" className="form-control" />
                                    <ErrorMessage name="lastName" >{msg => <small className="text-danger">{msg}</small>}</ErrorMessage>

                                </div>

                                <div className="form-block">
                                    <label htmlFor="email" > E-mail </label>
                                    <Field type="email" id="email" name="email" className="form-control" />
                                    <ErrorMessage name="email"  >{msg => <small className="text-danger">{msg}</small>}</ErrorMessage>

                                </div>

                                <div className="form-block">
                                    <label htmlFor="userName" > Nom d'utilisateur </label>
                                    <Field type="text" id="userName" name="userName" className="form-control" />
                                    <ErrorMessage name="userName"  >{msg => <small className="text-danger">{msg}</small>}</ErrorMessage>

                                </div>

                                <div className="form-block">
                                    <label htmlFor="password" > Mot de passe</label>
                                    <Field type="password" id="password" name="password" className="form-control" />
                                    <ErrorMessage name="password" >{msg => <small className="text-danger">{msg}</small>}</ErrorMessage>

                                </div>

                                <div className="form-block">
                                    <label htmlFor="passwordConfirmation" > Confirmation mot de passe </label>
                                    <Field type="password" id="passwordConfirmation" name="passwordConfirmation" className="form-control" />
                                    <ErrorMessage name="passwordConfirmation"   >{msg => <small className="text-danger">{msg}</small>}</ErrorMessage>

                                </div>
                                <button type="submit" className="btn btn-outline-primary" > Valider </button>


                            </Form>
                            <Link to="/signin">Se connecter</Link>
                        </div>
                    </Formik>
                </div>
            </div>
        </div>


    )


}

export default SignUpForm;