

class Map {
  constructor (user={}) {
    this.user = user
    this.restaurants = []
    this.adapter = new RestaurantsAdapter()
    this.geocoder = this.createGeoCoder()

  }

  createGeoCoder() {
    this.initMap()
    return new google.maps.Geocoder();
  }

  deleteRestaurant(restId, event){
    this.setMapOnAll(null)
    markerArray = []
    this.restaurants = []
    this.user.restaurants = []
    this.adapter.deleteRestaurant(restId).then((v) => {this.fetchAndLoadMarkers()})
  }

  setMapOnAll(map) {
    for (let i=0; i< markerArray.length; i++){
      markerArray[i].setMap(map)
    }
  }

  addRestaurant() {
    let name = event.target.children[0].value
    app.map.geocoder.geocode( { 'address': event.target.children[1].value }, function(results, status) {
        let address = results[0].formatted_address
        let latitude = results[0].geometry.location.lat()
        let longitude = results[0].geometry.location.lng()
        app.map.adapter.createRestaurant({name, address, latitude, longitude})
      })
  }

  fetchAndLoadMarkers() {
    this.setMapOnAll(null)
    this.restaurants = []
    if(this.user.email){
      this.initMap()
      this.user.restaurants.forEach(r =>{this.renderOnMap(r)})
    } else {
      this.adapter.getRestaurants()
        .then(restaurantsJSON => {restaurantsJSON.forEach(r => app.map.renderOnMap(r))})
        .catch( () => alert('The server does not appear to be running') )
    }
  }

  initMap() {
      var uluru = {lat: 43, lng: -70};
      //assign the map variable to a google maps object
      googleMap = new google.maps.Map(document.getElementById('mapDiv'), {
        zoom: 4,
        center: uluru
      })
  }



  renderOnMap(rest){
        let restaurant = new Restaurant(rest)
        this.restaurants.push(restaurant)
        let dishes = restaurant.renderDishes()
        let marker;
        let infowindow = new google.maps.InfoWindow({
          content: `<div data-rest_id = ${restaurant.restId} id="info_${restaurant.restId}" style="color: #000000; height: 300px">
          <strong><p>${restaurant.name}</strong></p>
          <p>Address: ${restaurant.address}</p>
          <button class="delete_restaurant">Delete Restaurant</button>
          <form class="add-menu-item">
          <input data-id=${restaurant.restId} type="textbox" placeholder="Add your favorite menu item">
          <button type="submit">Submit</button>
          <p><strong>List of Menu Items<p></strong>
          <ul>${dishes}</ul>
          `})
          marker = new google.maps.Marker({
            position: {lat: restaurant.latitude ,lng: restaurant.longitude},
            map: googleMap,
          });
          marker.addListener('click', function() { infowindow.open(googleMap, marker) })
          markerArray.push(marker)
  }



}
