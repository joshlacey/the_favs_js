class RestaurantsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/restaurants'
  }

  getRestaurants(callback) {
    return fetch(this.baseUrl).then(response => response.json())
  }

  // deleteRestaurant(noteId) {
  //   const deleteUrl = `${this.baseUrl}/${noteId}`
  //   const noteDeleteParams = {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type':'application/json'
  //     }
  //   }
  //   return fetch(deleteUrl, noteDeleteParams).then(response => response.json())
  // }

  createRestaurant(body) {
    const RestaurantCreateParams = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({body})
    }
    return fetch(this.baseUrl, RestaurantCreateParams).then(resp => resp.json())
  }

}
