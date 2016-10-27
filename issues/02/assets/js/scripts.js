var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#EA412C',
  	progressColor: '#FFA131',
    scrollParent: true,
    hideScrollbar: true
});

wavesurfer.load('assets/six-poems_nadia-de-vries.mp3');

$('.nadia-de-vries__button__audio-player').on('click', function() {
    $(this).toggleClass('border--all__flux');
})