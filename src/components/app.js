class App {
  constructor() {
    this.users = []
    this.map = new Map()
    this.adapter = new UsersAdapter()
    this.initializeFunctions()
    this.addEventListeners()

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
      } else if (event.target.classList.contains("delete-dish")){
        restaurant.deleteDish(event)
      }
    })
    let createAccountButton = document.querySelector('.createAccount')
    createAccountButton.addEventListener('click', () => { this.insertLightbox(this.createAccount)})
}

  loadUsers() {
    this.adapter.getUsers()
    .then( usersJSON => { usersJSON.forEach( user =>{ this.users.push( new User(user) )}) })
      .then(() => console.log('loaded'))
      .catch( () => alert('The server does not appear to be running') )
  }



//initialize Map if there is a user login.
  initializeMap() {
    event.preventDefault()
    if(event.target.children[0].value !== ""){
      let email = event.target.children[0].value
      if(app.users.find(userObj => userObj.email === email) !== undefined) {
        let user = app.users.find(userObj => userObj.email === email)
        app.map = new Map(user)
        app.map.fetchAndLoadMarkers()
        //document.getElementById('email').value = ""
        let div = document.createElement('div')
        div.setAttribute('style', 'justify-content: start;')
        div.innerHTML = `<p class="email">${email}</p>`
        document.getElementById('login').replaceWith(div)
        document.getElementById('createAcc').innerHTML = ""

      } else {
        alert('The user does not exist')
      }
    } else {
      alert("Please enter your email")
    }
  }

  insertLightbox(contentCallback) {
    let lightbox = document.createElement('div')
    lightbox.classList += "lightbox"
    let container = document.querySelector('.container')
    var button = document.createElement('button')
    button.setAttribute('class', "removeLightbox")
    button.innerHTML = "X"
    button.addEventListener('click', function() {document.querySelector('.lightbox').remove()})
    lightbox.appendChild(button)
    lightbox.appendChild(contentCallback())
    container.appendChild(lightbox)
  }

  createAccount() {
    var div = document.createElement('div')
    div.setAttribute('class', "create-user-box")
    var form = document.createElement('form')
    //form.append(button)
    form.setAttribute('class', 'create-user-form')
    form.innerHTML = `<input class="yourEmail" placeholder="Your Email"><br>
    <input class="yourCity" placeholder= "Your City"><br>
    <button type="submit">Submit</button>`
    form.addEventListener('submit', app.createUserJSON)
    div.append(form)
    return div
  }

  createUserJSON() {
    event.preventDefault()
    var email = event.target.querySelector('.yourEmail').value
    var city = event.target.querySelector('.yourCity').value
    var restaurants = app.map.restaurants
    if(email !== "" && city !== "") {
      let body = {email, city, restaurants}
      app.adapter.createUser(body)
    } else {
      alert("Please enter your name and city!")
    }

  }

  }
