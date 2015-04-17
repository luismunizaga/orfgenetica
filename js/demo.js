$(window).load(function(){
	$('#slider').ccslider({
    effectType: '2d',
    effect: 'horizontalSlide',
    _3dOptions: {
                  imageWidth: 1100,
                  imageHeight: 400,
                  innerSideColor: '#444',
                  transparentImg: false,
                  makeShadow: true,
                  shadowColor: 'rgba(0, 0, 0, 0.7)',
                  slices: 3,
                  rows: 3,
                  columns: 3,
                  delay: 200,
                  delayDir: 'first-last',
                  depthOffset: 400,
                  sliceGap: 20,
                  easing: 'easeInOutCubic',
                  fallBack: 'fadeSlide',
                  fallBackSpeed: 1200
                },
    animSpeed: 1200,
    startSlide: 0,
    directionNav: true,
    controlLinks: true,
    controlLinkThumbs: false,
    controlThumbLocation: '',
    autoPlay: true,
    pauseTime: 3000,
    pauseOnHover: true,
    captions: true,
    captionPosition: 'bottom',
    captionAnimation: 'slide',
    captionAnimationSpeed: 600,
    beforeSlideChange: function(index){},
    afterSlideChange: function(index){}
});
		
	//present 2d slideshow for ie and older browsers				
	if( !document.createElement('canvas').getContext ) {
		$slider.removeClass('slider3d').addClass('slider2d').wrap($frame);
		$3d.children().hide();
		$('#no-3d').show();
	}
		
	


});