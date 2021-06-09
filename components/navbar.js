class Navbar extends HTMLElement{
    connectedCallback(id){
        this.id = id;
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">ramoneando.com</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
        
        </nav>
        `;
    }
}

customElements.define('io-navbar', Navbar);
