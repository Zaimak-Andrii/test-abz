import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const changeHandler = (evt) => setValue(evt.target.value);
  const resetHandler = () => setValue('');

  return {
    value: value,
    onChange: changeHandler,
    reset: resetHandler,
  };
};

export default useInput;
