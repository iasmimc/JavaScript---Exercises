//Create a function that checks if the argument is an integer or a string. Return "int" if it's an integer and "str" if it's a string.

const stringOrInteger = (value) => {
  return typeof value === `number`
    ? `integer`
    : typeof value === `string`
    ? `string`
    : `nor a string nor an integer`;
};
console.log(`Your Type is: ${stringOrInteger(true)}`);
