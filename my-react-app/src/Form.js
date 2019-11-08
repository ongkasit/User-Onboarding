import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';

const userForm = (props) => {
    console.log(props)
    return (
        <Form>
            {props.touched.name && props.errors.name && <p className="error">{props.errors.name}</p>}
            <Field type="text" name="name" placeholder="Full Name" />

            {props.touched.email && props.errors.email && <p className="error">{props.errors.email}</p>}
            <Field type="text" name="email" placeholder="Email" />
            
            {props.touched.password && props.errors.password && <p className="error">{props.errors.password}</p>}
            <Field type="text" name="password" placeholder="Enter Your Password" />

            {props.touched.terms && props.errors.terms && <p className="error">{props.errors.terms}</p>}
            <Field type="checkbox" name="terms" />
            <span>I accept the terms and conditions.</span> 
            <button type="submit">submit</button>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            name: values.name || '',
            email: values.email || '',
            password: values.password || '',
            terms: values.terms || false
        }
    },
    validationSchema: yup.object().shape({
        name: yup.string().required('name is required!'),
        email: yup.string().required('email is required!'),
        password: yup.string().required('password is required!'),
        terms: yup.boolean().oneOf([true])
    }),
    handleSubmit: (values) => {
        console.log(values)
    }
})(userForm)