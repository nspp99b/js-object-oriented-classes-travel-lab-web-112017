class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return (endDate - this.startDate.getFullYear())
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let vertical = this.endingLocation.vertical - this.beginningLocation.vertical;
    let horizontal_begin = eastWest.findIndex(el => el === this.beginningLocation.horizontal)
    let horizontal_end = eastWest.findIndex(el => el === this.endingLocation.horizontal)
    let horizontal = horizontal_end - horizontal_begin
    let blocks = vertical + horizontal
    return blocks
  }

  estimatedTime(isPeak = false) {
    if (isPeak === true) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }

}
