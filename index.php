<!DOCTYPE html>
<html>
  <head>
    <title>The Favs</title>
    <link rel="shortcut icon" href="/img/red-pushpin.png" />
    <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="styles/style.css">
  </head>
  <body>
    <div class="banner" >
      THE FAVS
    </div>
    <div class="container">
      <!--login-->
      <form id='login'>
        <input id="email" type="text" placeholder="email">
        <button class ="fancy" type="submit">login</button>
      </form>


      <!--add restaurant-->
      <form class="newRestaurantForm" id='new-restaurant-form'>
        <input id="newRestName" type="text" placeholder="Restaurant Name">
        <input id="newRestAddress" type="text" placeholder="Restaurant Address">
        <button class ="fancy" type="submit">Add Restaurant</button>
      </form>

      <div id="createAcc" style="justify-content: end;">
        <button class="fancy createAccount" style="width: 100px;">Create Account</button>
      </div>


      <div id='mapDiv'>
      </div>

    </div>

    <script type="text/javascript" src="src/index.js"></script>
    <script type="text/javascript" src="src/components/app.js"></script>
    <script type="text/javascript" src="src/components/map.js"></script>
    <script type="text/javascript" src="src/components/restaurant.js"></script>
    <script type="text/javascript" src="src/adapters/restaurantsAdapter.js"></script>
    <script type="text/javascript" src="src/adapters/usersAdapter.js"></script>
    <script type="text/javascript" src="src/adapters/dishesAdapter.js"></script>
    <script type="text/javascript" src="src/components/user.js"></script>
    <script async defer
      src="https://maps.googleapis.com/maps/api/js?key=<?php echo getenv('GOOGLE_MAP_API_KEY')?>&callback=init">
    </script>
  </body>
</html>
