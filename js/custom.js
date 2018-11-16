$(function(){

    $('a[href*=#]').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

            if ($target.length) {

                var targetOffset = $target.offset().top;

                $('html,body').animate({scrollTop: targetOffset}, 1000);

                return false;

            }   
        }
    });
});


// Menu Active segun la seleccion
            $(function(){
                var url = window.location.pathname, 
                    urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); 
                
                    $('.menu a').each(function(){
                    
                    if(urlRegExp.test(this.href.replace(/\/$/,''))){
                        $(this).addClass('active');
                    }
                });
            });