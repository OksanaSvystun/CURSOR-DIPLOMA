document.getElementById('language').onclick = function() {
    document.getElementById('eng').classList.toggle('display-false');
    document.getElementById('ua').classList.toggle('display-false');
}
document.getElementById('playPause-mini').onclick = function() {
    document.getElementById('play-mini').classList.toggle('display-false');
    document.getElementById('pause-mini').classList.toggle('display-false');
}
document.getElementById('playPause-maxy').onclick = function() {
    document.getElementById('play-maxy').classList.toggle('display-false');
    document.getElementById('pause-maxy').classList.toggle('display-false');
}

$('#multiCarousel').carousel({
  interval: 10000
})
$('.carousel .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});