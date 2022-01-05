module.exports = class Dna {
  constructor(dna) {
    this.dna = dna.split('')
  }

  hammingDistance(dnaStr) {
    let hammingDistance = 0;
    //case where length is 0 for either
    if(!dnaStr.split('').length || !this.dna.length) return 0

    //case where the length is equal
    if(this.dna.length == dnaStr.length) {
      this.dna.forEach((item, index) => item !== dnaStr[index] ? hammingDistance++ : hammingDistance += 0)
      return hammingDistance
    }
    
    //case where length is unequal
    const dnaArr = dnaStr.split('')
    const [shorterDna, longerDna] = [(this.dna.length < dnaStr.length ? this.dna : dnaArr), (this.dna.length < dnaStr.length ? dnaArr : this.dna)]

    shorterDna.forEach(((item, index) => item !== longerDna[index] ? hammingDistance++ : hammingDistance += 0))
    
    return hammingDistance
  }
}