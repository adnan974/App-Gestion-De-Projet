import React from "react";
import "./signInForm.css";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import *  as Yup from "yup";
import axios from 'axios';
import { AuthContext } from "../App";
import jwt_decode from "jwt-decode";


const SignInForm = () => {
    //  Tag : [authentification state management] 
    //  5
    const { dispatch } = React.useContext(AuthContext);
    const history = useHistory()



    const initialValues = {
        username: "",
        password: "",
    }

    const onSubmit = async (values) => {
        console.log(values);

        await axios.post("http://localhost:3000/signin", values)
            .then((res) => {
                let jwt = res.data.access_token;

                let user = jwt_decode(jwt);
                //localStorage.setItem('token', res.data.access_token);
                //  Tag : [authentification state management] 
                //  5  
                dispatch({
                    type: "LOGIN",
                    payload: {
                        token: jwt,
                        user: user
                    }
                })
                history.push("/home")
            })
            .catch(error => {
                console.log(error);
            })

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