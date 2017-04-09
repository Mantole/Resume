$(document).ready(function(){
	
//------------------------------------------------- profile

  $("#profile").mouseover(function(){
    $("#profile_underline").css({
	  "background-color": "green",
	  "width": "49px",
	});
  $("#profile").mouseout(function(){
    $("#profile_underline").css({
	  "background-color": "green",
	  "width": "0px"
    });
  });	
});

//-------------------------------------------------- experience

   $("#experience").mouseover(function(){
    $("#experience_underline").css({
	  "background-color": "green",
	  "width": "79px"
	});
  $("#experience").mouseout(function(){
    $("#experience_underline").css({
	  "background-color": "green",
	  "width": "0px"
    });
  });	
});

//-------------------------------------------------- work_examples

$("#work_examples").mouseover(function(){
    $("#work_examples_underline").css({
	  "background-color": "green",
	  "width": "108px"
	});
  $("#work_examples").mouseout(function(){
    $("#work_examples_underline").css({
	  "background-color": "green",
	  "width": "0px"
    });
  });	
});

//--------------------------------------------------- skills

$("#skills").mouseover(function(){
    $("#skills_underline").css({
	  "background-color": "green",
	  "width": "40px"
	});
  $("#skills").mouseout(function(){
    $("#skills_underline").css({
	  "background-color": "green",
	  "width": "0px"
    });
  });	
});

//--------------------------------------------------- interests

$("#interests").mouseover(function(){
    $("#interests_underline").css({
	  "background-color": "green",
	  "width": "61px"
	});	
	
$("#interests").mouseout(function(){
    $("#interests_underline").css({
	  "interests-color": "green",
	  "width": "0px"
    });
  });
});

//----------------------------------------------------- contact me

$("#contact").mouseover(function(){
    $("#contact_underline").css({
	  "background-color": "green",
	  "width": "80px"
	});
$("#contact").mouseout(function(){
    $("#contact_underline").css({
	  "contact-color": "green",
	  "width": "0px"
    });
  });
	
});

//---------------------------------------------------- html - advanced
$("#html-rank").delay(1000).show('slow');	
//---------------------------------------------------- css - advanced
$("#css-rank").delay(1400).show('slow');
//---------------------------------------------------- javascript - intermediate
$("#javascript-rank").delay(1800).show('slow');
//---------------------------------------------------- jquery - intermediate
$("#jquery-rank").delay(2200).show('slow');
//---------------------------------------------------- responsive_web_design - intermediate
$("#rwd-rank").delay(2600).show('slow');
}); //-------------------------------------------------- closing