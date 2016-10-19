var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'red',
  	progressColor: 'purple'
});

// wavesurfer.load('assets/six-poems_nadia-de-vries.mp3');
wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');

var audio_player__wrapper = document.getElementsByClassName('audio-player--wrapper');
var audio_player = document.getElementsByClassName('audio-player');

wavesurfer.on('ready', function(){
    var shit = $('.audio-player').width($('.audio-player--wrapper').height());
    console.log(shit);
});

$('.nadia-de-vries__button__audio-player').on('click', function() {
    $(this).toggleClass('border--all__flux');
})