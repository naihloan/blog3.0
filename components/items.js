class Items extends HTMLElement{
    connectedCallback(id){
        this.id = id;
        this.innerHTML = `
        <div class="container">
            <!-- Example row of columns -->
            <div class="row">

              <div class="col-md-4">
                <h2>Bio</h2>
                <p>Training UX</p>
                <p><a class="btn btn-secondary" href="#" role="button">cv &darr;
                <span class="glyphicon glyphicon-arrow-down"></span>
                </a></p>
              </div>

              <div class="col-md-4">
                <h2>Vermicomposting</h2>
                <p>how to use your green garbage to feed an earthworm colony</p>
                <p><a class="btn btn-secondary" href="#" role="button">worms freezer cheatsheet &darr;
                <span class="glyphicon glyphicon-arrow-down"></span>
                </a></p>
              </div>
              </div>
              
              <div class="row">
              <div class="col-md-4">
                <h2>Ultra Running</h2>
                <p>how and why to go <del>crazy</del> long </p>
                <p><a class="btn btn-secondary" href="#" role="button">PhD Project &darr;
                <span class="glyphicon glyphicon-arrow-down"></span>
                </a></p>
              </div>
              
              <div class="col-md-4">
                <h2>Graffiti and Pixação</h2>
                <p>Urban art in Brazil</p>
                <p><a class="btn btn-secondary" href="#" role="button">Master Thesis &darr;
                <span class="glyphicon glyphicon-arrow-down"></span>
                </a></p>
              </div>

            </div>
        </div>

        `;
    }
}

customElements.define('list-items', Items);
