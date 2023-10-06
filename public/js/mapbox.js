/* eslint-disable */
// const mapboxgl = require('mapbox-gl');
// import mapboxgl from 'mapbox-gl';



export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZnJhbmt6YXBwYXRvIiwiYSI6ImNsbWF1MGlibzBybXkzaHM1dno0YjM4c2gifQ.tsTb9gPPFYOM1qA1o1G-Lw';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/frankzappato/clmavq2cd030i01ma4vp26nol',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // intereactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';
    // AddMarker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    //Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include locations
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
