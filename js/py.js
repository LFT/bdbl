var quoteTemplate;
var quoteHtmlList;
var quoteList = {};
function playOnKeyDown(evt) {
    let key = evt.key;
    if (quoteList[key]) {
        quoteList[key].play();
    }
}
function playOnClick(evt) {
    let target = evt.target;
    let elt;
    if (target.className === "quote") {
        elt = target;
    } else if (target.parentElement.className === "quote") {
        elt = target.parentElement;
    }
    if (elt) {
        elt.querySelector("audio").play();
    }
}
function init() {
    quoteTemplate = document.getElementById("quoteTemplate");
    quoteHtmlList = document.getElementById("quoteList");
    quoteList = {};
    for (let i =0; i < quotes.length; i++) {
        let quote = new Quote(quotes[i].src, quotes[i].key, quotes[i].name);
        quoteList[quotes[i].key] = quote;
        quoteHtmlList.appendChild(quote.generateFromTemplate(quoteTemplate));
    }
    document.addEventListener("keydown", playOnKeyDown);
    document.addEventListener("click", playOnClick);
}

document.addEventListener("DOMContentLoaded", init);