function getFib() {
  const arr = [1,1]
  const thousand = []
  let inc = 1
  while(thousand.length === 0) {
    arr.push(arr[inc] + arr[inc - 1])
    if(arr[inc].toString().length === 4) {
      thousand.push(inc)
      break;
    }

    inc++
  }

  return arr
}

console.log(getFib())
