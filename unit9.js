// This is where you can place your Javascript code

function MGeolocation1Change(event) {
    var yourStartLatLng= new google.maps.LatLng(event.coords.latitude,event.coords.longitude);
    $('#Map').gmap('option','center',yourStartLatLng);
    $('#MLabel1').html(
        event.coords.latitude
        +","
        +event.coords.longitude+" .");
}



function MGeolocation1Error(event) {
    alert(event);
}