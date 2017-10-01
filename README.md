# The Favs

![screen shot 2017-10-01 at 4 11 53 pm](https://user-images.githubusercontent.com/26423636/31058645-fdbe60f2-a6c4-11e7-810c-34ae6487e32b.png)

* The Favs is an app developed using the Google Maps Api. It allows users to type in a restaurant name and a general location an returns a marker for that restaurant on a map. The User can then click on the marker to see more information about the restaurant and also add dishes to the restaurant. The user can create an account to save their own markers.

* This frontend was built with Vanilla Javascript using ES6 class syntax. The source folder is broken into two files. The adapters folder handles all of the methods used to make JSON requests to the Rails Api. The components folder separates out the responsibilities of each component into a tree, top level is index.js (located outside this folder), then app controls the map, restaurant, and user components.

* The Google Maps Api works by first connecting to the Api using the code found on line 37 of the `index.html`. The end of the uri on line 38 has a callback function which initializes the app and then initializes the map object. When the map object is initialized it also initializes a Google Geocoder object for sending search queries to the Api and also initializes the Google Map object. After this There is a call to fetch and load the markers to the database.

## Setup

* Prerequisites: Create a Google Maps Api Key https://developers.google.com/maps/documentation/javascript/get-api-key and place in the index.html file on line 38 where it says `[YOUR_KEY_HERE]`. Follow Rails Api setup instructions at https://github.com/joshlacey/the_favs_rr .

* Installing: Make sure rails server is running and open index.html file.
