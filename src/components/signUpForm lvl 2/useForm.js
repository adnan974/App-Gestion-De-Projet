import { useState } from "react";

// Tag:[useForm]
const useForm = (callback, validate) => {

    // values lie les champs aux variables qu'elle contient
    const [values, setValues] = useState(
        {
            lastName: "",
            firstName: "",
            email: "",
            userName: "",
            password: "",
        }
    )

    const [errors, setErrors] = useState(
        {
            lastName: "",
            firstName: "",
            email: "",
            userName: "",
            password: "",

        }
    )

    //On affecte dans le champs qui a été modifié sa valeur dans value
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
        console.log(values)
    }

    // On vérifie si le formulaire est valide, si oui on appelle la fonction personnalisée de l'utilisateur
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values))
        callback()
    }

    return {
        values,
        handleChange,
        handleSubmit,
        errors
    }
}

export default useForm;