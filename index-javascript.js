var window_width = window.innerWidth;

$(document).ready(function() {
    if(window_width <= 1200) {
        $("#jumbotron-desktop").hide();
        $("#jumbotron-mobile").show();
    }
    else {
        $("#jumbotron-mobile").hide();
        $("#jumbotron-desktop").show();
    }
});