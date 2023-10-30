class BackButton extends HTMLButtonElement {
    constructor() {
        super();

        this.addEventListener("click", () => {
            history.back();
        });
    }
}

customElements.define("back-button", BackButton, { extends: "button" });
