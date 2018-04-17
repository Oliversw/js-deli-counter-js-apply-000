const takeANumber = function(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
} 

/*
const takeANumberVariant = function(line) {
  let number = line.length + 1;
  currentCustomer.push(number);
  return `Welcome, you are number ${number}. You are number ${line.length} in line.`
}
*/

const nowServing = function(line) {
  if (line.length > 0) {
    //removes and returns the first name in the array
    return `Currently serving ${line.shift()}.`
  } else {
    return "There is nobody waiting to be served!";
  }
}

const currentLine = function(line) {
  if (line.length > 0) {
    let results =["The line is currently:"];
    for (let i = 0; i < line.length; i++) {
      //push the number in line of the current person to the array
      results.push(`${i+1}.`);
      //check if it is the last person in line, and decide accordingly whether a comma is necessary after pushing the name to the array
      if (i + 1 !== line.length) {
        results.push(`${line[i]},`);
      } else {
        results.push(line[i]);
      }
    }
    return results.join(" ");
  } else {
    return "The line is currently empty.";
  }
}