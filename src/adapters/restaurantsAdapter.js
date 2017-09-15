class RestaurantsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/restaurants'
  }

  getRestaurants(callback) {
    return fetch(this.baseUrl).then(response => response.json())
  }

  deleteRestaurant(restId) {
    const deleteUrl = `${this.baseUrl}/${restId}`
    const RestaurantDeleteParams = {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      }
    }
    return fetch(deleteUrl, RestaurantDeleteParams).then(response => response.json() ).then((r)=> console.log(r))
  }

  createRestaurant(restaurant) {
    const RestaurantCreateParams = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(restaurant)
    }
    return fetch(this.baseUrl, RestaurantCreateParams).then(resp => resp.json())
    .then((json) => {app.map.renderOnMap(json); if(app.map.user.email){app.adapter.updateUser(app.map.user.id, json)}})
  }

}

// if(app.map.user.email){updateUser(app.map.user.id, json )}
