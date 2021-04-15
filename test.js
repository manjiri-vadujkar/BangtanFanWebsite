// need a div with id nav to work
(function(){
		var elem = document.getElementById("nav");
		home = addTagtoDoc("a","index.html","Home");
		about = addTagtoDoc("a","about.html","About");
		ul = document.createElement("ul");
		ul.className = "nav-bar";
		l1 = document.createElement("li");
		l2 = document.createElement("li");
		l1.id = "Home";
		l2.id = "About";
		l1.appendChild(home);
		l2.appendChild(about);
		ul.appendChild(l1);
		ul.appendChild(l2);
		elem.appendChild(ul);
})();
function addTagtoDoc(tag,link,string){
		var add = document.createElement(tag)
		var text = document.createTextNode(string)
		add.setAttribute("href",link );
		add.appendChild(text)
		return add
}
