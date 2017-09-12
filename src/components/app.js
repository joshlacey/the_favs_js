class App {
  constructor() {
    this.map = new Map()
    this.initializeFunctions()
  }
  initializeFunctions() {
    let form = document.getElementById('new-restaurant-form')
    form.addEventListener('submit', this.map.addRestaurant)
  }
}
