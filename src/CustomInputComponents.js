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

    function gratterThan(ref, msg) {
        return this.test({
            name: 'gratterThan',
            exclusive: false,
        message: msg || '${path} must be gratter than ${reference}',
            params: {
                reference: ref.path
            },
            test: function(value) {
                return this.resolve(ref).toString()==="Invalid Date" || value >= this.resolve(ref) 
            }
        })
    };

    function lesserThan(ref, msg) {
        return this.test({
            name: 'lesserThan',
            exclusive: false,
        message: msg || '${path} must be lesser than ${reference}',
            params: {
                reference: ref.path
            },
            test: function(value) {
                debugger;
                return this.resolve(ref).toString()==="Invalid Date"||value <= this.resolve(ref) 
            }
        })
    };

    
    Yup.addMethod(Yup.date, 'lesserThan', lesserThan);
    Yup.addMethod(Yup.date, 'gratterThan', gratterThan);

    export const SignupSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(70, 'Too Long!')
          .required('Required'),
        "startDate": Yup.date()
        .default(new Date(moment()))
        .max(moment().add(6, 'years'), "Min Start Date enables upto Past 6 years")
        .required('End Date required')
        .lesserThan(Yup.ref('endDate'),"Start Date should be lesser than or equals to End Date")
        .typeError("Start Date Required"),
        "endDate": Yup.date()
        .default(new Date(moment()))
        .max(moment().add(6, 'years'), "Min End Date enables upto Past 6 years")
        .required('End Date required')
        .gratterThan(Yup.ref('startDate'),"End Date Should be gratter than or equals to Start Date")
        .typeError("End Date Required")
      });
