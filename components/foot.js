class Footer extends HTMLElement{
    connectedCallback(id){
        this.id = id;
        this.innerHTML = `
        <!-- Footer -->
        <footer class="page-footer font-small blue pt-4 mt-5">

          <!-- Copyright -->
          <div class="footer-copyright text-center py-3">
			
      			<!-- SOCIAL MEDIA -->			
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">

          <div class="container">
                    <div class="col text-center social-media"><a href="https://github.com/naihloan"><i class="fab fa-github text-secondary fa-3x"></i></a> </div>
                    <div class="col text-center social-media"><a href="https://www.linkedin.com/in/benjam%C3%ADn-ju%C3%A1rez-960649152/"><i class="fab fa-linkedin text-secondary fa-3x"></i></a> </div>
                    <div class="col text-center social-media"><a href="https://stackexchange.com/users/7442009/nilon?tab=accounts"><i class="fab fa-stack-overflow text-secondary fa-3x"></i></a> </div>
                    <div class="col text-center social-media"><a href="https://twitter.com/venhamon"><i class="fab fa-twitter text-secondary fa-3x"></i></a> </div>
                    <div class="col text-center social-media"><a href="mailto:benjaminjuarezarlt@gmail.com"><i class="fas fa-envelope text-secondary fa-3x"></i></a> </div>

                    </div>
                </nav>
          </div>
        </footer>
        `;
    }
}

customElements.define('io-foot', Footer);
