let bgImgs = ["img1.gif", "img2.gif", "img3.gif", "img4.gif", "img5.gif"];

function initialize(){

	setInterval(function(){
	let bgRound = parseInt(Math.random()*bgImgs.length);
	document.querySelector(".main").style["background-image"] = `url(images/${bgImgs[bgRound]})`;
},3000);
}

initialize();