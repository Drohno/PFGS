/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers
 */
    
function register_event_handlers()
 {
     
    /* button  #navBPrinci */
    $(document).on("click", "#navBPrinci", function(evt)
    {    
        uib_sb.toggle_sidebar($("#sbPrin")); 
        
    });

        /* button  Button */


        /* button  #navBtiendas */


        /* button  #navBtiendas */
    

        
        /* button  Botigues */


        /* button  Promos */


        /* button  #bTp */


        /* button  #bTp */


        /* button  #bPp */


        /* button  #bTp */
    

        /* button  #bPt */
    $(document).on("click", "#bPt", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage");
    });

        /* button  #navBpromos */
    

        /* button  #bPp */


        /* button  #bPp */


        /* button  #bPp */


        /* listitem  Fotografía e Informática */


        /* button  #navB */
    

        /* listitem  Fotografía e Informática */
    $(document).on("click", ".uib_w_18", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#a20cmstudio");
    });

        /* listitem  Librerías, papelerías */
    $(document).on("click", ".uib_w_19", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#abacus");
    });

        /* listitem  Informática Sant Boi */


        /* button  #bPp */


        /* button  #bPp */


        /* button  #bPp */


        /* button  #bPp */


        /* button  #bPp */


        /* button  #bPp */


        /* button  #bPp */


        /* listitem  Informática Sant Boi */
    $(document).on("click", ".uib_w_20", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#informaticastboi");
    });

        /* button  #navRegistro */
    

        /* button  #bPp */


        /* button  #bPr */
    $(document).on("click", "#bPr", function(evt)
    {
         /*global activate_page */
         activate_page("#registro");
    });

        /* button  #bPp */


        /* button  #bPp */
    $(document).on("click", "#bPp", function(evt)
    {
         /*global activate_page */
         activate_page("#promos");
    });

        /* button  #bPr */
    $(document).on("click", "#bPr", function(evt)
    {
         /*global activate_page */
         activate_page("#registro");
    });

        /* button  #bPp */
    $(document).on("click", "#bPp", function(evt)
    {
         /*global activate_page */
         activate_page("#promos");
    });

        /* button  #bPr */
    $(document).on("click", "#bPr", function(evt)
    {
         /*global activate_page */
         activate_page("#registro");
    });

        /* button  #bPp */
    $(document).on("click", "#bPp", function(evt)
    {
         /*global activate_page */
         activate_page("#promos");
    });

        /* button  #bPr */
    $(document).on("click", "#bPr", function(evt)
    {
         /*global activate_page */
         activate_page("#registro");
    });

        /* button  #bPp */
    $(document).on("click", "#bPp", function(evt)
    {
         /*global activate_page */
         activate_page("#promos");
    });

        /* button  #bPr */
    $(document).on("click", "#bPr", function(evt)
    {
         /*global activate_page */
         activate_page("#registro");
    });
     
        /* listitem  .uib_w_21 */


        /* listitem  El Fogon de Sant Boi */
    $(document).on("click", ".uib_w_21", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#fogonstboi");
    });

        /* listitem  Fotografía e Informática */


        /* listitem  Fotografía e Informática */
    $(document).on("click", ".uib_w_26", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#a20cmstudio");
    });

        /* listitem  Librerías, papelerías */
    $(document).on("click", ".uib_w_25", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#abacus");
    });

        /* listitem  Informática Sant Boi */
    $(document).on("click", ".uib_w_27", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#informaticastboi");
    });

        /* listitem  .uib_w_34 */
    $(document).on("click", ".uib_w_34", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#quiroteresa");
    });

        /* listitem  El Fogon de Sant Boi */
    $(document).on("click", ".uib_w_35", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#fogonstboi");
    });
     
      /* button  #bPc */
    $(document).on("click", "#bPc", function(evt)
    {
         /*global activate_page */
         activate_page("#cuenta"); 
    });
    
        /* button  #navBCuenta */
    
    
        /* button  #SliderBarBotonRegistro */
    
    
        /* button  #bTp */
    $(document).on("click", "#bTp", function(evt)
    {
         /*global activate_page */
         activate_page("#tiendas"); 
    });
    
        /* button  #SliderBarBotonRegistro */
    $(document).on("click", "#SliderBarBotonRegistro", function(evt)
    {
         /*global activate_page */
         activate_page("#registro"); 
    });
    
        /* button  #SliderBarBotonCuenta */
    $(document).on("click", "#SliderBarBotonCuenta", function(evt)
    {
         /*global activate_page */
         activate_page("#cuenta"); 
    });
    
        /* button  Registro */
    
    
        /* button  Cuenta */
    
    
        /* button  #navBCuenta */
    $(document).on("click", "#navBCuenta", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sbCuenta"));  
         return false;
    });
    
        /* button  #navBtiendas */
    $(document).on("click", "#navBtiendas", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sbTiendas"));  
         return false;
    });
    
        /* button  #navB */
    
    
        /* button  #navB */
    
    
        /* button  #navB */
    
    
        /* button  #navB */
    
    
        /* button  #navB */
    
    
        /* button  #navB */
    $(document).on("click", "#navB", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sb"));  
         return false;
    });
    
        /* button  #ACuenta */
    
    
        /* button  #ACuenta */
    
    
        /* button  #ACuenta */
    $(document).on("click", "#ACuenta", function(evt)
    {
         /*global activate_page */
         activate_page("#cuenta"); 
    });
    
        /* button  #ARegistro */
    $(document).on("click", "#ARegistro", function(evt)
    {
         /*global activate_page */
         activate_page("#registro"); 
         return false;
    });
    
        /* button  #navBpromos */
    $(document).on("click", "#navBpromos", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sbpromos"));  
         return false;
    });
    
        /* button  #navRegistro */
    $(document).on("click", "#navRegistro", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sbRegistro"));  
         return false;
    });
     
     
    /* PUSH NOTIFICATIONS */
     
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
     
     /* FIN PUSH NOTIFICATIONS */
      
    
    /* button  #register */
    
    
        /* button  #register */
    $(document).on("click", "#register", function(evt)
    {
      var email = $("#email").val();
      alert(email);
      var nom = $("#nom").val();
      alert(nom);
      var ape = $("#ape").val();
      alert(ape);
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
                            localStorage.setItem("email",email);
                            localStorage.setItem("nom",nom);
                            localStorage.setItem("ape",ape);
                            localStorage.setItem("edad",jQuery('input[name="edad"]').val());
                            localStorage.setItem("registrado","true");
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
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
