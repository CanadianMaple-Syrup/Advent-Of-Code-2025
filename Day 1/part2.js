export default function lockRotations2(inputString) {
  let inputs = inputString.split("\n");
  let position = 50
  let password = 0
  for (let input of inputs) {
    let direction = input[0];
    let value = parseInt(input.substr(1))
    let diff = value % 100
    let loops = Math.floor(value/100)
    //nsole.log("Input: " + input)
    //nsole.log("Diff: " + diff)
    //nsole.log("loops: " + loops)
    
    //Calculate the passes of 0
    password += loops
    
    //Update the position correctly
    if (direction == "L") {
      position -= diff
      if (position < 0) {
        if ((position + diff) != 0) {
            password += 1    
        }
        position += 100
      }
      if (position == 0 && (position+ diff) != 0) {
          password += 1
      }
    }
    else if (direction == "R") {
      position += diff
      if (position > 99) {
        position -= 100
        password += 1
      }
    }
    //console.log("Updated Position: " + position)
  }
  return password
}

