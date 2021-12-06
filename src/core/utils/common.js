export const cloneDeep = (objectToClone) => {
  return JSON.parse(JSON.stringify(objectToClone));
};