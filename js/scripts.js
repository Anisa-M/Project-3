var chicagoCoordinates = { lat: 41.8781, lng: -87.6298 };
function enhanceMap() {

  var marker = new google.maps.Marker({
    position: chicagoCoordinates,
    map: map,
    title: "Chicago!",
  });

  var infoWindow = new google.maps.InfoWindow({
    content: "<h3>Welcome to Chicago!</h3><p>Explore the Windy City.</p>",
  });

  marker.addListener("click", function() {
    infoWindow.open(map, marker);
  });

  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);

};

function init(){
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', showText);
}


function showText() {
  alert("If you have questions, contact me at:\nms.anisamckinney@gmail.com");
}

window.addEventListener('load', init);