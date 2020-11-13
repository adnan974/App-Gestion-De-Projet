import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';


const SignUpForm = () => {

    const onSubmit = () => {

    }


    const initialValues = {
        name: "",
        email: "",
        channel: "",
    }
    // Algo de validation avec Yup
    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email format").required("Required"),
        channel: Yup.string().required("Required"),
    })





    // TUTO : formik avec des composants
    return (
        <div className="container" id="SignInComponent" >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">S'inscrire </h5>

                    {/* equivalent de useFormik */}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {/* equivalent d'un <form> avec handleSubmit déjà associé */}
                        <Form>
                            <div>

                                <div>
                                    <label htmlFor="name">Nom</label>
                                    {/* Peut être (je crois) n'importe quel type de champs. par défaut, c'est un input. 
                                       - En fonction de l'attribut  as="", on peut chosiir le type de champs voulu. On peut aussi ajouter les attributs qu'on veut.
                                       Ex. ClassName
                                    */}
                                    <Field type="text" className="form-control" id="name" name="name" />

                                    {/* */}
                                    <ErrorMessage name="name" />
                                </div>

                                <div>
                                    <label htmlFor="email">E-mail</label>
                                    <Field type="email" className="form-control" id="email" name="email" />
                                    <ErrorMessage name="email" />
                                </div>

                                <div>
                                    <label htmlFor="channel">channel</label>
                                    <Field type="text" className="form-control" id="channel" name="channel" />
                                    <ErrorMessage name="channel" />
                                </div>



                                <button type="submit" className="btn btn-outline-primary" >valider</button>
                            </div>
                            <Link to="/signIn">se connecter</Link>
                        </Form>
                        
                    </Formik>
                </div>
            </div>
        </div>

    )
}

export default SignUpForm;