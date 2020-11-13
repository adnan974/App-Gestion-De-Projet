import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./signInForm.css";
import * as Yup from "yup";


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
        confirmPassword: Yup.string().required("Champs obligatoire"),
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

                        <Form>
                            <div>
                                <label htmlFor="firstName" > Prénom </label>
                                <Field type="text" id="firstName" name="firstName" className="form-control" />
                                <ErrorMessage name="firstName"  >{msg => <small className = "text-danger">{msg}</small>}</ErrorMessage>
                            </div>

                            <div>
                                <label htmlFor="lastName" > Nom </label>
                                <Field type="text" id="lastName" name="lastName" className="form-control" />
                                <ErrorMessage name="lastName" >{msg => <small className = "text-danger">{msg}</small>}</ErrorMessage>

                            </div>
                            
                            <div>
                                <label htmlFor="email" > E-mail </label>
                                <Field type="email" id="email" name="email" className="form-control" />
                                <ErrorMessage name="email"  >{msg => <small className = "text-danger">{msg}</small>}</ErrorMessage>

                            </div>

                            <div>
                                <label htmlFor="userName" > Nom d'utilisateur </label>
                                <Field type="text" id="userName" name="userName" className="form-control" />
                                <ErrorMessage name="userName"  >{msg => <small className = "text-danger">{msg}</small>}</ErrorMessage>

                            </div>
                            
                            <div>
                                <label htmlFor="password" > Mot de passe</label>
                                <Field type="password" id="password" name="password" className="form-control" />
                                <ErrorMessage name="password" >{msg => <small className = "text-danger">{msg}</small>}</ErrorMessage>

                            </div>
                            
                            <div>
                                <label htmlFor="confirmPassword" > Confirmation mot de passe </label>
                                <Field type="password" id="confirmPassword" name="confirmPassword" className="form-control" />
                                <ErrorMessage name="confirmPassword"   >{msg => <small className = "text-danger">{msg}</small>}</ErrorMessage>

                            </div>
                            
                            <button type="submit" className="btn btn-outline-primary" > Valider </button>

                        </Form>


                    </Formik>
                </div>
            </div>
        </div>


    )


}

export default SignUpForm;