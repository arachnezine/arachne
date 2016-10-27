var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#EA412C',
  	progressColor: '#FFA131',
    scrollParent: true,
    hideScrollbar: true
});

wavesurfer.load('assets/six-poems_nadia-de-vries.mp3');
// wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');

wavesurfer.on('ready', function(){
    var w_h = $(window).height();
    var audio_player_pos_top = $('.nadia-de-vries__audio-player--container').offset().top;
    var waverform_width = w_h - audio_player_pos_top;
    
    // temporary hack (works but visually not nice)
    $('canvas').width(audio_player__wrapper);
    $('canvas').css('margin-top', 'auto');
    $('canvas').css('margin-bottom', 'auto');

    console.log(audio_player__wrapper);
});

$('.nadia-de-vries__button__audio-player').on('click', function() {
    $(this).toggleClass('border--all__flux');
})