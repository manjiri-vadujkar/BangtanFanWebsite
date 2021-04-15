// <head><link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css"></head>
// this statements needed in the body
// <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
// 				<script src="https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
// 				<script src="./nav-bar.js?id=index" id="nav-bar"></script>

$(function () {
    var bar = '';
    bar += '<nav class="navbar navbar-inverse" role="navigation">';
    bar += '<div class="container-fluid">';
    bar += '<div>';
    bar += '<ul class="nav navbar-nav">';
    bar += '<li id="home"><a href="home.html">Home</a></li>';
    bar += '<li id="index"><a href="index.html">Index</a></li>';
    bar += '<li id="about"><a href="about.html">About</a></li>';
    bar += '</ul>';
    bar += '</div>';
    bar += '</div>';
    bar += '</nav>';
		bar += '<style>.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover {background-color:#9b3675;}nav.navbar-inverse ul.navbar-nav a:hover,nav.navbar-inverse ul.navbar-nav a:visited,nav.navbar-inverse ul.navbar-nav a:focus,nav.navbar-inverse ul.navbar-nav a:active{background:#9b3675;}</style>'
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
