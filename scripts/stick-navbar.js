var lastKnownScrollPosition = 0;
var ticking = false;

const navBar = document.getElementsByTagName("nav")[0]

function doSomething(scrollPos) {
    var vimeoPos = document.getElementsByClassName("vimeo-embed")[0].getBoundingClientRect().top;
    if (vimeoPos < 0) {
        navBar.style.background = "#272727";
        navBar.style.position = "sticky";
        navBar.getElementsByTagName("p")[0].innerHTML = "fisher.<span class=\"text-orange\">studio</span>()";
    } else {
        navBar.style.background = "0";
        navBar.style.position = "static";
        navBar.getElementsByTagName("p")[0].innerHTML = "fisher.studio";
    }
}

// Debouncing function from html5rocks via MDN
document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function() {
            doSomething(lastKnownScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
});
