
export default (...theArgs) => {
  return theArgs.reduce((left, right) => {
    return Object.assign({},left, right);
  });
}
