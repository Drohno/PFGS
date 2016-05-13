/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers
 */
 function register_event_handlers()
 {


     /* button  .uib_w_2 */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are:
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */

         uib_sb.toggle_sidebar($("#sidebar"));
    });

        /* button  Button */


        /* button  #navBtiendas */


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

         uib_sb.toggle_sidebar($(".uib_w_10"));
    });

        /* button  #navBPrinci */
    $(document).on("click", "#navBPrinci", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are:
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */

         uib_sb.toggle_sidebar($("#sbPrin"));
    });

        /* button  Botigues */


        /* button  Promos */


        /* button  #bTp */


        /* button  #bTp */


        /* button  #bPp */


        /* button  #bTp */
    $(document).on("click", "#bTp", function(evt)
    {
         /*global activate_page */
         activate_page("#tiendas");
    });

        /* button  #bPt */
    $(document).on("click", "#bPt", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage");
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
    });

        /* button  #bPp */


        /* button  #bPp */


        /* button  #bPp */


        /* listitem  Fotografía e Informática */


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
    });

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
    });

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

        /* button  #register */
    $(document).on("click", "#register", function(evt)
    {
        var postData = $(this).serialize();
        $.ajax({
                type:'POST',
                url:'http://appserv.hol.es/appservice.php',
                data: $("#form_registro").serialize(),
                dataType: 'text',
                success: function (data) {
                    activate_page("#postregistro");
                    //alert('conexion establecida');
                    //var obj = JSON.parse(data);
                    //alert(obj.resultat[1]);
                },
                error: function(xhr, textStatus, errorThrown, data){
                    console.log("xhr.status: " + xhr.status);
                    console.log("xhr.statusText: " + xhr.statusText);
                    console.log("xhr.readyState: " + xhr.readyState);
                    console.log("xhr.responseText: " + xhr.responseText);
                    console.log("errorThrown: " + errorThrown);
                    //alert(JSON.stringify(data));
                    
                }
            });
        evt.preventDefault();   
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
