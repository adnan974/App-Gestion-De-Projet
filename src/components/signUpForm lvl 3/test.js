import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

//import './styles.css';

const initialState = {
    values: {},
    errors: {},
    submitted: false,
};

function validationReducer(state, action) {
    switch (action.type) {
        case 'change':
            const values = { ...state.values, ...action.payload };
            return {
                ...state,
                values,
                errors: {}, // TODO: Still need to implement
            };
        case 'submit':
            return { ...state, submitted: true };
        default:
            throw new Error('Unknown action type');
    }
}

const useValidation = config => {
    const [state, dispatch] = useReducer(validationReducer, initialState);

    return {
        errors: state.errors,
        getFormProps: e => { }, // TODO: Still need to implement
        getFieldProps: fieldName => ({
            onChange: e => {
                const { value } = e.target;
                if (!config.fields[fieldName]) {
                    return;
                }
                dispatch({
                    type: 'change',
                    payload: { [fieldName]: value },
                });
            },
            name: fieldName,
            value: state.values[fieldName],
        }),
    };
};

const config = {
    fields: {
        username: {
            isRequired: { message: 'Please fill out a username' },
        },
        password: {
            isRequired: { message: 'Please fill out a password' },
            isMinLength: { value: 6, message: 'Please make it more secure' },
        },
    },
    onSubmit: e => {
        /* handle submit */
    },
};
const LoginForm = () => {
    const { getFieldProps, getFormProps, errors } = useValidation(config);
    return (
        <form {...getFormProps()}>
            <div>
                <label>
                    Username
          <br />
                    <input {...getFieldProps('username')} />
                    {errors.username && <div className="error">{errors.username}</div>}
                </label>
            </div>
            <div>
                <label>
                    Password
          <br />
                    <input type="password" {...getFieldProps('password')} />
                    {errors.password && <div className="error">{errors.password}</div>}
                </label>
            </div>
            <button type="submit">Submit my form</button>
        </form>
    );
};

export default { LoginForm };
