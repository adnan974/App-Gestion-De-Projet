import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import Modal from 'react-bootstrap/Modal'


function TaskForm(props) {

    const validationSchema = Yup.object({
        libelle: Yup.string().required("Champs obligatoire"),
        description: Yup.string().required("Champs obligatoire"),
    })

    const onSubmit = (values) => {
        props.onSubmit(values)
    }

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
                                    <label htmlFor="libelle" > Libelle </label>
                                    <Field type="text" id="libelle" name="libelle" className="form-control" />
                                    <ErrorMessage name="libelle"  >{msg => <small className="text-danger">{msg}</small>}</ErrorMessage>
                                </div>
                                <div className="form-block">
                                    <label htmlFor="description" > Description </label>
                                    <Field type="text" id="description" name="description" className="form-control" />
                                    <ErrorMessage name="description"  >{msg => <small className="text-danger">{msg}</small>}</ErrorMessage>
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

export default TaskForm
