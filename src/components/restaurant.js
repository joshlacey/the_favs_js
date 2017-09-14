class Restaurant {

  constructor (obj) {
    this.name = obj.name
    this.address = obj.address,
    this.image = obj.image_url
    this.restId = obj.id
    this.description = obj.description
    this.list_of_dishes = obj.dishes || []
    this.latitude = obj.latitude
    this.longitude = obj.longitude
  }

  addDish (dish) {
    let adapter = new DishesAdapter()
    this.list_of_dishes.push(dish)
    adapter.createDish(dish, this.restId)
    app.map.fetchAndLoadMarkers
    // add dish to bubble
    //update the database
  }

  renderDishes(){
    let dishes = this.list_of_dishes.map(function(dish){
      return `<li>${dish.name}</li>`
    })
    return dishes.join("")
  }

}

let red_lob = {name: "red lobster", address: "as;dlfkjas;ldfkj", image_url: "asdl;fasdf", description: "tasty", latitude: 40, longitude: -70}
