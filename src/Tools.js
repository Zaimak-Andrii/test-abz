export const jumpTo = (id) => {
  const to = document.getElementById(id).offsetTop;
  window.scrollTo(0, to);
};

export const convertErrorToString = (error) => {
  return JSON.stringify(error.success === undefined ? { message: error.message } : error);
};
