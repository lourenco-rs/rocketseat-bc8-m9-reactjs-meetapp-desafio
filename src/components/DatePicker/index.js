import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';
import { useField } from '@rocketseat/unform';

import { ReactDatePicker } from './styles';

export default function DatePicker({ name, placeholder, selectedDate }) {
  const ref = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  const [selected, setSelected] = useState(
    selectedDate ? parseISO(selectedDate) : new Date()
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
    // eslint-disable-next-line
  }, [ref.current, fieldName]);

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        minDate={new Date()}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="dd/MM/yyyy - HH:mm"
        ref={ref}
        placeholderText={placeholder}
        autoComplete="off"
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  selectedDate: PropTypes.string,
};

DatePicker.defaultProps = {
  selectedDate: null,
};
