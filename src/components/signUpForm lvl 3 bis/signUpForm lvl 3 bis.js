import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./signUpForm.css";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useFetch } from "../../shared/useFetch";


// Tag: [Formik]
//Tuto
const SignUpForm = () => {

    const [genderData, setGenderData] = useFetch("http://localhost:3000/gender")

    const onSubmit = async (values) => {
        let userToSend = values
        userToSend.civilite = { id: values.civilite }
        Axios.post("http://localhost:3000/signup", { user: userToSend })
    }

    const initialValues = {
        prenom: "",
        nom: "",
        email: "",
        nomUtilisateur: "",
        motDePasse: "",
        civilite: ""
    }

    const validationSchema = Yup.object({
        prenom: Yup.string().required("Champs obligatoire"),
        nom: Yup.string().required("Champs obligatoire"),
        email: Yup.string().email("Le format du mail est invalide").required("Champs obligatoire"),
        nomUtilisateur: Yup.string().required("Champs obligatoire"),
        motDePasse: Yup.string().required("Champs obligatoire"),
        motDePasseConfirmation: Yup.string()
            .oneOf([Yup.ref('motDePasse'), null], 'Les mots de passes doivent être identiques').required("champs obligatoire")

    })

    return (
        <div className="container " id="signInComponent">
            {/* TAG:[Boostrap] 
                - Utiliser la classeName  "row justify-content-center"
                C'est aussi simple que ça */}
            <div className="row justify-content-center">
                <div className="col-lg-6">
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

                                        {/*tag:[Formik] : ci-dessous, comment remplir une radio box avec 
                                            des infos qui viennent d'une API */}
                                        {genderData && genderData.genders.map(gender => {
                                            return (
                                                <div key={gender.id} className="form-check">

                                                    <Field className="form-check-input" type="radio" name="civilite" id={gender.id} value={gender.id.toString()} />
                                                    <label className="form-check-label" htmlFor={gender.id.toString()}>{gender.civilite}</label>
                                                </div>
                                            )

                                        })}



                                        <div className="form-block">
                                            <label htmlFor="prenom" > Prénom </label>
                                            <Field type="text" id="prenom" name="prenom" className="form-control" />
                                            <ErrorMessage name="prenom"  >{msg => <small className="text-danger">{msg}</small>}</ErrorMessage>
                                        </div>

                                        <div className="form-block">
                                            <label htmlFor="nom" > Nom </label>
                                            <Field type="text" id="nom" name="nom" className="form-control" />
                                            <ErrorMessage name="nom" >{msg => <small className="text-danger">{msg}</small>}</ErrorMessage>
                                        </div>

                                        <div className="form-block">
                                            <label htmlFor="email" > E-mail </label>
                                            <Field type="email" id="email" name="email" className="form-control" />
                                            <ErrorMessage name="email"  >{msg => <small className="text-danger">{msg}</small>}</ErrorMessage>
                                        </div>

                                        <div className="form-block">
                                            <label htmlFor="nomUtilisateur" > Nom d'utilisateur </label>
                                            <Field type="text" id="nomUtilisateur" name="nomUtilisateur" className="form-control" />
                                            <ErrorMessage name="nomUtilisateur"  >{msg => <small className="text-danger">{msg}</small>}</ErrorMessage>
                                        </div>

                                        <div className="form-block">
                                            <label htmlFor="motDePasse" > Mot de passe</label>
                                            <Field type="motDePasse" id="motDePasse" name="motDePasse" className="form-control" />
                                            <ErrorMessage name="motDePasse" >{msg => <small className="text-danger">{msg}</small>}</ErrorMessage>
                                        </div>

                                        <div className="form-block">
                                            <label htmlFor="motDePasseConfirmation" > Confirmation mot de passe </label>
                                            <Field type="password" id="motDePasseConfirmation" name="motDePasseConfirmation" className="form-control" />
                                            <ErrorMessage name="motDePasseConfirmation"   >{msg => <small className="text-danger">{msg}</small>}</ErrorMessage>
                                        </div>


                                        <button type="submit" className="btn btn-outline-primary" > Valider </button>


                                    </Form>
                                    <Link to="/signin">Se connecter</Link>
                                </div>
                            </Formik>
                        </div>
                    </div>

                </div>

            </div>

        </div>


    )


}

export default SignUpForm;