class App {
  constructor() {
    this.map = new Map()
    this.initializeFunctions()
  }
  initializeFunctions() {
    // let form = document.getElementById('new-restaurant-form')
    // form.addEventListener('submit', this.map.addRestaurant)
    document.addEventListener('click', function() {
    if(event.target.classList.contains("delete_restaurant")) {
      app.map.deleteRestaurant(event.target.parentElement.dataset.rest_id, event)
    }
  })
  document.addEventListener('submit', function(){
    event.preventDefault()
    if (event.target.classList.contains("add-menu-item")){
      let dish = event.target.firstElementChild.value
      let rest = (app.map.restaurants.find((restaurant) => {
        return restaurant.restId === parseInt(event.target.firstElementChild.dataset.id)
      }))
      rest.addDish(dish)
    } else if (event.target.classList.contains("newRestaurantForm")) {

        app.map.addRestaurant(event)
    }
  })
  }
  }
