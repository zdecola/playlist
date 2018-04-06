        // quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"El Clavo",
	"artist":"Prince Royce",
	"mp3-url":"https://www.youtube.com/watch?v=FCfP7v9x8HI",
	"image-url":"https://themusicsite.com/music-news/wp-content/uploads/2018/03/prince-royce-el-clavo-official-m-1280x640.jpg",
}


var myPlayList = [
	{
		"title":"God's Plan",
		"artist":"Drake",
		"mp3-url":"https://www.youtube.com/watch?v=xpVfcZ0ZcFM ",
		"image-url":"https://i2.wp.com/revealyourtruth.com/wp-content/uploads/2018/03/b25c24e950fa429f85466b59f8cbffa5.707e1.png?fit=1200%2C630&ssl=1&resize=350%2C200",
	},
	{
		"title":"The Middle",
		"artist":"Zedd, Maren Morris, Grey",
		"mp3-url":"https://www.youtube.com/watch?v=xQzS3JnZQZM",
		"image-url":"https://images.genius.com/60136fba200342190c67df948ff42d74.1000x1000x1.jpg",
	},
	{
		"title":"IDGAF",
		"artist":"Dua Lipa",
		"mp3-url":" https://www.youtube.com/watch?v=Mgfe5tIwOj0 ",
		"image-url":"http://indietronica.org/wp-content/uploads/2018/01/Dua-Lipa-IDGAF-1024x576.jpg",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  displayList()
  


});

function displayList(){
for(var i=0; i<3; i++){
var song = myPlayList[i];
console.log(song);
 $(".songs").append("<p>"+ song.title + "</p>");
 $(".songs").append("<p>"+ song.artist + "</p>");
var imageTag = "<img src ='"+ song["image-url"] + "'/>";
 $(".songs").append("<a href = '" + song["mp3-url"] + "'>" + imageTag + "</a>");
 
}   
}



  


function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
