mapboxgl.accessToken = 'pk.eyJ1IjoianBpbmVkYTQ4IiwiYSI6ImNsbTExcHd1NDBoMWEzcW53azJmYzhmdDUifQ.k-wbGitDCqvusxkymcwQWw';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 9,
    center: [-82.639999, 27.773056 ]
  });

  function loadMap(){
    map.on('load', () => {
        // Add a layer to use the image to represent the data.
        map.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': 'point', 
            'layout': {
            'icon-image': 'cat', 
            'icon-size': 0.25
            }
            });
        }
        );


        }