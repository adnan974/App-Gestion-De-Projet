import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';


const SignUpForm = () => {

    const onSubmit = () => {

    }
    // Algo de validation avec Yup
    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email format").required("Required"),
        channel: Yup.string().required("Required"),
    })


    // TUTO FORMIK : Ceci est un formulaire complet avec la methode 1 d'utilisation de Formik
    // formik.values contient les valeurs des input
    // formik.touched contient les valeurs des champs. Vrai si déjà utilisé, faux sinon
    // formik.errors contient les errors de formik

    // Fonctions sympas : OnBlur = {formik.handleBlur} => renvoie dans l'objet formik.touched 
    //  si le champs a été utilisé (true) ou non (false).
    // Utile nottament si on veut faire de la gestion de validation de formulaire seulement sur les champs utilisés 
    // par l'utilisateur

    const formik = useFormik({
        // Initialisation des valeurs
        initialValues: {
            name: '',
            email: '',
            channel: ''
        },

        // fonction exécuté après formik.handleSubmit
        onSubmit,

        // Fonction utilisée avec un handleChange et Submit. 
        validationSchema,
    })



    return (
        <div className="container" id="SignInComponent" >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">S'inscrire </h5>


                    <form onSubmit={formik.handleSubmit} noValidate>
                        <div>
                            <label htmlFor="name">Nom</label>
                            <input type="text" className="form-control" id="name" name="name" {...formik.getFieldProps("name")} />
                            {formik.errors.name && formik.touched.name ? <small className="text-danger"> {formik.errors.name} </small> : null}
                        </div>

                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" className="form-control" id="email" name="email" {...formik.getFieldProps("email")} />
                            {formik.errors.email && formik.touched.email ? <small className="text-danger"> {formik.errors.email} </small> : null}
                        </div>

                        <div>
                            <label htmlFor="channel">channel</label>
                            <input type="text" className="form-control" id="channel" name="channel" {...formik.getFieldProps("channel")} />
                            {formik.errors.channel && formik.touched.channel ? <small className="text-danger"> {formik.errors.channel} </small> : null}
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