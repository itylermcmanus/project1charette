$(document).ready(function() {
	var audio = $("#mysoundclip")[0];
      console.log(audio);


	$('#box1').click(function() {
		$(this).animate({width:'300px'});
		$(this).animate({width:'200px'});
	});

	$('#box2').click(function() {
		$(this).animate({height:'300px'}, "slow");
		$(this).animate({height:'100px'});
	});

	$('#box3').click(function() {
		$(this).animate({height:'0px'});
		
	});

	$('#box4').click(function() {
		$(this).animate({width:'90px'});
		$(this).animate({width:'200px'});
		
	});


	$('#box5').click(function() {
		$(this).animate({backgroundColor:'blue'});

	});

	$('#box6').click(function() {
		
		$(this).animate({borderWidth: '13px'});
		$(this).animate({borderWidth: '0px'});
		$(this).animate({borderWidth: '14px'});
		$(this).animate({borderWidth: '0px'});
		$(this).animate({borderWidth: '15px'});
		

	});

	$('#box7').click(function() {
		$(this).fadeOut(1500);
		
	});

	$('#box8').click(function() {
		$(this).addClass("animated" );
		$(this).addClass("bounce" );
		$(this).addClass("infinite" );
		
	});

	$('#box9').click(function() {
		$(this).addClass("animated" );
		$(this).addClass("rotateInDownLeft" );

		
	});

	$('#box10').click(function() {
		$(this).animate({borderRadius: '330px'});
		$(this).animate({borderRadius: '0px'});
		$(this).animate({borderRadius: '330px'});
		$(this).animate({borderRadius: '0px'});
		$(this).animate({borderRadius: '330px'});
		$(this).animate({borderRadius: '0px'});
		$(this).animate({borderRadius: '330px'});
		$(this).animate({borderRadius: '0px'});
		$(this).animate({borderRadius: '330px'});
		$(this).animate({borderRadius: '0px'});
		$(this).animate({borderRadius: '330px'});
		$(this).animate({borderRadius: '0px'});
	});

	$('#box11').click(function() {
		$(this).addClass("animated" );
		$(this).addClass("pulse" );
		$(this).addClass("infinite" );

		
	});

	$('#box12').click(function() {
		$(this).addClass("animated" );
		$(this).addClass("shake" );
		$(this).addClass("infinite" );

		
	});

	$('#box13').click(function() {
		$(this).addClass("animated" );
		$(this).addClass("jello" );
		

		
	});

	 $("#box14").click(function(){
	 	$(this).addClass("animated" );
		$(this).addClass("flash" );
		$(this).addClass("infinite" );
   		
   	}); 

	 $("#box15").click(function(){ 
		$(this).draggable();


	});

	 $('#box16').click(function() {
		$(this).animate({fontSize:'100px'});

	});

	$('#box17').click(function() {
		$('#mysoundclip')[0].play();
		$(this).addClass("grad");
		$(this).addClass("animated" );
		$(this).addClass("zoomIn" );

	});
	 
	 //this code is buck// 
	 $("#box18").click(function(){ 
	 	$(this).animate({borderRadius:'400px'});
	 	$(this).animate({width:'400px'});
	 	$(this).animate({width:'410px'});
	 	$(this).animate({width:'430px'});
	 	$(this).animate({width:'470px'});
	 	$(this).animate({width:'500px'});


	});

	 $('#box19').click(function() {
		
		$(this).addClass("animated" );
		$(this).addClass("swing" );
		$(this).animate({backgroundColor:'red'});
		$(this).addClass("swing" );
		$(this).animate({backgroundColor:'green'});
		$(this).addClass("infinite" );

	});

	 $('#box20').click(function() {
		$(this).addClass("animated" );
		$(this).addClass("lightSpeedOut" );
		$(this).animate({backgroundColor:'green'});

	});

	  $('#box21').click(function() {
		$(this).addClass("animated" );
		$(this).addClass("fadeOutUp" );

	});

	 $('#box22').click(function() {
		$(this).addClass("animated" );
		$(this).addClass("bounceIn");
		$(this).animate({backgroundColor:'#d6fc85'});
		$(this).addClass("animated" );
		$(this).addClass("zoomIn");




	});

	  $('#box23').click(function() {
		$(this).addClass("animated" );
		$(this).addClass("flipOutX" );
		$(this).addClass("infinite" );

	});

	 $('#box24').click(function() {
		$(this).addClass("animated" );
		$(this).addClass("zoomOut" );
		

	});

	  $("#box25").click(function(){ 
		$(this).animate({borderRadius:'100px'});
		$(this).animate({width:'50px'});
		$(this).animate({height:'300px'});
		$(this).draggable();


	});

	 $('#box26').click(function() {
		$(this).animate({width:'100px'});
		$(this).animate({height:'100px'});
		$(this).animate({backgroundColor:'yellow'});
		$(this).animate({borderRadius:'100px'});
		$(this).addClass("animated" );
		$(this).addClass("rollOut" ), '6500';
		

	});

	 $('#box27').click(function() {
	 	$(this).addClass("grad");
	 	$('#mysoundclip')[0].pause();
		$(this).addClass("animated" );
		$(this).addClass("zoomOut" );

		

	});

	 $('#box28').click(function() {
	 	$(this).addClass("animated" );
		$(this).addClass("fadeInRightBig" );


	
	});

	$('#box29').click(function() {
		$(this).animate({width:'500px'});
		$(this).animate({height:'500px'});
		$(this).animate({marginLeft:'50px'});
		$(this).animate({borderRadius:'250px'});
		$(this).addClass("animated" );
		$(this).addClass("hinge" );

		

	});

	$('#box30').click(function() {
		$(this).animate({width:'4000px'});
		$(this).addClass("animated" );
		$(this).addClass("wiggle" );
		

	});
	

	  $('#box31').click(function() {
		$(this).animate({width:'80px'});
		$(this).animate({height:'400px'});
		$(this).draggable();
		$(this).addClass("animated" );
		$(this).addClass("jello" );
		$(this).addClass("infinite" );

	});

	 $('#box32').click(function() {
	 	$(this).animate({width:'360px'});
		$(this).animate({height:'360px'});
		$(this).animate({backgroundColor:'purple'});
		$(this).addClass("animated" );
		$(this).addClass("headShake" );
		$(this).addClass("infinite" );


	});

	  $('#box33').click(function() {
		$(this).addClass("animated" );
		$(this).addClass("flipOutX" );
		$(this).addClass("infinite" );

	});

	 $('#box34').click(function() {
	 	$(this).animate({width:'16px'});
		$(this).animate({height:'16px'});
		$(this).animate({borderRadius:'8px'});
		$(this).animate({backgroundColor:'#e38bd9'});
		$(this).draggable();


		

	});

	 $('#box35').click(function() {
	 	$(this).animate({marginLeft:'160px'});
		$(this).animate({marginTop:'16px'});
		$(this).animate({marginLeft:'16px'});
		$(this).animate({marginTop:'160px'});
		$(this).animate({width:'16px'});
		$(this).animate({height:'16px'});
		

	});

	 $('#box36').click(function() {
		$(this).animate({height:'60px'});
		$(this).animate({width:'16px'});
		$(this).addClass("animated" );
		$(this).addClass("lightSpeedOut" );
		

	});

	 $('#box37').click(function() {
		$(this).animate({width:'16px'});
		$(this).animate({height:'16px'});
		$(this).animate({borderRadius:'8px'});
		$(this).animate({backgroundColor:'#e38bd9'});
		$(this).animate({paddingRight:'20px'});
		$(this).animate({paddingTop:'45px'});
		$(this).addClass("animated" );
		$(this).addClass("pulse" );
		

	});

	 $('#box38').click(function() {
	 	$(this).animate({marginLeft:'450px'});
		$(this).animate({marginRight:'650px'});
		$(this).animate({marginLeft:'450px'});
		$(this).animate({marginRight:'750px'});
		$(this).addClass("animated" );
		$(this).addClass("rotateInDownLeft" );
		$(this).addClass("infinite" );

		
	});

	$('#box39').click(function() {
		$(this).animate({paddingTop:'200px'});
		$(this).addClass("animated" );
		$(this).addClass("zoomOut" );
		

	});


//soooocloseee//


	$('#box40').click(function() {
		$(this).animate({cursor:'grabbing'});

	});

	  $('#box41').click(function() {
		$(this).addClass("animated" );
		$(this).addClass("fadeOutRightBig" );

	});

	 $('#box42').click(function() {
		$(this).addClass("animated" );
		$(this).addClass("rollOut");

	});

	  $('#box43').click(function() {
		$(this).addClass("animated" );
		$(this).addClass("flipOutX" );
		$(this).addClass("infinite" );

	});

	 $('#box44').click(function() {
	 	$(this).animate({width:'30px'});
		$(this).animate({height:'36px'});
		$(this).animate({borderRadius:'15px'} ,'fast');
		$(this).addClass("animated" );
		$(this).addClass("rotateOutUpRight" );
		

	});

	 $('#box45').click(function() {
		$(this).addClass("animated" );
		$(this).addClass("flipOutY" );
		

	});

	 $('#box46').click(function() {
		$(this).addClass("animated" );
		$(this).addClass("bounceOutDown" );
		

	});

	 $('#box47').click(function() {
	 	$(this).animate({backgroundColor:'#e38bd9'});
	 	$(this).animate({paddingLeft:'80px'});
	 	$(this).animate({width:'18px'});
		$(this).addClass("animated" );
		$(this).addClass("zoomOut" );
		

	});

	 $('#box48').click(function() {
		$(this).addClass("animated" );
		$(this).addClass("fadeInUpBig" );
		

	});

	$('#box49').click(function() {
		$(this).animate({width:'400px'});
		$(this).addClass("animated" );
		$(this).addClass("rubberBand" );
		

	});

	$('#box50').click(function() {
		$(this).addClass("animated" );
		$(this).addClass("tada" );
		$(this).animate({backgroundColor:'#e38bd9'});


	});








});