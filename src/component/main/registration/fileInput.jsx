import React, { useState } from 'react';
import ErrorText from '../../text/errorText';
import './style.scss';

const FileInput = ({ errors, onChange }) => {
  const LABEL_PLACEHOLDER = 'Upload your photo';
  const [labelValue, setLabelValue] = useState(LABEL_PLACEHOLDER);

  const changeHandler = (evt) => {
    const files = evt.target.files;
    setLabelValue(files.length > 0 ? files[0].name : LABEL_PLACEHOLDER);

    onChange(evt);
  };

  return (
    <>
      <div className={`upload ${!!errors ? 'upload--error' : ''}`}>
        <input
          className='upload__file'
          type='file'
          name='image_uploads'
          accept='.jpg, .jpeg,'
          multiple
          onChange={changeHandler}
          id='upload-file-input'
        />
        <label
          htmlFor='upload__file__input'
          id='upload-file-label'
          className={`upload__label ${labelValue === LABEL_PLACEHOLDER ? 'upload__label--empty' : ''}`}
        >
          {labelValue}
        </label>
        <ErrorText className='upload__helper-text' sx={{ paddingLeft: '16px', margin: '0' }}>
          {errors?.join('\n')}
        </ErrorText>
      </div>
    </>
  );
};

export default FileInput;
