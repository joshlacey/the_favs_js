class Restaurant {

  constructor (obj) {
    this.name = obj.name
    this.address = obj.address,
    this.image = obj.image_url
    this.restId = obj.id
    this.description = obj.description
    this.dishes = obj.dishes || []
    this.latitude = obj.latitude
    this.longitude = obj.longitude
  }

  addDish (dish) {
    let adapter = new DishesAdapter()
    this.dishes.push(dish)
    adapter.createDish(dish, this.restId)
    setTimeout(() => {
      this.resetMap()
    }, 500)
    // add dish to bubble
    //update the database
  }

  resetMap(){
    app.map.setMapOnAll(null)
    markerArray = []
    app.map.restaurants = []
    app.map.fetchAndLoadMarkers()
  }

  renderDishes(){
    let dishes = this.dishes.map(function(dish){
      return `<li class="listitem">${dish.name}</li>`
    })
    return dishes.join("")
  }

renderObjectDishes(){
  if (this.dishes){
    let dishes = this.dishes.map(function(dish){
      return `<li>${dish.name}</li>`
      })
      return dishes.join("")
  }else {
    return ""
  }
  // let dishes = app.map.user.dishes.map(function(dish){
  //   return `<li>${dish.name}</li>`
  // })
  // return dishes.join("")

}


}

let red_lob = {name: "red lobster", address: "as;dlfkjas;ldfkj", image_url: "asdl;fasdf", description: "tasty", latitude: 40, longitude: -70}
