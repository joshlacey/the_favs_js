class App {
  constructor() {
    this.map = new Map()
    this.initializeFunctions()
  }
  initializeFunctions() {
    let form = document.getElementById('new-restaurant-form')
    form.addEventListener('submit', this.map.addRestaurant)
    document.addEventListener('click', function() {
    if(event.target.classList.contains("delete_restaurant")) {
      app.map.deleteRestaurant(event.target.parentElement.dataset.rest_id, event)
    }
  })
  }
}
