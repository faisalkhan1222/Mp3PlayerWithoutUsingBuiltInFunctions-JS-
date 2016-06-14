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
var currentSong = 0;
var paused = 'false';
var audioElement = document.createElement('audio');

//http://www.newgrounds.com/audio

$(document).ready(function(){
console.log("The document is ready the songs were loaded properly!");

function JukeBox(){

  this.previousTrack = function(){
    paused = 'false';
    if(currentSong > 0){
      console.log("isplaying: " + isplaying);
      currentSong = currentSong - 1;
      this.playTrack(currentSong);
    }
  }

  this.playTrack = function (playThisSong){
    currentSong = playThisSong;
    console.log("paused: " + paused);

    if(paused == 'false'){
    audioElement.setAttribute('src', audio_files[playThisSong]);
    }
      audioElement.play();
      showAnimateBars();
      console.log("play pressed");
    }

  this.pauseTrack = function (){
  audioElement.pause();
  hideAnimateBars();
  console.log("pause pressed");
  paused = 'true';

  }

  this.stopTrack = function (){
  audioElement.pause();
  hideAnimateBars();
  console.log("stop pressed");
  paused = 'false';
  }

  this.nextTrack = function(){
    paused = 'false';
    if(currentSong < 8){
      currentSong = currentSong + 1;
      this.playTrack(currentSong);
    }
  }

  this.playRequest = function(requestedSong){
    paused = 'false';

  this.playTrack(requestedSong);
  }

  this.randomTrack = function (){
  paused = 'false';
  var generatedSong = Math.floor((Math.random() * 8) + 1);
  this.playTrack(generatedSong);
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

$("#pauseTrack").on("click", function(){
  myJukePlayer.pauseTrack();
});

$("#stopTrack").on("click", function(){
  myJukePlayer.stopTrack();
});

$("#nextTrack").on("click", function(){
  myJukePlayer.nextTrack();
});

$("#previousTrack").on("click", function(){
  myJukePlayer.previousTrack();
});

$("#randomTrack").on("click", function(){
  myJukePlayer.randomTrack();
});

function showAnimateBars(){
  $('#animateBars').html('<img src="http://i17.photobucket.com/albums/b51/kittykatt2005/Icons/animated/small%20icons/thmusicbar.gif" border="0" />');
}

function hideAnimateBars(){
  $('#animateBars').html(' ');
}
});
