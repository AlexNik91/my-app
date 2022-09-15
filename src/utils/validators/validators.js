export const requiredField = (value) => {
  if (value) return undefined;
  return "Field is required";
};

export const maxLengthCreator = (maxLength) => (value) =>
  value && value.length > maxLength
    ? `Must be ${maxLength} characters or less`
    : undefined;

export const minLengthCreator = (minLength) => (value) =>
  value && value.length < minLength
    ? `Must be ${minLength} characters or more`
    : undefined;
