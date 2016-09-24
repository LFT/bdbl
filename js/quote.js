class Quote {
    constructor(audio, key, name) {
        this.audio = audio;
        this.key = key;
        this.name = name;
		this.videoName = audio.split("_")[0];
    }
    generate(template) {
       let clone = document.importNode(template.content, true);
       this.audioElement = clone.querySelector("audio");
       this.audioElement.src = `../audio/${this.audio}.mp3`;
       clone.querySelector(".key").textContent = this.key;
       clone.querySelector(".name").textContent = this.name;
       return clone;
    }
    play() {
        this.audioElement.play();
    }
}