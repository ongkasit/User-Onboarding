import React from 'react';
import { withFormik, Form, Field } from 'formik';

const userForm = (props) => {
    console.log(props)
    return (
        <Form>
            <Field type="text" name="name" placeholder="Full Name" />
            <Field type="text" name="email" placeholder="Email" />
            <Field type="text" name="password" placeholder="Enter Your Password" />
            <Field type="checkbox" name="terms" />I accept the terms and conditions. 
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
        }
    },
    handleSubmit: (values) => {
        console.log(values)
    }
})(userForm)