import {useCallback, useState} from "react";


const useForm = (callback,validate)=>{
    const [values,setValues] = useState(
        {
            lastName:"",
            firstName:"",
            email:"",
            username:"",
            password:"",

        }
    )

    const [errors,setErrors] = useState(
        {
            lastName:"",
            firstName:"",
            email:"",
            username:"",
            password:"",

        }
    )

    const handleChange = (e) => {
        const {name,value} = e.target
        setValues({...values,[name]:value})
        console.log(values)
    }

    const handleSubmit = (e) =>{
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