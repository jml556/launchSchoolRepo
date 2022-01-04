/*
Write a program to determine whether a triangle is equilateral, isosceles, or scalene.

An equilateral triangle has all three sides the same length.

An isosceles triangle has exactly two sides of the same length.

A scalene triangle has all sides of different lengths.

Note: For a shape to be a triangle at all, all sides must be of length > 0, and the sum of the lengths of any two sides must be greater than the length of the third side.
*/

module.exports = class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

    //check if sides are illegal
    this.sortedSideArr = [this.side1, this.side2, this.side3].sort((a,b) => a - b)
    if(this.sortedSideArr[0] + this.sortedSideArr[1] <= this.sortedSideArr[2]) throw new Error('two sides are less than the third')
    if(!this.sortedSideArr[0] || !this.sortedSideArr[1] || !this.sortedSideArr[2]) throw new Error('Sides cannot be 0')
  }

  kind() {
    if(this.sortedSideArr.every(side => side === this.sortedSideArr[0])) return 'equilateral'
    if(this.sortedSideArr[1] === this.sortedSideArr[2]) return 'isosceles'
    return 'scalene'
  }
}