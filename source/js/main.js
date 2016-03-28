//main.js
// ajax content into #content div for a seamless user experience

//*******************html content*******************
var homeURL = "content/home.html";

//*******************get dom elements*******************
//get all links from nav wrapper and store them in an array
var navDiv = document.querySelector(".nav");
var lst = navDiv.querySelectorAll("a");

//main content div
var contentDiv = document.getElementById("content");

//nav-panel-mobile for collapsing nav onclick
var navPanelMobile = document.getElementById("nav-panel-mobile");


//*******************onload event*******************
// when window loads, setup events on buttons and browser
window.onload = function() {
	if (supports_history_api()){
		//parse url and load page once at the beginning
		//used incase the visitor is coming from an external site (or bookmark)
 		var url = parseURL();
 		loadPage(url, false);

 		//add click events to all buttons in the nav-wrapper
		for (var i=0; i<lst.length; i++){
			addClicker(lst[i]);
		}

		window.addEventListener("popstate", function(e) {
	 		var url = parseURL();
	 		loadPage(url, false);
	    	}
		, false);
	}
}


// check if browser supports history api
function supports_history_api() {
	if (window.history){
		if (history.pushState){
			return true;
		}
	} else {
		console.log("history api not supported!");
		return false;
	}
}


// load page function
function loadPage(url, addToHistory){
	if (url!=null){
		//send request
		var requestReturn = "";
		var myRequest = new XMLHttpRequest();
		myRequest.open("GET", url, true);
		myRequest.onreadystatechange = function () {
			//process request function
			if (myRequest.readyState === 4 && myRequest.status === 200) {
				contentDiv.innerHTML = myRequest.responseText;
			}
		}
		myRequest.send();
	}
}


//get hash from current url, construct custom url for ajax call
function parseURL(){
	var newHash = window.location.hash;
	//if there is no hash (you are trying to go to the homepage)
	if (!newHash){
		newHash = "#home";
	}
	newHash = newHash.slice(1);
    	var newURL = "content/" + newHash + ".html";
    	return newURL;
}


// add event listener to html element to load page when clicked on
function addClicker(element) {
  element.addEventListener("click", function(e) {
		//prevend default action of button
		e.preventDefault();

		//check for href of element that was clicked on
   	var pushURL = element.href;
		var index = pushURL.indexOf("#");

		//if there is no href, the user is trying to go home
		if (index<0){
			pushURL = "home";
			// update history differently on local vs. server
			if (window.location.hostname.charAt(0) === "1") {
				var fullURL = window.location.protocol + "//" + window.location.hostname + ":8080/"; //for node testing
			} else {
				var fullURL = window.location.protocol + "//" + window.location.hostname + "/"; //for server
			}
		} else {
			pushURL = pushURL.slice(index+1);
			// update history differently on local vs. server
			if (window.location.hostname.charAt(0) === "1") {
				var fullURL = window.location.protocol + "//" + window.location.hostname + ":8080/#" + pushURL; //for node testing
			} else {
				var fullURL = window.location.protocol + "//" + window.location.hostname + "/#" + pushURL; //for server
			}
		}

		//if user clicks on projects or gallery button or mobile menu button, cancel the ajax call, you don't want to load these pages!
		// if (pushURL == "projects" || pushURL == "gallery" || pushURL == "nav-panel-mobile"){
		if (pushURL == "projects"){
			return false;
		}
		
		//create url for ajax call
		pushURL = "content/" + pushURL + ".html";
		loadPage(pushURL, true);
   	history.pushState(" ", null, fullURL);
	}, true);
}

