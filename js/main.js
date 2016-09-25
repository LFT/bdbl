var videoTemplate;
var quoteTemplate;
var videoHtmlList;
var quotes = {};
var videos = {};
function playOnKeyDown(evt) {
    let key = evt.key;
    if (quotes[key]) {
        quotes[key].play();
    }
}
function init() {
    videoTemplate = document.getElementById("videoTemplate");
    quoteTemplate = document.getElementById("quoteTemplate");
    videoHtmlList = document.getElementById("videoList");
    for (let i = 0; i < videoData.length; i++) {
        let video = new Video(videoData[i].id, videoData[i].name, videoData[i].youtube);
        videos[video.id] = video;
    } 
    for (let i = 0; i < quoteData.length; i++) {
        let quote = new Quote(quoteData[i].src, quoteData[i].key, quoteData[i].name);
        quotes[quote.key] = quote;
		videos[quote.videoName].add(quote);
    }
	for (let videoName in videos) {
		videoHtmlList.appendChild(videos[videoName].generate(videoTemplate, quoteTemplate));
	}
    document.addEventListener("keydown", playOnKeyDown);
}

document.addEventListener("DOMContentLoaded", init);