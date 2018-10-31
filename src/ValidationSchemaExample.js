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
        "startDate": moment(),
        "endDate": moment(),
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
          <Field name="startDate" component={DatePickerWrapper} />
          <ErrorMessage name="startDate" />
          <Field name="endDate" component={DatePickerWrapper} />
          <ErrorMessage name="endDate" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
