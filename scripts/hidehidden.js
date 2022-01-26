function getElementsByClass(searchClass,node,tag) {
	var classElements = new Array();
	if ( node == null )
		node = document;
	if ( tag == null )
		tag = '*';
	var els = node.getElementsByTagName(tag);
	var elsLen = els.length;
	var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
	for (i = 0, j = 0; i < elsLen; i++) {
		if ( pattern.test(els[i].className) ) {
			classElements[j] = els[i];
			j++;
		}
	}
	return classElements;
}

function hideHidden() {
	var moreLinks = getElementsByClass("morelink",null,"a");
	var hiddenBlocks = getElementsByClass("hidden",null,null);

	for (i = 0; i < moreLinks.length; i++) {
		moreLinks[i].style.display='inline';
	}

	for (i = 0; i < hiddenBlocks.length; i++) {
		hiddenBlocks[i].style.display='none';
	}
}