import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

const DatePickerWrapper = (props) => {

  const handleChange = (date) => {
    props.form.setFieldValue(props.field.name, date)
  }

  return (
    <DatePicker
      selected={props.field.value}
      onChange={handleChange}
      minDate={moment()}
      isClearable={true}
    />
  )
}

export default DatePickerWrapper