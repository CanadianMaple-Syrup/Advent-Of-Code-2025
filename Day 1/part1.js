export default function lockRotations(inputString) {
  let inputs = inputString.split("\n");
  let position = 50
  let password = 0
  for (let input of inputs) {
    let direction = input[0];
    let value = parseInt(input.substr(1))
    let diff = value % 100
    
    //Update the position correctly
    if (direction == "L") {
      position -= diff
      if (position < 0) {
        position += 100
      }
    }
    else if (direction == "R") {
      position += diff
      if (position > 99) {
        position -= 100
      }
    }

    if (position == 0) {
      password++
    }
  }
  return password
}


