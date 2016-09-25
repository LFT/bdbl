class Video {
    constructor(id, name, youtubeLink) {
        this.quoteList = [];
        this.youtubeLink = youtubeLink;
        this.id = id;
        this.name = name;
    }
	add(quote) {
		this.quoteList.push(quote);
	}
	generate(videoTemplate, quoteTemplate) {
		let clone = document.importNode(videoTemplate.content, true);
		let cloneLink = clone.querySelector("a");
		cloneLink.textContent = this.name;
		cloneLink.href = `https://www.youtube.com/watch?v=${this.youtubeLink}`;
		let quoteHtmlList = clone.querySelector(".quoteList");
		for (let i = 0; i < this.quoteList.length; i++) {
			quoteHtmlList.appendChild(this.quoteList[i].generate(quoteTemplate));			
		}
        return clone;
	}
}