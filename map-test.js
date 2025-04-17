window.initNaverMap = function () {
  const map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.5665, 126.9780),
    zoom: 11
  });

  const markerData = [
    { lat: 37.5665, lng: 126.9780 },
    { lat: 37.5651, lng: 126.9895 },
    { lat: 37.5640, lng: 126.9900 }
  ];

  const markers = markerData.map(item => new naver.maps.Marker({
    position: new naver.maps.LatLng(item.lat, item.lng),
    map: map
  }));

  const script = document.createElement("script");
  script.src = "https://oapi.map.naver.com/openapi/v3/maps-clusterer.js";
  script.onload = function () {
    new MarkerClustering({
      minClusterSize: 2,
      map: map,
      markers: markers,
      disableClickZoom: false,
      gridSize: 80
    });
  };
  document.head.appendChild(script);
};

if (window.naver && naver.maps) {
  window.initNaverMap();
} else {
  const check = setInterval(() => {
    if (window.naver && naver.maps) {
      clearInterval(check);
      window.initNaverMap();
    }
  }, 100);
}
