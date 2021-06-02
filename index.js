const express = require("express");
const app = express();
let port = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.send("Hello Tulsa Maps!")
});

app.listen(port, () => {
  console.log(`App is listening on part http://localhost:${port}`);
});

// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 8,
//     });
//     const geocoder = new google.maps.Geocoder();
//     geocoder.geocode({ address: "Tulsa" }, (results, status) => {
//       if (status === "OK") {
//         map.setCenter(results[0].geometry.location);
//         new google.maps.Marker({
//           map,
//           position: results[0].geometry.location,
//         });
//       } else {
//         window.alert(
//           "Geocode was not successful for the following reason: " + status
//         );
//       }
//     });
//   }
  