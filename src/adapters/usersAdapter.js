class UsersAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/users'
  }

  getUsers() {
    return fetch(this.baseUrl).then(response => response.json())
  }

  createUser(body) {
    const userCreateParams = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(body)
    }
    return fetch(this.baseUrl, userCreateParams).then(resp => resp.json())
    .then((resp) => {
      let user = new User(resp)
      document.querySelector('.lightbox').remove()
      app.map = new Map(user)
      app.map.fetchAndLoadMarkers()
      })
  }

  getUser(userId) {
    return fetch(this.baseUrl + "/" + userId).then(resp => resp.json())
  }

  updateUser(userId, body) {
    const userUpdateParams = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"restaurant" : body })
  }
  return fetch( "http://localhost:3000/api/v1/users" + "/" + userId , userUpdateParams).then(resp => resp.json())
}

getUser(userId) {
  return fetch(this.baseUrl + "/" + userId).then(resp => resp.json())
}

// deleteUserRestaurant(userId, body) {
//   const userUpdateParams = {
//   method: 'DELETE',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({"restaurant" : body })
// }
// return fetch( "http://localhost:3000/api/v1/users" + "/" + userId , userUpdateParams).then(resp => resp.json())
// }

}
