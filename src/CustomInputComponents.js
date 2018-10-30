import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import * as Yup from "yup";


export const CustomInputComponent = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => (
        <div>
            <input type="text" {...field} {...props} />
            {touched[field.name] &&
                errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </div>
    );

export const CustomDatePickerComponent = ({
        field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
      }) => (
        <div>
            <DatePicker type="text" {...field} {...props} />
            {touched[field.name] &&
                errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </div>
    );

    export const SignupSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(70, 'Too Long!')
          .required('Required'),
        dob: Yup.date()
        .default(new Date(moment()))
        .max(moment().add(1, 'days'), `enDate should be equal or earlier than ${moment()}`)
        .required('End Date required'),
      });