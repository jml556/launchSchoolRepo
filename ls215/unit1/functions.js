/*
function totalArea(arr) {

  function getArea(arr) {
    const [height, width] = arr
    return height * width
  }

  return arr.map(item => {
    return getArea(item)
  }).reduce((acc, ele) => acc + ele)
}

function totalSquareArea(arr) {
  function isSquare(arr) {
    const [height, width] = arr;
    return height === width ? true : false
  }

  return arr.map(item => {
    if(isSquare(item)) {
      return item[0] * item[0]
    }
    else {
      return 0
    }
  }).reduce((acc, ele) => acc + ele)
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles))    // 121

let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

function processReleaseData(arr) {
  return arr.map(obj => {
    if(obj.id && obj.title) {
      return obj
    }
    return undefined
  }).filter(item => item)
}

console.log(processReleaseData(newReleases))


function octalToDecimal(string) {
  const numArr = string.split('').map(item => parseInt(item)).reverse()

  let total = 0;
  let expo = 0;

  for(let i = 0; i < numArr.length; i++) {
    total += numArr[i] * 8 ** expo
    expo++ 
  }

  console.log(total)
}

octalToDecimal('2047')

*/

function anagram(word, list) {
  //iterate through the list of words and create an obj that contains the letter count in the array
  //iterate through the list from one and check if the letter counts are equal

  const wordCounts = list.slice().map(word => {
    const obj = {}
    obj[word] = {}
    word.split('').forEach(letter => {
      if(!obj[word][letter]) obj[word][letter] = 1;
      else {
        obj[word][letter]++
      }
    })
    return obj
  })
  const wordObj = {}

  word.split('').forEach(letter => {
    if(!wordObj[letter]) wordObj[letter] = 1;
    else {
      wordObj[letter]++
    }
  })
  console.log(wordCounts)
  return Object.entries(wordCounts.filter(obj => {
    for(const key in wordObj) {
      const newObj = Object.entries(obj)[0][1]
      if(wordObj[key] != newObj[key]) return false
    }
    return true
  }))
}

console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]