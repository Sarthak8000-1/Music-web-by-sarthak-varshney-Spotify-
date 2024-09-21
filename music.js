const play = document.getElementById('play');
const audio = new Audio('songs/2.mp3')
// song play and pause 
play.addEventListener('click', () => {
  if (audio.paused || audio.currentTime<=0) {
    audio.play();
   play.classList.remove('fa-circle-play')
   play.classList.add('fa-circle-pause')
  } 
  else {
    audio.pause();
    play.classList.remove('fa-circle-pause')
    play.classList.add('fa-circle-play')
  }
});
//time checking 
let line = document.getElementById('line')
audio.addEventListener('timeupdate', ()=>
{
  console.log('timeupdate')

// seek bar update 
 progress = parseInt((audio.currentTime/audio.duration)*100)
 line.value = progress;
console.log(progress);
})
line.addEventListener('change', ()=>
{
   audio.currentTime= line.value*audio.duration/100;
})
