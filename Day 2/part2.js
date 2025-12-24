export default function sumInvalidIDs2(inputString) {
  const ranges = inputString.split(",");
  let sum = 0;
  for (let range of ranges) {
    let addedPossible = [];
    const [start, end] = range.split("-");
    const startNum = parseInt(start);
    const endNum = parseInt(end);

    let startLength = start.length;
    let endLength = end.length;
    let portioner = 2;

    do {
      const startPortion = start.substr(0, Math.floor(startLength/portioner));
      const endPortion = end.substr(0, Math.ceil(endLength/portioner));

      let possibleStart = 0;
      let possibleEnd = 0;
      let possibleMiddle = 0;
      
      for (let i = 2; i <= portioner; i++) {
        if (endLength % portioner == 0) {
          let possible = endPortion;
          possible = possible.repeat(i);
          possible = parseInt(possible);
          if (possible >= start && possible <= end && !addedPossible.includes(possible)) {
            sum += possible;
            addedPossible.push(possible);
            possibleEnd = possible;
            if (possibleStart == 0) {possibleMiddle = possibleEnd;}
          }
        }

        possibleMiddle = startPortion;
        while (parseInt(possibleMiddle) <= parseInt(endPortion)) {
          let possible = possibleMiddle;
          possible = possible.repeat(i);
          possible = parseInt(possible);
          if (possible >= start && possible <= end && !addedPossible.includes(possible)) {
            sum += possible;
            addedPossible.push(possible);
          }
          possibleMiddle = possibleMiddle * 1 + 1 + "";
        }
      }
      portioner++;
    } while (portioner <= endLength && portioner > 2)
    

  }
  return sum;
}