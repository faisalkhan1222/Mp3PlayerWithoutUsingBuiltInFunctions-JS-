/*
Author: Faisal Khan
Dated: June 13 2016

An Mp3 player without using the built in player
*/

//array to contain local mp3 files
//All the mp3 files are downloaded from the following website(open source)
//http://www.newgrounds.com/audio
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
//variable to keep track of which mp3 is playing
var currentSong = 0;
//variable to check if an mp3 is in pause status
var paused = 'false';

var audioElement = document.createElement('audio');


$(document).ready(function(){
  console.log("The document is ready the songs were loaded properly!");

  //Juke box object
  function JukeBox(){

    //function to play previous track
    this.previousTrack = function(){
      paused = 'false';
      if(currentSong > 0){
        currentSong = currentSong - 1;
        this.playTrack(currentSong);
      }
    }

    //function to play a given track
    this.playTrack = function (playThisSong){
      currentSong = playThisSong;
      console.log("paused: " + paused);
      //check if a track is in pause status if it is dont load a new track rather play the
      //current track at the same seek time
      if(paused == 'false'){
        audioElement.setAttribute('src', audio_files[playThisSong]);
      }
      //play the track
      audioElement.play();
      //function to show a simple animation to visually see if a track is playing
      showAnimateBars();
      console.log("play pressed");
    }

    //pause the current track
    this.pauseTrack = function (){
      audioElement.pause();
      //hide the animation bar
      hideAnimateBars();
      console.log("pause pressed");
      //set pause equal to true so that the track can be resumed from the same seek time
      paused = 'true';
    }

    //stop a track
    this.stopTrack = function (){
      audioElement.pause();
      hideAnimateBars();
      console.log("stop pressed");
      //make pause equal to false so when the play button is pressed the track is reloaded all over again
      paused = 'false';
    }

    //next track
    this.nextTrack = function(){
      paused = 'false';
      //check so that we dont cross the array boundary and reset the counter if we pass the limit of array
      if(currentSong > 8){
        currentSong = -1;
      }
      //increase the trackcounter by one and pass it to the play function
      if(currentSong < 8){
        currentSong = currentSong + 1;
        this.playTrack(currentSong);
      }
    }

    //play request plays a track when clicked by the user from the song selection menu
    this.playRequest = function(requestedSong){
      paused = 'false';
      this.playTrack(requestedSong);
    }

    //play a random song by generating a random number using random function and pass it to play track function
    this.randomTrack = function (){
      paused = 'false';
      var generatedSong = Math.floor((Math.random() * 8) + 1);
      this.playTrack(generatedSong);
    }
  }

  //new object of type Juke Box
  myJukePlayer = new JukeBox();

  //list all the tracks from the array to the main page and add an event on click so that we can play it when clicked
  $('#list').append('<li id="1stSong" onclick = "myJukePlayer.playRequest(0)">'+audio_files[0]+'</li>');
  $('#list').append('<li id="2ndSong" onclick = "myJukePlayer.playRequest(1)">'+audio_files[1]+'</li>');
  $('#list').append('<li id="3rdSong" onclick = "myJukePlayer.playRequest(2)">'+audio_files[2]+'</li>');
  $('#list').append('<li id="4thSong" onclick = "myJukePlayer.playRequest(3)">'+audio_files[3]+'</li>');
  $('#list').append('<li id="5thSong" onclick = "myJukePlayer.playRequest(4)">'+audio_files[4]+'</li>');
  $('#list').append('<li id="6thSong" onclick = "myJukePlayer.playRequest(5)">'+audio_files[5]+'</li>');
  $('#list').append('<li id="7thSong" onclick = "myJukePlayer.playRequest(6)">'+audio_files[6]+'</li>');
  $('#list').append('<li id="8thSong" onclick = "myJukePlayer.playRequest(7)">'+audio_files[7]+'</li>');
  $('#list').append('<li id="9thSong" onclick = "myJukePlayer.playRequest(8)">'+audio_files[8]+'</li>');

  //set all the events based  on  the designated buttons(play,pause etc)
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
  
//the red dice image on main page to generate random track
  $("#randomTrack").on("click", function(){
    myJukePlayer.randomTrack();
  });

  //function to show a simple animation from an external link
  function showAnimateBars(){
    $('#animateBars').html('<img src="http://i17.photobucket.com/albums/b51/kittykatt2005/Icons/animated/small%20icons/thmusicbar.gif" border="0" />');
  }

  //function to remove the animation
  function hideAnimateBars(){
    $('#animateBars').html(' ');
  }
});
