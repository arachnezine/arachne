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
    var w_h = $(window).height();
    var audio_player_pos_top = $('.nadia-de-vries__audio-player--container').offset().top;
    var waverform_width = w_h - audio_player_pos_top;
    console.log(w_h, audio_player_pos_top, waverform_width);
    // $('#waveform').css('width', waverform_width);
    // $('.nadia-de-vries__audio-player--wrapper').css('width', waverform_width);
    
    // temporary hack (works but visually not nice)
    $('canvas').width(waverform_width * 1.1);
    $('canvas').css('margin-top', 'auto');
    $('canvas').css('margin-bottom', 'auto');
});

$('.nadia-de-vries__button__audio-player').on('click', function() {
    $(this).toggleClass('border--all__flux');
})