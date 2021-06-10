class Navbar extends HTMLElement{
    connectedCallback(id){
        this.id = id;
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        
        <div class="container">
        <a class="navbar-brand" href="ramoneando.com">✎ ramoneando.com</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <!--
            <li class="nav-item active">
             <a class="nav-link" href="#">[anthropology art literature code running] <span class="sr-only">(current)</span></a> 
            </li>
            -->
          <span class="navbar-text">
            [anthropology art literature code running] 
          </span>
          </ul>
          </div>

          <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Bio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Posts</a>
            </li>
          </ul>

        </div>
        </div>
        </nav>
        `;
    }
}

customElements.define('io-navbar', Navbar);
