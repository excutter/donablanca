function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 25.189286, lng: -99.826797}
  });

  setMarkers(map);
}

var marcadores = [
    ['montemorelos', 25.189286, -99.826797],
    ['donaBlanca', 25.205373, -99.849162]
];

function setMarkers(map) {

  var image = {
    url: 'http://imageshack.com/a/img922/5002/1QNCnf.png',
    size: new google.maps.Size(32, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
  };

  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };

  for (var i = 0; i < marcadores.length; i++) {
    var lugar = marcadores[i];
    var marcador = new google.maps.Marker({
      position: {lat: lugar[1], lng: lugar[2]},
      map: map,
      icon: image,
      shape: shape,
      title: lugar[0],
    });
  }
}
