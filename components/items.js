class Items extends HTMLElement{
    connectedCallback(id){
        this.id = id;
        this.innerHTML = `
        <div class="container">
            <!-- Example row of columns -->
            <div class="row">

              <div class="col-md-4 my-5">
                <h2>Bio</h2>
                <p>sociologist training UX</p>
                <p><a class="btn btn-secondary bg-light" href="#" role="button">cv &darr;
                <span class="glyphicon glyphicon-arrow-down"></span>
                </a></p>
              </div>

              <div class="col-md-4 my-5">
                <h2>Vermicomposting</h2>
                <p>use your green garbage to feed earthworms</p>
                <p><a class="btn btn-secondary" href="#" role="button">worms freezer cheatsheet &darr;
                <span class="glyphicon glyphicon-arrow-down"></span>
                </a></p>
              </div>
              </div>
              
              <div class="row">
              <div class="col-md-4 my-5">
                <h2>Ultra Running</h2>
                <p>how and why to go so <del>crazy</del> long </p>
                <p><a class="btn btn-secondary" href="#" role="button">PhD Project &darr;
                <span class="glyphicon glyphicon-arrow-down"></span>
                </a></p>
              </div>
              
              <div class="col-md-4 my-5">
                <h2>Graffiti and Pixação</h2>
                <p>urban art in São Paulo, Brazil</p>
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
