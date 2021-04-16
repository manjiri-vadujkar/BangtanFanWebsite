// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
				// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
//<div id="footer"></div>
//// <script src="https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
// <script src="./footer.js"id="footer-bar"></script>
$(function (){

var bar = '';
	bar += '<footer class="text-center text-white bg-purple">';
bar += '		<div class="container p-4 pb-0">';
bar += '		<!--Section:title-->';
bar += '		<div class="text-center text-white">';
bar += '				<section><p>Below are the social media links to follow the band.</p></section>';
bar += '		</div>';
bar += '    <!-- Section: Social media -->';
bar += '    <section class="mb-4">';
bar += '      <!-- Twitter -->';
bar += '      <a';
bar += '        class="btn btn-primary btn-floating m-1"';
bar += '        style="background-color: #55acee;"';
bar += '        href="https://twitter.com/bts_twt"';
bar += '        role="button"';
bar += '        ><i class="fa fa-twitter"></i';
bar += '      ></a>';
bar += '';
bar += '      <!-- Youtube -->';
bar += '      <a';
bar += '        class="btn btn-primary btn-floating m-1"';
bar += '        style="background-color: #dd4b39;"';
bar += '        href="https://www.youtube.com/channel/UCLkAepWjdylmXSltofFvsYQ"';
bar += '        role="button"';
bar += '        ><i class="fa fa-youtube"></i>';
bar += '      <a';
bar += '        class="btn btn-primary btn-floating m-1"';
bar += '        style="background-color: #ac2bac;"';
bar += '        href="https://www.vlive.tv/channel/FE619"';
bar += '        role="button"';
bar += '        ><i class="fa fa-heart"></i></a>';
bar += '			</section>';
bar += '    <!-- Section: Social media -->';
bar += '  </div>';
bar += '  <!-- Grid container -->';
bar += '';
bar += '		</footer>';
bar += '<style>';
bar += 'footer{';
bar += '		 	position: static;';
bar +='				margin-top: 50px;';
bar +='				padding: 10px 10px 0px 10px;';
bar += '            bottom: 0;';
bar += '            width: 100%;';
bar += '}';
bar += '.mb-4{ margin-bottom: 0px !important;}'
bar += '.bg-purple{';
bar += '		background-color: black';
bar += '}</style>';
$("#footer").html(bar);
});
 
//og bg color - #9b3675
//bar += '		 position: fixed;';
//bar += '            padding: 10px 10px 0px 10px;';