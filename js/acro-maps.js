const center = [40.7335791, -74.00679];
const map = L.map("map").setView(center, 12); //[latitude, longitude], zoom

// use this to get long and lat: https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=pjson&outFields=*&singleLine=address

const SoHoPlayHouseFreakShow = [40.726421, -74.004382];
const PigeonImpersonationPageant = [40.7521983, -74.0010911];
const NightVarietyShow = [40.708214054214, -74.013778741478];

L.tileLayer("https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution:
    '&copy; <a href="https://carto.com/basemaps">CartoDB</a> + <a href="https://www.freepik.com/icons/microphone">Freepik</a>',
}).addTo(map);

// other styles of maps I could choose:
// https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png
// https://tile.opentopomap.org/{z}/{x}/{y}.png
// https://tile.openstreetmap.org/{z}/{x}/{y}.png

var starIcon = L.icon({
  iconUrl: "https://ik.imagekit.io/mandymeindersma/star.webp",
  iconSize: [30, 30], // size of the icon
  iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -15], // point from which the popup should open relative to the iconAnchor
});

function stylePopup(description) {
  return "<span style='font-size:20px;'>" + description + "</span>";
}

const SoHoPlayHouseFreakShowMarker = L.marker(SoHoPlayHouseFreakShow, {
  icon: starIcon,
})
  .addTo(map)
  .bindPopup(
    stylePopup(
      '<a href="https://www.instagram.com/p/DZ5Pcp8myG5/?img_index=2" target="_blank">Variety Show at SoHo Play House</a> with Bailey',
    ),
  );

const PigeonImpersonationPageantMarker = L.marker(PigeonImpersonationPageant, {
  icon: starIcon,
})
  .addTo(map)
  .bindPopup(
    stylePopup(
      '<a href="https://www.nytimes.com/2025/06/16/arts/design/pigeon-fest-high-line.html" target="_blank">High Line Pigeon Impersonation Pageant</a> with Sophia',
    ),
  );

const NightVarietyShowMarker = L.marker(NightVarietyShow, { icon: starIcon })
  .addTo(map)
  .bindPopup(stylePopup("Night Variety Show with Thomas"));
