import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import Modal from 'react-bootstrap/Modal'
import Select from "../select";
import { useFetch } from "../../shared/useFetch";

// TAG:[CRUD]
// Ceci est le formulaire commun qui sera affiché pour l'update et l'ajout d'un projet
function ProjectForm(props) {

    const [projectStateData] = useFetch("http://localhost:3000/projectstate")


    // Utile pour la validation du formulaire commun à l'ajout et à l'update
    const validationSchema = Yup.object({
        titre: Yup.string().required("Champs obligatoire"),
        description: Yup.string().required("Champs obligatoire"),
    })

    // Appele un onSubmit personnalisé en fonction de si c'est addProject ou updateProject qui l'appelle
    const onSubmit = (values) => {
        props.onSubmit(values)
    }

    // Appele un close (au moment de quitter la page modale) personnalisé en fonction 
    // de si c'est addProject ou updateProject qui l'appelle
    const close = () => {
        props.closeCallback(false)
    }







    return (
        <div>
            <Modal
                show={props.show}
                onHide={() => close()}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {props.title}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Formik
                        initialValues={props.initialValues}

                        onSubmit={onSubmit}
                        validationSchema={validationSchema}

                    >
                        <Form>
                            <div className="modal-body">

                                <div className="form-block">
                                    <label htmlFor="titre" > Titre </label>
                                    <Field type="text" id="titre" name="titre" className="form-control" />
                                    <ErrorMessage name="titre"  >{msg => <small className="text-danger">{msg}</small>}</ErrorMessage>
                                </div>
                                <div className="form-block">
                                    <label htmlFor="description" > Description </label>
                                    <Field type="text" id="description" name="description" className="form-control" />
                                    <ErrorMessage name="description"  >{msg => <small className="text-danger">{msg}</small>}</ErrorMessage>
                                </div>
                                {/* A FAIRE: Au lieu de transmettre les données des états directement dans props, je devrai utiliser une classe
                                qui transforme les id en clé et les libellée en valeur. Sinon le composant <select> je pourra pas etre
                                génrique. Voir composant pour plus de détails */}
                                <div className="form-block">
                                    {/* projectStateData && <Select labelValue="etatProjet" name="etatProjet.id" options={projectStateData.projectStateData}></Select> */}
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={close}>Fermer</button>
                                <button type="submit" className="btn btn-primary" >Valider</button>
                            </div>

                        </Form>
                    </Formik>

                </Modal.Body>
            </Modal>


        </div>
    )
}

export default ProjectForm
