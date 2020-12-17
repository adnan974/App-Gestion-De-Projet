import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";

import * as Yup from "yup";
import Modal from 'react-bootstrap/Modal'
import { useFetch } from "../../shared/useFetch";
import { PROJECT_STATE_TERMINE, PROJECT_STATE_EN_COURS } from "../../constants"
import "./projectForm.css"
import TagListTest from "../projectTag/tagList";
import TagList from "../projectTag/tagList";

// TAG:[CRUD]
// Ceci est le formulaire commun qui sera affiché pour l'update et l'ajout d'un projet
function ProjectForm(props) {

    const [projectStateData] = useFetch("http://localhost:3000/projectstate");
    const [selectedTag, setSelectedTag] = useState([]);
    const [showTagList, setShowTagList] = useState(false);


    // Utile pour la validation du formulaire commun à l'ajout et à l'update
    const validationSchema = Yup.object({
        titre: Yup.string().required("Champs obligatoire"),
        description: Yup.string().required("Champs obligatoire"),
    })

    // Appele un onSubmit personnalisé en fonction de si c'est addProject ou updateProject qui l'appelle
    const onSubmit = (values) => {
        const refactoredValues = { ...values, etatProjet: { id: parseInt(values.etatProjet) } }
        console.log(refactoredValues)
        props.onSubmit(refactoredValues)
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
                                {/* A FAIRE: Créer un select générique ? Il faudrait un composant qui prend comme props
                                     un id de la balise, un tableau avec des clés et des valeurs*/}
                                <div className="form-block">
                                    {projectStateData &&
                                        <div>
                                            <label htmlFor="etatProjet">Etat projet</label>
                                            <Field as="select" name="etatProjet" id="etatProjet" className="form-control">

                                                {
                                                    projectStateData.projectStateData.map(option => {
                                                        return (

                                                            < option key={option.id} value={option.id}  > {option.libelle}</option>

                                                        )
                                                    })
                                                }
                                            </Field>
                                        </div>
                                    }

                                </div>
                                <div id="tagprojet">
                                    <div onClick={() => setShowTagList(true)} className="form-block" >
                                        {console.log("selectedTag project Form")}

                                        {console.log(selectedTag)}
                                        Pour tag ( construction )
                                        {selectedTag.map(tag => {
                                            return (
                                                <span> {tag.libelle} </span>
                                            )
                                        })}
                                    </div>
                                    {/*Attention: j'ai séparé cette partie e la div d'en haut car elle contient ausis un evenement 
                                    onClick. Si je met cette partie dans la div, l'évenement se déclachera mais en premier (voir eventbubling) */}
                                    {showTagList && <TagList showTagList={showTagList} setShowTagList={setShowTagList} selectedTag={selectedTag} setSelectedTag={setSelectedTag} for="project" />}

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


        </div >
    )
}

export default ProjectForm
