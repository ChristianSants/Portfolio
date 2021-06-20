$('body').on('tap click', function(e){
    if(e.target !== $('nav.menu-open')[0] && $(e.target).closest('nav.menu-open').attr('class') != 'menu menu-open')
        $("main, nav.menu-open").removeClass('menu-open');
});