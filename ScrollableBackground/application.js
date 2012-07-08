function scroll_bg() {
    var body = document.body, 
        pageHeight = $('html').height(),        
        windowHeight = $(window).height(),
        bgHeight = $('#background-code-hidden').height();        
  
    $('#background-code').css({ 
      'margin-top': Math.min(0, Math.max(-(bgHeight - windowHeight), (bgHeight - windowHeight) * $(window).scrollTop() / -(pageHeight - windowHeight)))
    });
}


