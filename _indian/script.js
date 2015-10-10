
document.addEventListener("DOMContentLoaded", function(event) {
	
	var n = document.querySelectorAll("#indexlist td.indexcolname a");
	var innerText, type, i, lastIndex;
	
	for(i = 0; i < n.length; i++) {
		innerText = n[i].firstChild.nodeValue;
		
		if(i == 0 && innerText == "Parent Directory") {
            n[i].firstChild.nodeValue = "..";
            type = "parent-dir";
		} else if(innerText.substr(-1) == '/') {
			type = "folder";
		} else if ((lastIndex = innerText.lastIndexOf('.')) != -1) {
			type = innerText.substr(lastIndex+1);
		} else {
			type = "file";
		}
		
		iconElement = document.createElement("i");
		iconElement.className = "fa fa-fw fa-" + type;
		n[i].insertBefore(iconElement, n[i].firstChild);
	}
	
});
