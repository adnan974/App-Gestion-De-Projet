import React from "react";

const SignInForm = () => {
    return(
        <form>
          <label for="userName">Nom d'utilisateur </label>
          <input type="text" className="form-control" id="userName" />
          <label for="passwordInput">Mot de passe</label>
          <input type="password" className="form-control" id="passwordInput" />
      </form>
    )
}

export default SignInForm;