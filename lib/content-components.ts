class Prototype extends HTMLIFrameElement {
    constructor() {
        super();

        this.width = "640";
        this.height = "480";
        this.title = `A ${this.dataset.provider} prototype`;
        this.allowFullscreen = true;
        this.referrerPolicy = "no-referrer";
    }
}

customElements.define("ui-prototype", Prototype, { extends: "iframe" });
