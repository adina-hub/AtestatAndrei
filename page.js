window.addEventListener('scroll', function(){
    var scrollPos = window.scrollY;
    
    var navbar = document.querySelector('#navbarContainer')
        if(scrollPos>=100){
            navbar.style.backgroundColor = 'rgba( 0, 0, 0, 0.7)';
        }
        else if(scrollPos<100){
            navbar.style.backgroundColor = 'rgba( 0, 0, 0, 0)';
        }

}

)