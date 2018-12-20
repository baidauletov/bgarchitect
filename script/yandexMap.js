// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init(){ 
    // Создание карты.    
    var myMap = new ymaps.Map("arch_id", {
        // Координаты центра карты.
        // Порядок по умолчнию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [43.202448, 76.891573],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    });

    var myPlacemark = new ymaps.Placemark([43.202448, 76.891573], {
        // Хинт показывается при наведении мышкой на иконку метки.
        hintContent: ' Our Office ',
        // Балун откроется при клике по метке.
        // balloonContent: '<div style="display: flex; flex-direction: column; width: 90%;" ><ul style="list-style-type: circle!important;"><li><h1 style="display: inline-block;  ">Ganga Style</h1></li><li><div style="display: inline-block; margin-right: 5px; width: 5px; height: 5px; border-radius: 3px; background-color: #000"></div><p style=" display: inline-block; font:14px/20px Helvetica,Arial,sans-serif;">Макатаева, 154 <br>Алмалинский район, Алматы</p></li><li> <div style="display: inline-block; margin-right: 5px; width: 5px; height: 5px; border-radius: 3px; background-color: #000"></div><p style=" display: inline-block; font: 14px/20px Helvetica,Arial,sans-serif;">Сегодня 9:00-21:00</p></li></ul></div><div style="width:100%; padding: 0 auto;"><img style=" display:inline-block; margin: 0 auto; width: 70px;" src="image/ganga.png" > </div>'
    });

    // После того как метка была создана, ее
    // можно добавить на карту.
    myMap.geoObjects.add(myPlacemark);
}