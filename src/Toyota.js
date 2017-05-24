import { Car } from './Car'

export class Toyota extends Car {
  constructor (model, year, mileage) {
    super(model, year)
    this.mileage = mileage
  }

  honk () {
    return 'beep'
  }
}
