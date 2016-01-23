/**

 * @file
 * Bluez Slider Javascript.
 *
 */
(function ($) {
  Drupal.behaviors.slider = {
    attach: function (context, settings) {


      $(window).load(function() {

        $("#slideshow").fadeIn("fast");
        $("#slideshow .slides img").show();
        $("#slideshow .slides").fadeIn("slow");
        $("#slideshow .slide-control").fadeIn("slow");
        $("#slide-nav").fadeIn("slow");

        $(".slides").cycle({
          fx:     settings.effect,
          speed:  "slow",
          timeout:settings.effect_time,
          random: settings.slideshow_randomize,
          nowrap: settings.slideshow_wrap,
          pause:  settings.slideshow_pause,
          prev:    	"#prev",
          next:    	"#next",
          pager:  "#slide-nav",
          pagerAnchorBuilder: function(idx, slide) {
            return "#slide-nav li:eq(" + (idx) + ") a";
          },
          slideResize: true,
          containerResize: false,
          height: "auto",
          fit: 1,
          before: function(){
            $(this).parent().find(".slider-item.current").removeClass("current");
          },
          after: onAfter
        });

      });
      function onAfter(curr, next, opts, fwd) {
        var $ht = $(this).height();
        $(this).parent().height($ht);
        $(this).addClass("current");
      }

      $(window).load(function() {
        var $ht = $(".slider-item.current").height();
        $(".slides").height($ht);
      });

      $(window).resize(function() {
        var $ht = $(".slider-item.current").height();
        $(".slides").height($ht);
      });
    }
  };
})(jQuery);
