export const toHTML5Date = (date = new Date()) => {
  const now = () => (date).toLocaleDateString();

  return now().toString().split('/').reverse().join('-');
};
