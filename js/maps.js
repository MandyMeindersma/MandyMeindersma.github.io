const center = [41.615791, -116.201579]
const map = L.map("map").setView(center, 3); //[latitude, longitude], zoom

// use this to get long and lat: https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=pjson&outFields=*&singleLine=address

const EdmontonAmiiKickstart = [53.540641606571, -113.492931031386];
const EdmontonGDGIWD = [53.540641606571, -113.492];
const EdmontonAdasTeam = [53.522907, -113.525537];
const EdmontonAdasTeamResume = [53.522907, -113.525];
const EdmontonHardware = [53.546074, -113.49895];
const EdmontonAmii = [53.545703, -113.496414];
const HawaiiAAAI = [21.2826687, -157.8385384];
const NewYorkCunyTechPrep = [40.743218055341, -74.009053862658];
const NewYorkCunyTechPrepAmazon = [40.751888212167, -73.983248329714];
const NewYorkBreakThroughTechPrep = [40.756137166524, -73.956088029759];
const NewYorkTechFutures= [40.706548234777, -74.003252579832];
const NewYorkPeopleInc= [40.711571, -74.015342];
const NewYorkWorldTraceCenter= [40.712755872269, -74.01329720114];
const MontrealCANCWIC = [45.4980116, -73.5714769];
const HalifaxCANCWIC = [44.646589311141, -63.574683192919];
const NewOrleansAAAI = [29.9475306, -90.0635043];
const WaterlooEquithon = [43.471708, -80.543197];
const LakeLouiseNEW = [51.417708, -116.21686];


L.tileLayer("https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution:
    '&copy; <a href="https://carto.com/basemaps">CartoDB</a> + <a href="https://www.freepik.com/icons/microphone">Freepik</a>',
}).addTo(map);

// other styles of maps I could choose:
// https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png
// https://tile.opentopomap.org/{z}/{x}/{y}.png
// https://tile.openstreetmap.org/{z}/{x}/{y}.png

var micIcon = L.icon({
  iconUrl: 'https://ik.imagekit.io/mandymeindersma/mic.webp',
  iconSize:     [40, 40], // size of the icon
  iconAnchor:   [7, 30], // point of the icon which will correspond to marker's location
  popupAnchor:  [25, -20] // point from which the popup should open relative to the iconAnchor
});

function stylePopup(description) {
  return "<span style='font-size:20px;'>" + description + "</span>";
}




const EdmontonAmiiKickstartMarker = L.marker(EdmontonAmiiKickstart, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup('<a href="https://www.amii.ca/" target="_blank">Alberta Machine Intelligence Institute</a> panel on my industry experience'));

const EdmontonGDGIWDMarker = L.marker(EdmontonGDGIWD, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup('<a href="https://gdg.community.dev/events/details/google-gdg-cloud-edmonton-presents-edmonton-iwd-dare-to-be/" target="_blank">Google Developer Group</a> on how to make a tech resume'));

const EdmontonAdasTeamMarker = L.marker(EdmontonAdasTeam, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup('<a href="https://adasteam.ca/" target="_blank">Adas Team</a> workshop on what type of dev students want to be'));

const EdmontonAdasTeamResumeMarker = L.marker(EdmontonAdasTeamResume, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup('<a href="https://adasteam.ca/" target="_blank">Adas Team</a> workshop on technical resumes'));

const EdmontonHardwareMarker = L.marker(EdmontonHardware, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup('Hardware Meetup on my project to connect a rotary phone to my cell phone'));

const EdmontonAmiiMarker = L.marker(EdmontonAmii, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup('<a href="https://site.pheedloop.com/event/TechAid2023/speakers" target="_blank">Alberta Machine Intelligence Institute Conference</a> on Open Source'));







const NewYorkCunyTechPrepMarker = L.marker(NewYorkCunyTechPrep, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup('<a href="https://cunytechprep.org/" target="_blank">City University of New York Tech Prep</a> on Open Source'));

const NewYorkCunyTechPrepAmazonMarker = L.marker(NewYorkCunyTechPrepAmazon, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup('<a href="https://cunytechprep.org/" target="_blank">City University of New York Tech Prep</a> on Types of Developers'));

const NewYorkBreakThroughTechPrepMarker = L.marker(NewYorkBreakThroughTechPrep, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup('<a href="https://www.breakthroughtech.org/" target="_blank">Break Through Tech Prep</a> on Nailing a Technical Interview'));

const NewYorkTechFuturesMarker = L.marker(NewYorkTechFutures, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup('<a href="https://events.techfutures.com/2025/agenda/session/1733721" target="_blank">Tech Futures</a> on Engineering High-Density IoT'));

const NewYorkPeopleIncMarker = L.marker(NewYorkPeopleInc, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup('<a href="https://www.meetup.com/peopleinc/events/310731650" target="_blank">People Inc.</a> on Java 25'));

const NewYorkWorldTradeCenterMarker = L.marker(NewYorkWorldTraceCenter, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup('<a href="https://www.eventbrite.com/e/tinker-talk-breadboarding-human-robot-interaction-talk-networking-tickets-1486262564339" target="_blank">Robotics Workshop</a> on Breadboarding'));






const MontrealCANCWICMarker = L.marker(MontrealCANCWIC, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup('<a href="https://cscan-infocan.ca/celebration-of-women-in-computing/" target="_blank">Canadian Celebration of Women in Computing</a> on my research on Cardiac Imaging Software'));

const HalifaxCANCWICMarker = L.marker(HalifaxCANCWIC, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup('<a href="https://cscan-infocan.ca/celebration-of-women-in-computing/" target="_blank">Canadian Celebration of Women in Computing</a> on my internship experience at Intuit'));

const NewOrleansAAAIMarker = L.marker(NewOrleansAAAI, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup('<a href="https://aaai.org/" target="_blank">Association for the Advancement of Artificial Intelligence</a> on making friendly robots for children on the autism spectrum'));

const WaterlooEquithonMarker = L.marker(WaterlooEquithon, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup('<a href="https://equithon2018.devpost.com/" target="_blank">Equithon Hackathon</a> on my winning chat bot project'));

const LakeLouiseNEWMarker = L.marker(LakeLouiseNEW, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup('<a href="https://www.networkofempoweredwomen.ca/" target="_blank">Network of Empowered Women</a> on my winning case study'));

const HawaiiAAAIMarker = L.marker(HawaiiAAAI, {icon: micIcon})
                            .addTo(map)
                            .bindPopup(stylePopup('<a href="https://aaai.org/" target="_blank">Association for the Advancement of Artificial Intelligence</a> on Robotics'));





