export default function sumInvalidIDs(inputString) {
  const ranges = inputString.split(",");
  let sum = 0;
  for (let range of ranges) {
    let addedPossible = [];
    const [start, end] = range.split("-");
    const startNum = parseInt(start);
    const endNum = parseInt(end);

    let startLength = start.length;
    let endLength = end.length;

    const startHalf = start.substr(0, (startLength/2));
    const endHalf = end.substr(0, Math.ceil(endLength/2));

    let possibleStart = 0;
    let possibleEnd = 0;
    let possibleMiddle = 0;

    if (startLength % 2 == 0) {
      let possible = startHalf;
      possible += possible;
      possible = parseInt(possible);
      if (possible >= start && possible <= end) {
        sum += possible;
        addedPossible.push(possible);
        possibleStart = possible;
        possibleMiddle = possible;
      }
    }

    if (endLength % 2 == 0) {
      let possible = endHalf;
      possible += possible;
      possible = parseInt(possible);
      if (possible >= start && possible <= end && !addedPossible.includes(possible)) {
        sum += possible;
        addedPossible.push(possible);
        possibleEnd = possible;
        if (possibleStart == 0) {possibleMiddle = possibleEnd;}
      }
    }

    possibleMiddle = startHalf;
    while (parseInt(possibleMiddle) <= parseInt(endHalf)) {
      let possible = possibleMiddle;
      possible += possible;
      possible = parseInt(possible);
      if (possible >= start && possible <= end && !addedPossible.includes(possible)) {
        sum += possible;
        addedPossible.push(possible);
      }
      possibleMiddle = possibleMiddle * 1 + 1 + "";
    }

    

  }
  return sum;
}