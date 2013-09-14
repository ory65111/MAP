jQuery('#MPage8').bind('pageinit',function(event){
 function Geolocation1_Init() {
	 Geolocation1_ID = navigator.geolocation.watchPosition(Geolocation1Change, Geolocation1Error, {enableHighAccuracy: false, timeout: 10000, maximumAge: 10000});

  }


});


         window.gmaps_mmap_callbacks = [];


         window.gmaps_mmap_loaded = function()
         {
            for(var i = 0; i < window.gmaps_mmap_callbacks.length; i++)
            {
               window.gmaps_mmap_callbacks[i]();
            }
         }

         window.gmaps_mmap_register_callback = function(callback)
         {
            if(!(callback in  window.gmaps_mmap_callbacks))
                window.gmaps_mmap_callbacks.push(callback);
         }

         // if google maps exists call load method
        if(window.google)
        {
            setTimeout(window.gmaps_mmap_loaded, 0);
        }
        else
        {
            var head= document.getElementsByTagName('head')[0];
           var script= document.createElement('script');
           script.type= 'text/javascript';
           script.src= "http://maps.google.com/maps/api/js?sensor=true&callback=gmaps_mmap_loaded";
           script.charset = "UTF-8";
           head.appendChild(script);
        }

               gmaps_mmap_register_callback(MMap1_load);
      function MMap1_load()
{
var MMap1_uiMap = jQuery("#MMap1").gmap({"zoom":5,"maxZoom":15,"minZoom":1,"draggable":true});
var MMap1_googleMap = jQuery(MMap1_uiMap.gmap('get', 'map'));
MMap1Load();
}

var Geolocation1_ID = null;
      var Geolocation1Activate=function(options) {
        var options = options || {enableHighAccuracy: false, timeout: 10000, maximumAge: 10000}
        Geolocation1_ID = navigator.geolocation.watchPosition(Geolocation1Change, Geolocation1Error,options);
        };

      var Geolocation1Retrieve=function(options) {
        var options = options || {enableHighAccuracy: false, timeout: 10000, maximumAge: 10000}
        Geolocation1_ID = navigator.geolocation.getCurrentPosition(Geolocation1Change, Geolocation1Error,options);
        };
      
      var Geolocation1Deactivate=function() {
        navigator.geolocation.clearWatch(Geolocation1_ID);
        Geolocation1_ID = null;
      }
      
	  
	  // This is where you can place your Javascript code
function Geolocation1Change(event) {
 var yourStartLatLng= new google.maps.LatLng(event.coords.latitude,event.coords.longitude);

     var mapOptions = {
        center: yourStartLatLng,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP};

   // $('#MMap1').gmap('option','center',yourStartLatLng);
    map = new google.maps.Map(document.getElementById("MMap1"), mapOptions);

    var markerOptions = {
    position: yourStartLatLng,
    map:  map,
    animation: google.maps.Animation.DROP,
    clickable: true
    };
    var marker = new google.maps.Marker(markerOptions);

    $('#MLabel1').html(
        event.coords.latitude
        +","
        +event.coords.longitude+" .");

}
function MLabel2Click(event) {

    GeolocationActivate();
}


var Geolocation_ID = null;
      var GeolocationActivate=function(options) {
        var options = options || {enableHighAccuracy: true, timeout: 10000, maximumAge: 10000}
        Geolocation_ID = navigator.geolocation.watchPosition(Geolocation1Change, Geolocation1Error,options);
        };

      var GeolocationRetrieve=function(options) {
        var options = options || {enableHighAccuracy: true, timeout: 10000, maximumAge: 10000}
        Geolocation_ID = navigator.geolocation.getCurrentPosition(Geolocation1Change, Geolocation1Error,options);
        };

      var GeolocationDeactivate=function() {
        navigator.geolocation.clearWatch(Geolocation_ID);
        Geolocation_ID = null;
      }


function Geolocation1Error(event) {
/**/
}
