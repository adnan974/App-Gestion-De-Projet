import { Field } from 'formik'
import React from 'react'

function Select(props) {
    console.log(props.options)
    return (
        <div >
            <label htmlFor={props.name}>{props.labelValue}</label>
            <Field as="select" name={props.name} id={props.name} className="form-control">
                {
                    props.options.map(option => {
                        return (
                            <option key={option.id} value={option.id}> {option.libelle}</option>
                        )
                    })
                }
            </Field>

        </div>
    )
}

export default Select
