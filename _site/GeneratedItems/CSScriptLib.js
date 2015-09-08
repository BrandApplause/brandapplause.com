/* -- Adobe GoLive JavaScript Library */

function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() {
	changeImagesArray(changeImages.arguments);
}
function initImgID() {var di = document.images; if (mustInitImg && di) { for (var i=0; i<di.length; i++) { if (!di[i].id) di[i].id=di[i].name; } mustInitImg = false;}}
function findElement(n,ly) {
	var d = document;
	if (browserVers < 4)		return d[n];
	if ((browserVers >= 6) && (d.getElementById)) {initImgID; return(d.getElementById(n))}; 
	var cd = ly ? ly.document : d;
	var elem = cd[n];
	if (!elem) {
		for (var i=0;i<cd.layers.length;i++) {
			elem = findElement(n,cd.layers[i]);
			if (elem) return elem;
		}
	}
	return elem;
}
function changeImagesArray(array) {
	if (preloadFlag == true) {
		var d = document; var img;
		for (i=0;i<array.length;i+=2) {
			img = null; var n = array[i];
			if (d.images) {
				if (d.layers) {img = findElement(n,0);}
				else {img = d.images[n];}
			}
			if (!img && d.getElementById) {img = d.getElementById(n);}
			if (!img && d.getElementsByName) {
				var elms = d.getElementsByName(n);
				if (elms) {
					for (j=0;j<elms.length;j++) {
						if (elms[j].src) {img = elms[j]; break;}
					}
				}
			}
			if (img) {img.src = array[i+1];}
		}
	}
}