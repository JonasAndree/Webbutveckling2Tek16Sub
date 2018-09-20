console.log("js working");

var x = 14.5;
    x = "Hej";

var numberOfClicks = 0;
var totalSpeed = 0;

var oldClick = false;
var fastestCLick = false; 
var timer;

/*
setTimeout(function () {
			alert("hacked");
		}, 5000);
*/
var goldenCookie = document.getElementById("golden-cookie");

function goldenClicker() {
	goldenCookie.style.display = "none";
	setTimeout(function () {
		goldenCookie.style.display = "block";
		goldenCookieRandPos();
	}, (Math.random()*10000 +4000));
}

goldenClicker();

function goldenCookieRandPos() {
	
	console.log(goldenCookie);
	var x = Math.floor(Math.random()*(window.innerWidth - goldenCookie.width) );
	var y = Math.floor(Math.random()*(window.innerHeight - goldenCookie.height) );
	console.log(x + " " + y);
	goldenCookie.style.left = x + "px"; 
	goldenCookie.style.top = y + "px";
}


function getFastestCLick() {

	var d = new Date();
    var n = d.getTime();


    console.log(n);


    var r = Math.floor(Math.random()*255); 
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);

    document.getElementById("body").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
	





	if (!oldClick) {
		oldClick = n; 
	} else {
		var newClick = n - oldClick; 
		if (!fastestCLick) {
			fastestCLick = newClick
			document.getElementById("fastest-click").innerHTML = fastestCLick;
		} else if (newClick < fastestCLick) {
			fastestCLick = newClick

			document.getElementById("fastest-click").innerHTML = fastestCLick;
			document.getElementById("recordType").innerHTML = "Fastest: ";
			document.getElementById("recordValue").innerHTML = fastestCLick;

			var rec = document.getElementById("record");
				rec.style.opacity = 1;
	            rec.style.display = 'block';
			
			setTimeout(function () {
				clearInterval(timer);
				fade(rec)
			}, 500);
		} 
		document.getElementById("current-click").innerHTML = newClick;
		totalSpeed += newClick;
		document.getElementById("average-click").innerHTML = parseInt(totalSpeed / numberOfClicks);
		oldClick = n;
	}
	if (numberOfClicks == 50) {
		document.getElementById("recordType").innerHTML = "Reatched: ";
		document.getElementById("recordValue").innerHTML = "50";
			var rec = document.getElementById("record");
				rec.style.opacity = 1;
	            rec.style.display = 'block';
			setTimeout(function () {
				clearInterval(timer);
				fade(rec)
			}, 500);
	}
}

function fade(element) {
    var op = 1;  // initial opacity
    timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function cookieClicker() {
	numberOfClicks++;
	//console.log(numberOfClicks);

	document.getElementById("clicks").innerHTML = numberOfClicks;
	getFastestCLick();
	//document.write("<p>" + x + "</p>");

}