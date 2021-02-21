/**Purpose: this is the javascript.js
*Name: Dan Zhap
*Date: Dec 9th 2020
*/


$(document).ready(function(){
  // I will be wrapping all of our jQuery statements in this one function because we don't want
  // anything to happen until the page is ready
  $(function(){
    $("#navigation").load("header.html");
    $("#footer").load("footer.html");
  });
  // set the element's css 

  $("header").css("background-color", "#202020");
  $("a").css("color", "#ffffff");
  $("a").css("border-style", "solid");
  $("a").css("text-decoration", "none");
  

  $("h1").css("color", "#ffffff");
  $("h1").css("margin-bottom", "25px");
  $("h2").css("color", "#ffffff");
  $("h2").css("margin-bottom", "20px");

  $("table").css("border-spacing", "10px");

  
  $("th,td").css("color", "#ffffff");
  $("th,td").css("text-align", "left");
  $("th").css("vertical-align", "top");
  
  $("gallery").css("background-color", "#202020");
 


   
 
 

  //when the brower is scroll down the header will stay
  $(window).on("scroll", function() {
    //当window scrollTop并且大于100 px的时候
      if($(window).scrollTop() > 100) {
            //这个menue row就
            $(".menu-row").addClass("scrolled-menu");
        } else {
           $(".menu-row").removeClass("scrolled-menu");
        }
    });

//when the h1 th td hover , the text will hightlight 
  $(".masthead h1,th,td").hover(function(){
    $(this).addClass("highlight");
  },
  function(){
    $(this).removeClass("highlight");
  }
  );

  

  //when the img hover , they will zoom out.
 $(".gallery img").hover(function(){
    $(this).css("width","100%");
  },
  function(){
    $(this).css("width","80%");
  }
  );

 $(".gallery img").hover(function(){
    $(this).css("height","170px");
  },
  function(){
    $(this).css("height","145px");
  }
  );

 //when click the a link, songs of the playlist will play 
var playlist = new Array('./music/ninja.mp3','./music/yindianlaobanjiu.mp3');
var bMusic= new Audio();
var i=0;
 $(".masthead a").click(function(){
    
    bMusic.src=playlist[i];

	if(bMusic.paused){
		
		bMusic.play();

	}else
	{bMusic.pause();}
	i++;
    



 });











});



