class Items extends HTMLElement{
    connectedCallback(id){
        this.id = id;
        this.innerHTML = `
        <div class="container">
            <!-- Example row of columns -->
            <div class="row">

              <div class="col-md-4">
                <h2>Project Title</h2>
                <p>Lipsum hello</p>
                <p><a class="btn btn-secondary" href="#" role="button">Ver detalles &darr;
                <span class="glyphicon glyphicon-arrow-down"></span>
                </a></p>
              </div>

              <div class="col-md-4">
                <h2>Project Title</h2>
                <p>Lipsum hello</p>
                <p><a class="btn btn-secondary" href="#" role="button">Ver detalles &darr;
                <span class="glyphicon glyphicon-arrow-down"></span>
                </a></p>
              </div>

            </div>
        </div>

        `;
    }
}

customElements.define('list-items', Items);
