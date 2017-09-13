//create map instance and then

class Map {
  constructor (user={}) {
    this.user = user
    if(user.email !== undefined){
      this.restaurants = user.restaurants
    } else {
      this.restaurants = []
    }
    //this.initBindingsAndEventListiners()
    this.adapter = new RestaurantsAdapter()
    //this.fetchAndLoadMarkers()
    this.geocoder = this.createGeoCoder()

  }



  createGeoCoder() {
    return new google.maps.Geocoder();
  }

  deleteRestaurant(restId, event){
    //fix the delete marker function, maybe re-render map
    this.setMapOnAll(null)
    this.adapter.deleteRestaurant(restId)
    markerArray = []
    this.fetchAndLoadMarkers()


    alert("Restaurant deleted!")
  }

  setMapOnAll(map) {
    for (let i=0; i< markerArray.length; i++){
      markerArray[i].setMap(map)
    }
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
    if(this.user.email){
      this.initMap(this.restaurants)
    } else {
      this.adapter.getRestaurants()
      .then( restaurantsJSON => { restaurantsJSON.forEach( rest => { this.restaurants.push( new Restaurant(rest) )}) })
        .then(() =>{ this.initMap(this.restaurants) })
        .catch( () => alert('asdfaThe server does not appear to be running') )
    }
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
    debugger
        let marker;
        let infowindow = new google.maps.InfoWindow({
          content: `<div data-rest_id = ${rest.restId} id="info_${rest.restId}" style="color: #000000; height: 300px">
          <strong><p>${rest.name}</strong></p>
          <p>Address: ${rest.address}</p>
          <button class="delete_restaurant">X</button>
          <form class="add-menu-item">
          <input data-id=${rest.restId} type="textbox" placeholder="Add your favorite menu item">
          <button type="submit">Submit</button>
          `})
          marker = new google.maps.Marker({
            position: {lat: rest.latitude ,lng: rest.longitude},
            map: googleMap,
          });
          marker.addListener('click', function() { infowindow.open(googleMap, marker) })
          markerArray.push(marker)
  }



}
