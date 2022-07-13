import React, { useEffect, useRef, useState } from 'react';

const ControlledTextArea = ({ value, onChange, ...rest }) => {
  const [cursor, setCursor] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const input = ref.current;
    if (input) input.setSelectionRange(cursor, cursor);
  }, [ref, cursor, value]);

  const handleChange = e => {
    setCursor(e.target.selectionStart);
    onChange && onChange(e);
  };

  return <textarea ref={ref} value={value} onChange={handleChange} {...rest} />;
};

export default ControlledTextArea;
