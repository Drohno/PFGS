/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    var pushNotification;
    var regID;
     
    function successHandler (result) {
        window.alert('result = ' + result);
    }
    
    function errorHandler (error) {
        window.alert('error = ' + error);
    }
     
    window.onNotificationGCM = function(e) {
        switch( e.event )
        {
            case 'registered':
                if ( e.regid.length > 0 )
                {
                    window.console.log('REGISTERED -> REGID:' + e.regid );
                    $(function () {
                        //introducimos token en el sitio correspondiente del form
                      $('#pushtoken').val(e.regid);
                      window.alert("token guardado en formulario");
                    });
                }
                break;
            case 'message':
                window.console.log('gcm: on message ');
                break;

            case 'error':
                window.console.log( "gcm error: "+e.msg );
                break;
            default:
                break;
        }
    };
    var txt;
    //Comprobamos que el dispositivo esta listo para pedir el id a GCM
    document.addEventListener("deviceready", function(){
        pushNotification = window.plugins.pushNotification;
        window.alert("Device Ready");
        
        window.plugins.pushNotification.unregister(successHandler, errorHandler);
        window.alert("Unregistered");
        if ( device.platform == 'android' || device.platform == 'Android' || device.platform == "amazon-fireos" ){
            try {
                pushNotification.register(
                    successHandler, errorHandler, { "senderID":"443647167733", "ecb":"window.onNotificationGCM" });
            } catch(err)
            {
                txt="There was an error on this page.\n\n";
                txt+="Error description: " + err.message + "\n\n";
                window.alert(txt);
            }
        }
    }, false);
     
    function validateEmail(email) { 
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
     /* button  -Form Submit- Button */
    $(document).on("click", ".uib_w_6", function(evt)
    {   
      var email = $("#email").val();
      var nom = $("#nom").val();
      var ape = $("#ape").val();
      //validaciones antes de registrar
      if (validateEmail(email)) {
          if (nom !== ""){
              if(ape !== ""){
                //Registro de usuario en BBDD
                $.ajax({
                        type:'POST',
                        url:'http://www.appserv.hol.es/appservice.php',
                        data: $("#formulario").serialize(),
                        dataType: 'text',
                        success: function (data) {
                            window.alert('conexion establecida');
                            //var obj = JSON.parse(data);
                            //alert(obj.resultat[1]);
                        },
                        error: function(xhr, textStatus, errorThrown, data){
                            window.console.log("xhr.status: " + xhr.status);
                            window.console.log("xhr.statusText: " + xhr.statusText);
                            window.console.log("xhr.readyState: " + xhr.readyState);
                            window.console.log("xhr.responseText: " + xhr.responseText);
                            window.console.log("errorThrown: " + errorThrown);
                            window.alert(xhr.responseText);                            
                        }
                    });
                evt.preventDefault();
              } else {
                  window.alert("Indique su apellido");
              }
          } else {
              window.alert("Indique su nombre");
          }
      } else {
          window.alert("Indique su email correctamente");
      }
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
