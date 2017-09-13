class App {
  constructor() {
    this.users = []
    this.map = new Map()
    this.adapter = new UsersAdapter()
    this.initializeFunctions()
    this.addEventListeners()

  }

  addEventListeners(){
    document.body.addEventListener('submit', function() {
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

  loadUsers() {
    this.adapter.getUsers()
    .then( usersJSON => { usersJSON.forEach( user =>{ this.users.push( new User(user) )}) })
      .then(() => console.log('loaded'))
      .catch( () => alert('The server does not appear to be running') )
  }

  initializeFunctions() {
    let login = document.getElementById('login')
    login.addEventListener('submit', this.initializeMap)
    document.addEventListener('click', function() {
    if(event.target.classList.contains("delete_restaurant")) {
      app.map.deleteRestaurant(event.target.parentElement.dataset.rest_id, event)
    }
  })
    this.loadUsers()
  }

  initializeMap() {
    event.preventDefault()
    if(event.target.children[0].value !== ""){
      let email = event.target.children[0].value
      if(app.users.find(userObj => userObj.email === email) !== undefined) {
        let user = app.users.find(userObj => userObj.email === email)
        app.map = new Map(user)
      } else {
        alert('The user does not exist')
      }
    } else {
      alert("Please enter your email")
    }
  }


  }
