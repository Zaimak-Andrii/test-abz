export const validateName = (value) => {
  let error = [];
  if (value.length < 2) error.push('The name must be at least 2 characters.');
  if (value.length > 60) error.push('The name must be at less 60 characters.');

  return error.length > 0 ? error : null;
};

export const validateEmail = (value) => {
  let error = [];
  if (
    value.length < 2 ||
    value.length > 100 ||
    !value.match(
      '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])'
      //"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    )
  )
    error.push('The email must be a valid email address.');

  return error.length > 0 ? error : null;
};

export const validatePhone = (value) => {
  let error = [];

  if (!value.match('^[+]{0,1}380([0-9]{9})$')) error.push('The phone field is required.');

  return error.length > 0 ? error : null;
};

export const validatePosition = (value) => {
  return isNaN(value) ? ['The position id must be an integer.'] : null;
};

export const validatePhoto = async (photo) => {
  const MB_LIMIT = 5;
  const IMAGE_MIN_SIZE = 70;
  const error = [];

  if (photo.size > 1024 * 1024 * MB_LIMIT) error.push('The photo may not be greater than 5 Mbytes.');
  if (photo.type !== 'image/jpeg' && photo.type !== 'image/jpg') error.push('The photo should be jpg/jpeg image.');

  const promise = new Promise((resolve) => {
    const img = new Image();

    img.onload = function () {
      return resolve({ width: this.width, height: this.height });
    };
    img.src = URL.createObjectURL(photo);
  });

  const resolution = await promise;

  if (resolution.width < IMAGE_MIN_SIZE || resolution.height < IMAGE_MIN_SIZE) {
    error.push('Minimum resolution of photo 70x70px.');
  }

  return error.length > 0 ? error : null;
};
