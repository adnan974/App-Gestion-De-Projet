export default function ValidateLogin(values){
    let errors = {};

    if(!values.email){
        errors.email = "L'adresse mail est obligatoire"
    }else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)){
        errors.email = "L'adresse mail est invalide"
    }

    if(!values.username){
        errors.username = "Le nom d'utilisateur est obligatoire"
    }

    return errors;
}