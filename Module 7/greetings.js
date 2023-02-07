// Greet function practice

export default function greet(name) {
// Check to see if the name is null (absence of value). Undefined means we could be passing an undefined variable,
// so this should also be accounted for.
  if (name === null || name === undefined) return 'Hello there!';
// If the passing argument is an array, grab the list, else continue
  if (typeof name === typeof []) {
    if (name.length > 0) {
      // Build the list of names with a comma
      let names = '';
      name.forEach((elm) => {
        names += ', ' + elm;
      });
      return 'Hello' + names;
    }
    // This is unncessary since its covered in the first if statement but its good practice if no name is given.
    return 'Hello there!';
  }
  // This assumes the name is upper case, in which we will shout back as a greeting
  if (name === name.toUpperCase()) {
    return 'HELLO ' + name + '!';
  }

  // last but not least, if a single name is given, lower case, we will simply greet them.
  return 'Hello, ' + name;
}
