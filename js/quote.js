class Quote {
    constructor(audio, key, name) {
        this.audio = audio;
        this.key = key;
        this.name = name;
    }
    /*generate () {
        return `<div class="quote" >
                    <span class="key">${this.key}</span>
                    ${this.name}
                    <audio src="${this.audio}" id="quote-${this.name}"/>
                </div>`;
    }*/
    generateFromTemplate(template) {
        // http://www.html5rocks.com/en/tutorials/webcomponents/template/?redirect_from_locale=fr
       var clone = document.importNode(template.content, true);
       this.audioElement = clone.querySelector("audio");
       this.audioElement.src = `../audio/${this.audio}.mp3`;
       clone.querySelector(".key").textContent = this.key;
       clone.querySelector(".name").textContent = this.name;
       return clone;
    }
    play () {
        /*document.getElementById(`quote-${name}`).play();
        // or*/
        this.audioElement.play();
    }
}