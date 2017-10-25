$(document).ready(function(){
	var start
	var end
	var timeElapsed
	var scrollPercent = 0
	var phonehoverEnd
	var phonehoverStart
	var phonehoverTime
	var felixhoverEnd
	var felixhoverStart
	var felixhoverTime
	var greghoverEnd
	var greghoverStart
	var greghoverTime
	var drabekhoverEnd
	var drabekhoverStart
	var drabekhoverTime
	var felixLinkhoverEnd
	var felixLinkhoverStart
	var felixLinkhoverTime
	var gregLinkhoverEnd
	var gregLinkhoverStart
	var gregLinkhoverTime
	var drabekLinkhoverEnd
	var drabekLinkhoverStart
	var drabekLinkhoverTime
	var inputhoverEnd
	var inputhoverStart
	var inputhoverTime
	var winheight 
    var docheight 
    var scrollTop 
    var trackLength 
    var pctScrolled
    var vowelsCount = 0
	
////////////////   TIME ON SITE    //////////////////////

	start = new Date()
		//calculates start time

		$(window).on('beforeunload', function(){
			end = new Date()
			//calculates end time

      		timeElapsed = (end - start)/1000
      		console.log("seconds spent on page", timeElapsed)
      		console.log("percentage scrolled", pctScrolled + '% scrolled')
      		console.log("time spent hovering on phone photo in seconds", phonehoverTime)
      		console.log("time spent hovering on Felix photo in seconds", felixhoverTime)
      		console.log("time spent hovering on Greg photo in seconds", greghoverTime)
      		console.log("time spent hovering on Drabek photo in seconds", drabekhoverTime)
      		console.log("time spent hovering on Felix Link in seconds", felixLinkhoverTime)
      		console.log("time spent hovering on Greg Link in seconds", gregLinkhoverTime)
      		console.log("time spent hovering on Drabek Link in seconds", drabekLinkhoverTime)
      		console.log("time spent hovering on input in seconds", inputhoverTime)
      		console.log("vowels count", vowelsCount)

      		return 'a value'
		
	})
	
	function amountscrolled(){
    winheight = $(window).height()
    docheight = $(document).height()
    scrollTop = $(window).scrollTop()
    trackLength = docheight - winheight
    pctScrolled = Math.floor(scrollTop/trackLength * 100) 
	}
 
	$(window).on("scroll", function(){
    amountscrolled()
    //calculates percentage scrolled
	
	})

////////////////   HOVER TIME   //////////////////////


		//hovertime for phonePhoto
	$( "#phonePhoto" ).mouseover(function() {
		phonehoverStart = new Date()
		
			$( "#phonePhoto" ).mouseout(function() {
			phonehoverEnd = new Date()
			
		phonehoverTime = (phonehoverEnd - phonehoverStart)/1000
		

		})
	})
		//hovertime for Felix
	$( "#felixPhoto" ).mouseover(function() {
		felixhoverStart = new Date()

			$( "#felixPhoto" ).mouseout(function() {
			felixhoverEnd = new Date()

		felixhoverTime = (felixhoverEnd - felixhoverStart)/1000

		})
	})

		//hovertime for Greg
	$( "#gregPhoto" ).mouseover(function() {
		greghoverStart = new Date()

			$( "#gregPhoto" ).mouseout(function() {
			greghoverEnd = new Date()

		greghoverTime = (greghoverEnd - greghoverStart)/1000

		})
	})

		//hovertime for Drabek
	$( "#drabekPhoto" ).mouseover(function() {
		drabekhoverStart = new Date()

			$( "#drabekPhoto" ).mouseout(function() {
			drabekhoverEnd = new Date()

		drabekhoverTime = (drabekhoverEnd - drabekhoverStart)/1000

		})
	})

		//hovertime for Felix Link
	$( "#felixLink" ).mouseover(function() {
		felixLinkhoverStart = new Date()

			$( "#felixLink" ).mouseout(function() {
			felixLinkhoverEnd = new Date()

		felixLinkhoverTime = (felixLinkhoverEnd - felixLinkhoverStart)/1000

		})
	})

		//hovertime for Greg Link
	$( "#gregLink" ).mouseover(function() {
		gregLinkhoverStart = new Date()

			$( "#gregLink" ).mouseout(function() {
			gregLinkhoverEnd = new Date()
			
		gregLinkhoverTime = (gregLinkhoverEnd - gregLinkhoverStart)/1000
		
		})
	})

		//hovertime for drabek Link
	$( "#drabekLink" ).mouseover(function() {
		drabekLinkhoverStart = new Date()

			$( "#drabekLink" ).mouseout(function() {
			drabekLinkhoverEnd = new Date()

		drabekLinkhoverTime = (drabekLinkhoverEnd - drabekLinkhoverStart)/1000
		

		})
	})

		//hovertime for input
	$( "#input" ).mouseover(function() {
		inputhoverStart = new Date()

			$( "#input" ).mouseout(function() {
			inputhoverEnd = new Date()
		
		inputhoverTime = (inputhoverEnd - inputhoverStart)/1000

		})
	})

////////////////   VOWEL COUNT   //////////////////////

	$(document).on('keydown', function(event){
		event.key= event.key.toLowerCase()
		//make all lowercase
		for (var i = 0; i < $('#input').text.length; i++) {

  		//if a vowel, add to vowel count
    		if (event.key === "a" || event.key === "e" || event.key === "i" || event.key === "o" || event.key === "u") {
     	 	vowelsCount += 1;
     	 	}
  		}
	})

////////////////   LINK CLICK    //////////////////////

		//link click for Felix Link
	$( "#felixLink" ).on('click', function() {
		console.log("User clicked on Felix Link to leave page")
		console.log("seconds spent on page", timeElapsed)
  		console.log("percentage scrolled", pctScrolled + '% scrolled')
  		console.log("time spent hovering on phone photo in seconds", phonehoverTime)
  		console.log("time spent hovering on Felix photo in seconds", felixhoverTime)
  		console.log("time spent hovering on Greg photo in seconds", greghoverTime)
  		console.log("time spent hovering on Drabek photo in seconds", drabekhoverTime)
  		console.log("time spent hovering on Felix Link in seconds", felixLinkhoverTime)
  		console.log("time spent hovering on Greg Link in seconds", gregLinkhoverTime)
  		console.log("time spent hovering on Drabek Link in seconds", drabekLinkhoverTime)
  		console.log("time spent hovering on input in seconds", inputhoverTime)
  		console.log("vowels count", vowelsCount)
	})

		//link click for Greg Link
	$( "#gregLink" ).on('click', function() {
		console.log("User clicked on Greg Link to leave page")
		console.log("seconds spent on page", timeElapsed)
  		console.log("percentage scrolled", pctScrolled + '% scrolled')
  		console.log("time spent hovering on phone photo in seconds", phonehoverTime)
  		console.log("time spent hovering on Felix photo in seconds", felixhoverTime)
  		console.log("time spent hovering on Greg photo in seconds", greghoverTime)
  		console.log("time spent hovering on Drabek photo in seconds", drabekhoverTime)
  		console.log("time spent hovering on Felix Link in seconds", felixLinkhoverTime)
  		console.log("time spent hovering on Greg Link in seconds", gregLinkhoverTime)
  		console.log("time spent hovering on Drabek Link in seconds", drabekLinkhoverTime)
  		console.log("time spent hovering on input in seconds", inputhoverTime)
  		console.log("vowels count", vowelsCount)
	})

		//link click for Drabek Link
	$( "#drabekLink" ).on('click', function() {
		console.log("User clicked on Drabek Link to leave page")
		console.log("seconds spent on page", timeElapsed)
  		console.log("percentage scrolled", pctScrolled + '% scrolled')
  		console.log("time spent hovering on phone photo in seconds", phonehoverTime)
  		console.log("time spent hovering on Felix photo in seconds", felixhoverTime)
  		console.log("time spent hovering on Greg photo in seconds", greghoverTime)
  		console.log("time spent hovering on Drabek photo in seconds", drabekhoverTime)
  		console.log("time spent hovering on Felix Link in seconds", felixLinkhoverTime)
  		console.log("time spent hovering on Greg Link in seconds", gregLinkhoverTime)
  		console.log("time spent hovering on Drabek Link in seconds", drabekLinkhoverTime)
  		console.log("time spent hovering on input in seconds", inputhoverTime)
  		console.log("vowels count", vowelsCount)
	})





	})
		


			

  	 
      











