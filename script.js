$("body").css("background-color" , "black");
var currentSong = 0;
var isplaying = 'false';
var audioElement = document.createElement('audio');

var audio_files = [
  "1.mp3",
  "2.mp3",
  "3.mp3",
  "4.mp3",
  "5.mp3",
  "6.mp3",
  "7.mp3",
  "8.mp3",
  "9.mp3"
]

$(document).ready(function(){
console.log("The document is ready the songs were loaded properly!");

function JukeBox(){

  this.previousTrack = function(){
    isplaying = 'false';
    if(currentSong > 0){
      console.log("isplaying: " + isplaying);
      currentSong = currentSong - 1;
      this.playTrack(currentSong);
    }
  }


  this.playTrack = function (currentSong){

    console.log("isplaying: " + isplaying);
    audioElement.setAttribute('src', audio_files[currentSong]);
    if(isplaying == 'false'){
      isplaying = 'true';
      audioElement.play();
      console.log("play pressed");

    }
    else if(isplaying == 'true'){
      isplaying = 'false';
      audioElement.pause();
      console.log("stop pressed");
    }
    }


  this.nextTrack = function(){
    isplaying = 'false';
    if(currentSong < 10){
      console.log("isplaying: " + isplaying);
      currentSong = currentSong + 1;
      this.playTrack(currentSong);
    }
  }

  this.playRequest = function(requestedSong){
  isplaying = 'false';
  this.playTrack(requestedSong);
  }
}

myJukePlayer = new JukeBox();

$('#list').append('<li id="1stSong" onclick = "myJukePlayer.playRequest(0)">'+audio_files[0]+'</li>');
$('#list').append('<li id="2ndSong" onclick = "myJukePlayer.playRequest(1)">'+audio_files[1]+'</li>');
$('#list').append('<li id="3rdSong" onclick = "myJukePlayer.playRequest(2)">'+audio_files[2]+'</li>');
$('#list').append('<li id="4thSong" onclick = "myJukePlayer.playRequest(3)">'+audio_files[3]+'</li>');
$('#list').append('<li id="5thSong" onclick = "myJukePlayer.playRequest(4)">'+audio_files[4]+'</li>');
$('#list').append('<li id="6thSong" onclick = "myJukePlayer.playRequest(5)">'+audio_files[5]+'</li>');
$('#list').append('<li id="7thSong" onclick = "myJukePlayer.playRequest(6)">'+audio_files[6]+'</li>');
$('#list').append('<li id="8thSong" onclick = "myJukePlayer.playRequest(7)">'+audio_files[7]+'</li>');
$('#list').append('<li id="9thSong" onclick = "myJukePlayer.playRequest(8)">'+audio_files[8]+'</li>');


$("#playTrack").on("click", function(){
  myJukePlayer.playTrack(currentSong);
});
$("#nextTrack").on("click", function(){
  myJukePlayer.nextTrack();
});

$("#previousTrack").on("click", function(){
  myJukePlayer.previousTrack();
});


});
