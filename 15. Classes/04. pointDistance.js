class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    static distance(pointA, pointB) {
      var xDiff = pointA.x - pointB.x;
      var yDiff = pointA.y - pointB.y;
  
      return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    }
}
