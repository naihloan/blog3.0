class Content extends HTMLElement{
    connectedCallback(id){
        this.id = id;
        this.innerHTML = `
 
        `;
    }
}

customElements.define('io-content', Content);
