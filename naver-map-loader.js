{\rtf1\ansi\ansicpg949\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 window.initNaverMap = function () \{\
  const map = new naver.maps.Map('map', \{\
    center: new naver.maps.LatLng(37.5665, 126.9780),\
    zoom: 11\
  \});\
\
  const markerData = [\
    \{ lat: 37.5665, lng: 126.9780 \},\
    \{ lat: 37.5651, lng: 126.9895 \},\
    \{ lat: 37.5640, lng: 126.9900 \}\
  ];\
\
  const markers = markerData.map(item => new naver.maps.Marker(\{\
    position: new naver.maps.LatLng(item.lat, item.lng),\
    map: map\
  \}));\
\
  const script = document.createElement("script");\
  script.src = "https://oapi.map.naver.com/openapi/v3/maps-clusterer.js";\
  script.onload = function () \{\
    new MarkerClustering(\{\
      minClusterSize: 2,\
      map: map,\
      markers: markers,\
      disableClickZoom: false,\
      gridSize: 80\
    \});\
  \};\
  document.head.appendChild(script);\
\};\
\
if (window.naver && naver.maps) \{\
  window.initNaverMap();\
\} else \{\
  const check = setInterval(() => \{\
    if (window.naver && naver.maps) \{\
      clearInterval(check);\
      window.initNaverMap();\
    \}\
  \}, 100);\
\}}