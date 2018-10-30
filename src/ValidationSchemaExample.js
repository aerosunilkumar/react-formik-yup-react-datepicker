import React from 'react';
import { Formik, Form, Field,ErrorMessage  } from 'formik';
import {CustomInputComponent,SignupSchema} from './CustomInputComponents';
import DatePickerWrapper from './DatePickerWrapper';
import moment from 'moment';


export const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        name: '',
        dob: moment(),
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        debugger;
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" component={CustomInputComponent}  />
          <Field name="dob" component={DatePickerWrapper} />
         <ErrorMessage name="dob" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);