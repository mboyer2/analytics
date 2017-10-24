$(document).ready(function(){
	var start
	var end
	var timeElapsed
	var scrollPercent=0
	var hoverEnd
	var hoverStart
	var hoverTime

	start = new Date()
		console.log(start)
		//calculates start time

		$(window).on('beforeunload', function(){
			end = new Date()
			console.log(end)
			//calculates end time

      		timeElapsed = end - start
      		console.log('============', timeElapsed)
	})
	
	function amountscrolled(){
    var winheight = $(window).height()
    var docheight = $(document).height()
    var scrollTop = $(window).scrollTop()
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop/trackLength * 100) 
    // console.log(pctScrolled + '% scrolled')
	}
 
	$(window).on("scroll", function(){
    amountscrolled()
    //calculates percentage scrolled
	



	})

	$( "#phonePhoto" ).mouseover(function() {
		hoverStart = new Date()
		console.log(hoverStart)

			$( "#phonePhoto" ).mouseout(function() {
			hoverEnd = new Date()
			console.log(hoverEnd)

		hoverTime = hoverEnd - hoverStart
		console.log('================', hoverTime)


		})
	})

	$(document).on('keydown', function(event){
		var vowelsCount = 0

		for (var i = 0; i < $('#input').text.length; i++) {

  		//if a vowel, add to vowel count
    		if (event.key === "a" || event.key === "e" || event.key === "i" || event.key === "o" || event.key === "u") {
     	 	vowelsCount += 1;

     	 	console.log(vowelsCount)
     	 	
    		}
  		}






		// var vowels = 
		// var letters = $('#input').val().toLowerCase()


		
		
		})

	})
		


			

  	 
      









// 	$('#sammyLink').on('click', function(event){
// 		//link to felix page
// 	})



// 	})
// })

