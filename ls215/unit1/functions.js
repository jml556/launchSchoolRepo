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



function anagram(word, list) {
  const wordObj = {}
  word.split('').forEach(letter => {
    wordObj[letter] ? wordObj[letter]++ : wordObj[letter] = 1;
  })
  return list.filter(word => {
    const letterObj = {}
    word.split('').forEach(letter => {
      letterObj[letter] ? letterObj[letter]++ : letterObj[letter] = 1
    })
    for(const key in wordObj) {
      if(wordObj[key] != letterObj[key]) {
        return false;
      }
    }
    return true;
  })

}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  const copyData = data.slice()

  function capitalize(word) {
    const wordArr = word.split(' ')
    const capitalizedArr = wordArr.map(word => {
      const letters = word.split('')
      letters[0] = letters[0].toUpperCase()
      return letters.join('')
    })
    return capitalizedArr.join(' ')
  }

  function canadianize() {
    return 'Canada'
  }

  function removeDots(name) {
    if(name.split('').includes('.')) {
      const letterArr = name.split('')
      const idx = letterArr.indexOf('.')
      letterArr.splice(idx, 1)
      return letterArr.join('')
    }
    else {
      return name;
    }
  }

  copyData.forEach(obj => {
    obj.name = capitalize(obj.name)
    obj.country = canadianize()
    obj.name = removeDots(obj.name)
  })

  return copyData
}

console.log(processBands(bands))
*/