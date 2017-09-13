//create map instance and then

class Map {
  constructor () {
    this.restaurants = []
    //this.initBindingsAndEventListiners()
    this.adapter = new RestaurantsAdapter()
    //this.fetchAndLoadMarkers()
    this.geocoder = this.createGeoCoder()

  }

  createGeoCoder() {
    return new google.maps.Geocoder();
  }

  deleteRestaurant(restId, event){
    this.adapter.deleteRestaurant(restId)
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
    alert("Restaurant deleted!")
  }

  addRestaurant() {
    event.preventDefault()
    let name = event.target.children[0].value
    app.map.geocoder.geocode( { 'address': event.target.children[1].value }, function(results, status) {
        let foundAddress = results[0].formatted_address
        let lat = results[0].geometry.location.lat()
        let lng = results[0].geometry.location.lng()
        let restaurant = new Restaurant({name: name, address: foundAddress, latitude: lat, longitude: lng})
        app.map.renderOnMap(restaurant)
        app.map.adapter.createRestaurant(restaurant)
        //try to figure out what's going on here
      })
    //let restaurant = new Restaurant({name: name, address: foundAddress})
  }

  fetchAndLoadMarkers() {
    this.adapter.getRestaurants()
    .then( restaurantsJSON => { restaurantsJSON.forEach( rest => this.restaurants.push( new Restaurant(rest) )) })
      .then(() =>{ this.initMap(this.restaurants) })
      .catch( () => alert('The server does not appear to be running') )
  }

  initMap(restaurants) {
      var uluru = {lat: 43, lng: -70};
      //assign the map variable to a google maps object
      googleMap = new google.maps.Map(document.getElementById('mapDiv'), {
        zoom: 4,
        center: uluru
      })
      //loop over and initialize the markers and add eventlisteners to each one.
      restaurants.forEach(rest => this.renderOnMap(rest))
  }



  renderOnMap(rest){
        let marker;
        let infowindow = new google.maps.InfoWindow({
          content: `<div data-rest_id = ${rest.restId} id="info_${rest.restId}" style="color: #000000; height: 300px">
          <h3>${rest.name}</h3>
          <button class="delete_restaurant">X</button>
          <p>Address: ${rest.address}</p>
          `})
        marker = new google.maps.Marker({
            position: {lat: rest.latitude ,lng: rest.longitude},
            map: googleMap,
          });
          marker.addListener('click', function() { infowindow.open(googleMap, marker) })
  }



}
