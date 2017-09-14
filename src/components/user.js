class User {
  constructor(obj) {
    this.email = obj.email
    this.city = obj.city
    this.id = obj.id
    if(obj.restaurants) {
      this.restaurants = obj.restaurants
    } else {
      this.restaurants = []
    }
  }



}
