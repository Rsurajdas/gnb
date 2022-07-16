const tabHeads = document.querySelectorAll(".tab__head");
const tabBodys = document.querySelectorAll(".tab__content");

tabHeads.forEach((head, idx) => {
  head.addEventListener("click", () => {
    tabHeads.forEach((head) => head.classList.remove("active"));
    head.classList.add("active");
    tabBodys.forEach((body) => {
      body.classList.remove("active");
    });
    tabBodys[idx].classList.add("active");
  });
});

// Map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.92248626324853, lng: -1.4740165323883072 },
    zoom: 15.5,
    mapId: "57871d8854ad007e",
  });

  const features = [
    {
      position: new google.maps.LatLng(52.92178767469431, -1.474016532419677),
      icon: "./assets/img/2k.png",
    },
    {
      position: new google.maps.LatLng(52.92072683343571, -1.4768489449093545),
      icon: "./assets/img/2k+.png",
    },
    {
      position: new google.maps.LatLng(52.92108907483649, -1.4833291613630106),
      icon: "./assets/img/3k.png",
    },
    {
      position: new google.maps.LatLng(52.91764765917186, -1.4781793204726879),
      icon: "./assets/img/4k.png",
    },
    {
      position: new google.maps.LatLng(52.92204641252198, -1.4803250875103222),
      icon: "./assets/img/3k+.png",
    },
    {
      position: new google.maps.LatLng(52.921503061298026, -1.4843591295410752),
      icon: "./assets/img/4k+.png",
    },
    {
      position: new google.maps.LatLng(52.91865682443784, -1.4721711727673112),
      icon: "./assets/img/5k.png",
    },
    {
      position: new google.maps.LatLng(52.92401276948449, -1.4816125477329032),
      icon: "./assets/img/4k+.png",
    },
    {
      position: new google.maps.LatLng(52.921037326250506, -1.471098289248494),
      icon: "./assets/img/6k.png",
    },
    {
      position: new google.maps.LatLng(52.91705249940079, -1.4762481301388168),
      icon: "./assets/img/2k.png",
    },
    {
      position: new google.maps.LatLng(52.92450434477136, -1.4765914528648383),
      icon: "./assets/img/2k+.png",
    },
    {
      position: new google.maps.LatLng(52.9210114519343, -1.4757331460497847),
      icon: "./assets/img/3k+.png",
    },
    {
      position: new google.maps.LatLng(52.921037326250506, -1.4796813573990322),
      icon: "./assets/img/4k.png",
    },
    {
      position: new google.maps.LatLng(52.91995059165787, -1.4804109181918277),
      icon: "./assets/img/4k+.png",
    },
    {
      position: new google.maps.LatLng(52.9188120785452, -1.4750035852569887),
      icon: "./assets/img/5k+.png",
    },
    {
      position: new google.maps.LatLng(52.92007996625389, -1.4717420193597843),
      icon: "./assets/img/6k+.png",
    },
  ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: features[i].icon,
      map: map,
      animation: google.maps.Animation.DROP,
    });
  }
}

window.initMap = initMap;
