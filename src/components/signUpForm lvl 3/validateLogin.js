export default function ValidateLogin(values){
    let errors = {};
    console.log("error handler")
    console.log(values)
    if(!values.email){
        errors.email = "L'adresse mail est obligatoire"
    }else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){
        errors.email = "L'adresse mail est invalide"
    }

    if(!values.userName){
        errors.userName = "Le nom d'utilisateur est obligatoire"
    }

    return errors;
}