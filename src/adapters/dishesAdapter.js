class DishesAdapter {
  constructor() {
    this.baseUrl = 'https://the-favs-backend.herokuapp.com/api/v1/dishes'
  }

  // getDishes() {
  //   return fetch(this.baseUrl).then(response => response.json())
  // }

  // deleteUser(noteId) {
  //   const deleteUrl = `${this.baseUrl}/${noteId}`
  //   const noteDeleteParams = {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type':'application/json'
  //     }
  //   }
  //   return fetch(deleteUrl, noteDeleteParams).then(response => response.json())
  // }

  createDish(name, restaurant_id) {
    const dishCreateParams = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({name, restaurant_id})
    }
    return fetch(this.baseUrl, dishCreateParams).then(resp => resp.json())
  }


}
