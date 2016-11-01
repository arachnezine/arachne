var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#DFD5FD',
    progressColor: '#EA412C',
    scrollParent: true,
    hideScrollbar: true
});

wavesurfer.load('assets/nadia-de-vries/six-poems_nadia-de-vries.mp3');

$(document).ready(function() {

  $('.nadia-de-vries__button__audio-player').on('click', function() {
      $(this).toggleClass('border--all__flux');
  })

});