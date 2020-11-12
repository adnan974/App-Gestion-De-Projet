import { React, useState } from "react";
import { Link } from "react-router-dom";
import {Formik,Form, Field} from "formik";
import * as Yup from 'yup';
  

const SignUpForm = () => {

    const onSubmit = () =>{

    }


    const initialValues = {
        name:"",
        email:"",
        channel:"",
    }
    // Algo de validation avec Yup
    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email format").required("Required"),
        channel: Yup.string().required("Required"),
    })





    return (
        <div className="container" id="SignInComponent" >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">S'inscrire </h5>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                    <Form>
                        <div>
                            <label htmlFor="name">Nom</label>
                            <Field type="text" className="form-control" id="name" name="name" />
                            {formik.errors.name && formik.touched.name ? <small className="text-danger"> {formik.errors.name} </small> : null}
                        </div>

                        <div>
                            <label htmlFor="email">E-mail</label>
                            <Field type="email" className="form-control" id="email" name="email" />
                            {formik.errors.email && formik.touched.email ? <small className="text-danger"> {formik.errors.email} </small> : null}
                        </div>

                        <div>
                            <label htmlFor="channel">channel</label>
                            <Field type="text" className="form-control" id="channel" name="channel" />
                            {formik.errors.channel && formik.touched.channel ? <small className="text-danger"> {formik.errors.channel} </small> : null}
                        </div>

                        

                        <button type="submit" className="btn btn-outline-primary" >valider</button>

                    </Form>
                    <Link to="/signIn">se connecter</Link>
                    </Formik>
                </div>
            </div>
        </div>

    )
}

export default SignUpForm;