var MPage9DeviceReady=function(){
  MGeolocation1Activate();
};
jQuery('#MPage9').bind('pageinit',function(event){
 if(typeof PhoneGap !== 'undefined' && PhoneGap.available)
 MPage9DeviceReady();
else
 document.addEventListener("deviceready", MPage9DeviceReady, false);

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
}

var MGeolocation1=null;
var MGeolocation1Activate=function(options) {
   var options = options || {frequency:10000,enableHighAccuracy:false,timeout:10000,maximumAge:10000};
   MGeolocation1=navigator.geolocation.watchPosition(MGeolocation1Change,MGeolocation1Error,options);
}
var MGeolocation1Deactivate=function() {
   navigator.geolocation.clearWatch(MGeolocation1);
   MGeolocation1=null;
}
