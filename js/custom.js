

$(document).ready(function() {
    
// One-Slider
 
  $(".one_item").owlCarousel({
      
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
  });
    
  //Three_Slider with content 
  
  $(".three_item").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
	  navigation : true,
	  navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"] 
	  
 
  });
  
  //Custom Options with Events
  
  var owl = $(".custom_item");
 
  owl.owlCarousel({
      items : 10, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
    
	
  //Three_Slider
  
  $(".three_item_content").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});



// Scroll to Top





















