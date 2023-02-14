import React from 'react';
import Select from 'react-select';
import { selectInputStyles } from './SelectInputStyles';

export const SelectField = ({ options, field, form }) => (
  <Select
    options={options}
    styles={selectInputStyles}
    name={field.name}
    value={options ? options.find(option => option.id === field.value) : ''}
    onChange={(option) => form.setFieldValue(field.name, option.value)}
    onBlur={field.onBlur}
    required
  />
);
