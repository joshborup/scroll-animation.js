var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
    var trigger_position = (element_top_position  <= window_bottom_position - 150);
    var trigger_position_return = (element_top_position  >= window_bottom_position);
 
    //check to see if this current container is within viewport
    if (trigger_position && ($element.hasClass('slide-up') == true)) {
       
            
            $element.addClass('in-view-up');
            
           
    } else if (trigger_position && ($element.hasClass('slide-left') == true)) {
       
            
            $element.addClass('in-view-left');
            
           
    } else if (trigger_position && ($element.hasClass('slide-right') == true)) {
       
            
            $element.addClass('in-view-right');
            
           
    } else if (trigger_position_return)
      
        $element.removeClass('in-view-right in-view-left in-view-up');
        
  });
}

$(window).on('scroll', check_if_in_view);
