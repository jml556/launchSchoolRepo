/*
function getCount(string) {
  const obj = {}
  string.split('').forEach(ele => {
    if(ele === ' ') return;
    obj[ele] ? obj[ele] ++ : obj[ele] = 1
  })
  return obj
}

function isDuplicates(obj) {
  for(const key in obj) {
    if(obj[key] > 1) {
      return false;
    }
  }
  return true;
}


function isUnique(string) {
  const lowerCased = string.toLowerCase()
  const counts = getCount(lowerCased)
  return isDuplicates(counts)
}

console.log(isUnique('the ap @'))
*/

function sortOnWords(arr) {
  const copyArr = arr.slice()
  const obj = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    7: 'seven'
  }

  return copyArr.sort((a, b) => obj[a] < obj[b])
}

console.log(sortOnWords([1,2,3,4,7]))