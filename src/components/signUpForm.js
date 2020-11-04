import React from "react";

const SignUpForm = () => {
    return(
        <form>
          <label for="lastNameInput">Nom </label>
          <input type="text" className="form-control" id="lastNameInput" />
          <label for="emailInput">Adresse e-mail</label>
          <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
      </form>
    )
}

export default SignUpForm;