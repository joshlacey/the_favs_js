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

  addRestaurant() {
    event.preventDefault()
    let name = event.target.children[0].value
    app.map.geocoder.geocode( { 'address': event.target.children[1].value }, function(results, status) {
        let foundAddress = results[0].formatted_address
        debugger
        let lat = results[0].geometry.location.lat()
        let lng = results[0].geometry.location.lng()
        let restaurant = new Restaurant({name: name, address: foundAddress, lat: lat, lng: lng})
        app.map.renderOnMap(restaurant)
      })
    //let restaurant = new Restaurant({name: name, address: foundAddress})
  }

  geocode() {

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
