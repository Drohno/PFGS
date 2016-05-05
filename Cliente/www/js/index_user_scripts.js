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
    $(document).on("click", "#bPp", function(evt)
    {
        /* your code goes here */
    });

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

    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
