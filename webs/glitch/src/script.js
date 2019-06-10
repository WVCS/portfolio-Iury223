var menuStatus = false;
var flexStatus = false;
var nameCheck = false;
var midY = window.innerHeight/2;
var midX = window.innerWidth/2;
//My variables
$(function() {
  //unAnimating the text from the screen
    $('.clickMe').on('click', function() {
        $('.glitchy').animate({
          opacity: 0
        }, 200);
		//the button goes siko mode
      $('.clickMe').fadeOut(200);
		//the box goes siko mode
        $('.box-glitch').animate({
          top: midY,
          left: midX,
          height: '5vh',
          width: '100px',
          'border-radius': '50px'
        }, 500)
        .animate({
          top: 0,
          opacity: 0
        }, 300, function(){
          console.log('hi');
          menuStatus = true;
          console.log(menuStatus);
          if(menuStatus === true){ //setting menuStatus to true to start the Name animation
            animateName();
        }
        });
      function animateName(){  //the function that is responsible for the name to go siko mode
        $('.myName').animate({
			top: '5%',
			'font-size': '350px'
        }, 500)
        .animate({
          opacity: 1,
        }, 500)
        .delay(500).animate({
          left: '3%',
		  'font-size': "150px"
        }, 500);
		//the rest of my name goes siko mode here
		$('.myNameRest').delay(2500).animate({
			opacity: 1,
			'letter-spacing': "0px"
		}, 800, function(){
			nameCheck = true;
			if(nameCheck === true){
				restHeadAnimation(); //triggering the new function that will animate the rest of the header
			}
		});

      }
	  function restHeadAnimation(){
		  $('.portfolio').delay(500).animate({
			  opacity: 1
		  }, 300);
		   $('.quote').delay(700).animate({
			  opacity: 1
		  }, 300);
	  }
	  
  });
});
