//create map instance and then

class Map {
  constructor () {
    this.restaurants = []
    //this.initBindingsAndEventListiners()
    this.adapter = new RestaurantsAdapter()
    //this.fetchAndLoadMarkers()

  }

  fetchAndLoadMarkers() {
    this.adapter.getRestaurants()
    .then( restaurantsJSON => restaurantsJSON.forEach( rest => this.restaurants.push( new Restaurant(rest) )))
      .then( this.initMap(this.restaurants).bind(this) )
      .catch( () => alert('The server does not appear to be running') )
  }

  initMap(restaurants) {
      var uluru = {lat: 43, lng: -70};
      //assign the map variable to a google maps object
      googleMap = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
      })
      //loop over and initialize the markers and add eventlisteners to each one.
      restaurants.forEach(rest => this.renderOnMap(rest))
  }

  addNewRestaurant(address, image_url, description, list_of_dishes) {
  geocoder.geocode( { 'address': "chipotle bowling green NYC" }, function(results, status) {
      let foundAddress = results[0].formatted_address
      let lat = results[0].geometry.location.lat()
      let lng = results[0].geometry.location.lng()
      restarant = new Restaurant(foundAddress, image_url, description, lat, lng)
      renderOnMap(lat, lng)
    })
  }

  renderOnMap(rest){
        let marker;
        let infowindow = new google.maps.InfoWindow({content: `${rest.name}`})
        marker = new google.maps.Marker({
            position: {lat: rest.lat ,lng: rest.lng},
            map: googleMap,
            url: ""
          });
   marker.addListener('click', function() { infowindow.open(googleMap, marker) })
  }

}
//initBindingsAndEventListeners
