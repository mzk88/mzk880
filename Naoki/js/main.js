$(function () {
  　//main-imagesのフェードイン
    $('.slideshow').each(function () {

        var $slides = $(this).find('img'),
            slideCount = $slides.length,
            currentIndex = 0;

        $slides.eq(currentIndex).fadeIn(1000);

        setInterval(showNextSlide, 5000);

        function showNextSlide () {

            var nextIndex = (currentIndex + 1) % slideCount;

            $slides.eq(currentIndex).fadeOut();
            $slides.eq(nextIndex).fadeIn();

            currentIndex = nextIndex;
        }
    })
    //profileのフェードイン
    setTimeout(function(){
  		$('#profile').fadeIn(1000);
   })
   setTimeout(function(){
     $('#photos').fadeIn(1000);
  })
});

// humberger-iocn
$(function (){

  var $line = $('.line')

  $('#humberger-icon').on('click', function(){
    $line.toggleClass('cross');
    if($line.hasClass('cross')){
      $('#line-top').css({
        transform: "rotate(-45deg) translateY(0.55rem)"
      });
      $('#line-middle').css({
        opacity: 0
      });
      $('#line-bottom').css({
        transform: "rotate(45deg) translateY(-0.55rem)"
      });
      $('#menu').stop(true).animate({
        opacity: 0.9
      });
      $('header').css({
        backgroundColor: 'rgba(255,255,255,0)',
        borderColor: 'rgba(82,82,82,0)'
      });
      $('.white').css({
        color: '#ffffff'
      });
      $('.line').css({
        backgroundColor: '#ffffff'
      });
      $('#photos').css({
        position: 'fixed'
      });
    }else{
      $('#line-top').css({
        transform: "rotate(0deg) translateY(0rem)"
      });
      $('#line-middle').css({
        opacity:1
      });
      $('#line-bottom').css({
        transform: "rotate(0deg) translateY(0rem)"
      });
      $('#menu').stop(true).animate({
        opacity: 0
      });
      $('header').stop(true).animate({
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(82,82,82,1)'
      });
      $('.white').css({
        color: '#000000'
      });
      $('.line').css({
        backgroundColor: '#000000'
      });
      $('#photos').css({
        position: 'absolute'
      });
    };
  });
});
// humberger-iocn
