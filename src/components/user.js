class User {
  constructor(obj) {
    this.email = obj.email
    this.city = obj.city
    if(obj.restaurants) {
      this.restaurants = obj.restaurants
    } else {
      this.restaurants = []
    }
  }



}
