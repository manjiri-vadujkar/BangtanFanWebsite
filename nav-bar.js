// <head><link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css"></head>
// foll statements needed in the body
//<script src="https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
//<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
//<script src="./nav-bar.js?id=index" id="nav-bar"></script> 				
// 				

$(function () {
    var bar = '';
    bar += '<nav class="navbar navbar-expand-lg bg-dark navbar-dark mynav" role="navigation">';
    bar += '<div class="container-fluid">';
    bar += '<div>';
    bar += '<ul class="navbar-nav">';
    bar += '<li class="nav-item" id="home"><a class="nav-link" href="home.html">Home</a></li>';
    bar += '<li class="nav-item" id="about"><a class="nav-link" href="about.html">About</a></li>';
    bar += '<li class="nav-item" id="gallery"><a class="nav-link" href="gallery.html">Gallery</a></li>';
    bar += '<li class="nav-item" id="timeline"><a class="nav-link" href="timeline.html">Timeline</a></li>';
    bar += '</ul>';
    bar += '</div>';
    bar += '</div>';
    bar += '</nav>';
		bar += '<style>.container-fluid {align-items: initial !important;}.nav-item {margin-left: 5px; margin-right: 5px} .mynav {font-size: 28px;}.mynav a {color: rgba(255,255,255,1) !important;}.navbar-dark .navbar-nav>.active>a, .navbar-dark .navbar-nav>.active>a:focus, .navbar-dark .navbar-nav>.active>a:hover {background-color:#702085;}nav.navbar-dark ul.navbar-nav a:hover,nav.navbar-dark ul.navbar-nav a:visited,nav.navbar-dark ul.navbar-nav a:focus,nav.navbar-dark ul.navbar-nav a:active{background:#702085;}</style>'
    $("#main-bar").html(bar);
 
    var id = getValueByName("id");
    $("#" + id).addClass("active");
});
 
function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}
