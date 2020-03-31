class Footer extends HTMLElement{
    connectedCallback(id){
        this.id = id;
        this.innerHTML = `
        <!-- Footer -->
        <footer class="page-footer font-small blue pt-4">

          <!-- Copyright -->
          <div class="footer-copyright text-center py-3">© 2020: Mini Web Aplication Project
          </div>
          <!-- Copyright -->

        </footer>
        <!-- Footer -->
        `;
    }
}

customElements.define('io-foot', Footer);
