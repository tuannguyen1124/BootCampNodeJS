//var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');


export const displayMap = locations => {

    mapboxgl.accessToken =
    'pk.eyJ1IjoidHVhbm54MTIzIiwiYSI6ImNsZmo0bWR4ZTBhbDgzeW11NWt1anllcnQifQ.TUConnQujP_e9GhbJDA-wQ';
  
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/tuannx123/clfj4sudk000601q9y249f3qn',
    scrollZoom: false
  });
  
  const bounds = new mapboxgl.LngLatBounds();
  
  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';
  
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);
  
    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p> Day ${loc.day}: ${loc.description} </p>`)
      .addTo(map);
  
    bounds.extend(loc.coordinates);
  });
  
  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 200,
      left: 100,
      right: 100
    }
  });
  
}
