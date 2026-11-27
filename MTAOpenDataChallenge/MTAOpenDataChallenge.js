// Button on click listeners
document.getElementById("south").onclick = function () {
  visualizeNorthAndSouth();
};
document.getElementById("unicorn").onclick = function () {
  visualizeGay();
};
document.getElementById("west").onclick = function () {
  visualizeEastAndWest();
};

//initializing the map
const center = [40.751888212167, -73.983248329714];
const map = L.map("map").setView(center, 11); //[latitude, longitude], zoom

// fetching the json of the csv that I downloaded from https://data.ny.gov/Transportation/MTA-Subway-Entrances-and-Exits-2024/i9wp-a4ja/about_data
const response = await fetch("./MTA_Subway_Entrances_and_Exits.json");
const json = await response.json();

var purpleCircleIcon = L.icon({
  iconUrl: "https://ik.imagekit.io/mandymeindersma/MTA/purple_circle.png",
  iconSize: [10, 10], // size of the icon
});
var pinkCircleIcon = L.icon({
  iconUrl: "https://ik.imagekit.io/mandymeindersma/MTA/pink_circle.png",
  iconSize: [10, 10], // size of the icon
});
var aCircleIcon = L.icon({
  iconUrl: "https://ik.imagekit.io/mandymeindersma/MTA/a_circle.png",
  iconSize: [20, 20], // size of the icon
});
var bCircleIcon = L.icon({
  iconUrl: "https://ik.imagekit.io/mandymeindersma/MTA/b_circle.png",
  iconSize: [20, 20], // size of the icon
});
var redCircleIcon = L.icon({
  iconUrl: "https://ik.imagekit.io/mandymeindersma/MTA/red_circle.png",
  iconSize: [10, 10], // size of the icon
});
var orangeCircleIcon = L.icon({
  iconUrl: "https://ik.imagekit.io/mandymeindersma/MTA/orange_circle.png",
  iconSize: [10, 10], // size of the icon
});
var yellowCircleIcon = L.icon({
  iconUrl: "https://ik.imagekit.io/mandymeindersma/MTA/yellow_circle.png",
  iconSize: [10, 10], // size of the icon
});
var greenCircleIcon = L.icon({
  iconUrl: "https://ik.imagekit.io/mandymeindersma/MTA/green_circle.png",
  iconSize: [10, 10], // size of the icon
});
var blueCircleIcon = L.icon({
  iconUrl: "https://ik.imagekit.io/mandymeindersma/MTA/blue_circle.png",
  iconSize: [10, 10], // size of the icon
});
var violetCircleIcon = L.icon({
  iconUrl: "https://ik.imagekit.io/mandymeindersma/MTA/violet_circle.png",
  iconSize: [10, 10], // size of the icon
});

// populate the first visualization which is the east and west visualization
init();

L.tileLayer(
  "https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png?key=__CARTO_API_KEY_PROD__",
  {
    attribution: '&copy; <a href="https://carto.com/basemaps">CartoDB</a>',
  },
).addTo(map);

// populate the east and west visualization
function init() {
  // lines going north to south
  L.polyline([
    [40.4, -74.2],
    [41, -74.2],
  ]).addTo(map);
  L.polyline([
    [40.4, -74.15],
    [41, -74.15],
  ]).addTo(map);
  L.polyline([
    [40.4, -74.1],
    [41, -74.1],
  ]).addTo(map);
  L.polyline([
    [40.4, -74.05],
    [41, -74.05],
  ]).addTo(map);
  L.polyline([
    [40.4, -74.0],
    [41, -74.0],
  ]).addTo(map);
  L.polyline([
    [40.4, -73.95],
    [41, -73.95],
  ]).addTo(map);
  L.polyline([
    [40.4, -73.9],
    [41, -73.9],
  ]).addTo(map);
  L.polyline([
    [40.4, -73.85],
    [41, -73.85],
  ]).addTo(map);
  L.polyline([
    [40.4, -73.8],
    [41, -73.8],
  ]).addTo(map);
  L.polyline([
    [40.4, -73.75],
    [41, -73.75],
  ]).addTo(map);
  L.polyline([
    [40.4, -73.7],
    [41, -73.7],
  ]).addTo(map);

  for (let i = 0; i < json.length; i++) {
    let obj = json[i];

    if (
      obj.Entrance_Longitude < -74.2 ||
      (obj.Entrance_Longitude > -74.15 && obj.Entrance_Longitude < -74.1) ||
      (obj.Entrance_Longitude > -74.05 && obj.Entrance_Longitude < -74.0) ||
      (obj.Entrance_Longitude > -73.95 && obj.Entrance_Longitude < -73.9) ||
      (obj.Entrance_Longitude > -73.85 && obj.Entrance_Longitude < -73.8) ||
      (obj.Entrance_Longitude > -73.75 && obj.Entrance_Longitude < -73.7)
    ) {
      L.marker([obj.Entrance_Latitude, obj.Entrance_Longitude], {
        icon: purpleCircleIcon,
      }).addTo(map);
    } else {
      L.marker([obj.Entrance_Latitude, obj.Entrance_Longitude], {
        icon: pinkCircleIcon,
      }).addTo(map);
    }
  }

  //the a and b points referenced in the preamble
  abcircle();
}

function visualizeEastAndWest() {
  clearMap();
  init();
}

function visualizeNorthAndSouth() {
  clearMap();

  // west and east lines
  L.polyline([
    [40.5, -73.7],
    [40.5, -74.4],
  ]).addTo(map);
  L.polyline([
    [40.55, -73.7],
    [40.55, -74.4],
  ]).addTo(map);
  L.polyline([
    [40.6, -73.7],
    [40.6, -74.4],
  ]).addTo(map);
  L.polyline([
    [40.65, -73.7],
    [40.65, -74.4],
  ]).addTo(map);
  L.polyline([
    [40.7, -73.7],
    [40.7, -74.4],
  ]).addTo(map);
  L.polyline([
    [40.75, -73.7],
    [40.75, -74.4],
  ]).addTo(map);
  L.polyline([
    [40.8, -73.7],
    [40.8, -74.4],
  ]).addTo(map);
  L.polyline([
    [40.85, -73.7],
    [40.85, -74.4],
  ]).addTo(map);
  L.polyline([
    [40.9, -73.7],
    [40.9, -74.4],
  ]).addTo(map);

  for (let i = 0; i < json.length; i++) {
    let obj = json[i];

    if (
      obj.Entrance_Latitude < 40.55 ||
      (obj.Entrance_Latitude > 40.6 && obj.Entrance_Latitude < 40.65) ||
      (obj.Entrance_Latitude > 40.7 && obj.Entrance_Latitude < 40.75) ||
      (obj.Entrance_Latitude > 40.8 && obj.Entrance_Latitude < 40.85) ||
      (obj.Entrance_Latitude > 40.9 && obj.Entrance_Latitude < 40.95)
    ) {
      L.marker([obj.Entrance_Latitude, obj.Entrance_Longitude], {
        icon: purpleCircleIcon,
      }).addTo(map);
    } else {
      L.marker([obj.Entrance_Latitude, obj.Entrance_Longitude], {
        icon: pinkCircleIcon,
      }).addTo(map);
    }
  }
}

// figured I would add a fun rainbow in there!
function visualizeGay() {
  clearMap();

  for (let i = 0; i < json.length; i++) {
    let obj = json[i];

    if (obj.Entrance_Longitude < -74.05) {
      L.marker([obj.Entrance_Latitude, obj.Entrance_Longitude], {
        icon: redCircleIcon,
      }).addTo(map);
    } else if (
      obj.Entrance_Longitude > -74.05 &&
      obj.Entrance_Longitude < -74.0
    ) {
      L.marker([obj.Entrance_Latitude, obj.Entrance_Longitude], {
        icon: orangeCircleIcon,
      }).addTo(map);
    } else if (
      obj.Entrance_Longitude > -74.0 &&
      obj.Entrance_Longitude < -73.95
    ) {
      L.marker([obj.Entrance_Latitude, obj.Entrance_Longitude], {
        icon: yellowCircleIcon,
      }).addTo(map);
    } else if (
      obj.Entrance_Longitude > -73.95 &&
      obj.Entrance_Longitude < -73.9
    ) {
      L.marker([obj.Entrance_Latitude, obj.Entrance_Longitude], {
        icon: greenCircleIcon,
      }).addTo(map);
    } else if (
      obj.Entrance_Longitude > -73.9 &&
      obj.Entrance_Longitude < -73.85
    ) {
      L.marker([obj.Entrance_Latitude, obj.Entrance_Longitude], {
        icon: blueCircleIcon,
      }).addTo(map);
    } else {
      L.marker([obj.Entrance_Latitude, obj.Entrance_Longitude], {
        icon: purpleCircleIcon,
      }).addTo(map);
    }
  }
}

// get rid of all the layer of the map and then add back the tiles
function clearMap() {
  map.eachLayer(function (layer) {
    map.removeLayer(layer);
  });
  L.tileLayer(
    "https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png?key=__CARTO_API_KEY_PROD__",
    {
      attribution: '&copy; <a href="https://carto.com/basemaps">CartoDB</a>',
    },
  ).addTo(map);
}

// add the a and b points referenced in the preamble
function abcircle() {
  map.createPane("locationMarker");
  map.getPane("locationMarker").style.zIndex = 999;
  L.marker([40.793077, -73.9731789], {
    icon: aCircleIcon,
    pane: "locationMarker",
  }).addTo(map);
  L.marker([40.7089354, -74.0069749], {
    icon: bCircleIcon,
    pane: "locationMarker",
  }).addTo(map);
}
