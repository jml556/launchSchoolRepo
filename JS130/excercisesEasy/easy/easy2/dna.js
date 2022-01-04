module.exports = class Dna {
  constructor(dna) {
    this.dna = dna.split('')
  }

  hammingDistance(dnaArg) {
    const dnaArr = dnaArg.split('')
    if(!dnaArr.length || !this.dna.length) return 0
    
  }
}