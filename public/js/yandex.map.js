const init = () => {
  const map = new ymaps.Map('map', {
    center: [59.943683, 30.360164],
    zoom: 16,
    controls: ['zoomControl', 'geolocationControl'],
  })
  const myPlacemark = new ymaps.Placemark([59.943683, 30.360164], {
    // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
    balloonContentHeader: "Самые классные носки",
    balloonContentBody: `<a href="tel:+79999999">Звоните нам бесплатно!</ a>`,
    balloonContentFooter: "Адрес: ул. Кирочная, д. 19",
    hintContent: "Скорее жми!"
  });
  // Размещение геообъекта на карте.
  map.geoObjects.add(myPlacemark);
}
ymaps.ready(init);
