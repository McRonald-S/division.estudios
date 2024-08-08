document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
  
    header.innerHTML = `
  
    <div class="header_second">
      <div class="header_second_logos container">
        <a href="https://educacion.gob.mx/">
          <img src="/frontend/public/img/logo_second.svg" class="logo_second">
        </a>
        <img src="/frontend/public/img/linea-vertical-separador-logos.svg" class="separador">
        <a href="https://tecnm.mx/">
          <img src="/frontend/public/img/logo-tecnm.svg" class="logo_third">
        </a>
        <img src="/frontend/public/img/linea-vertical-separador-logos.svg" class="separador">
        <a href="https://www.tecnm.mx/">
          <img src="/frontend/public/img/logo_TECT.svg" class="logo_fourth">
        </a>
      </div>

      
    </div>
    <!-- Fin de segundo header -->
  
    
    <div class="header_fourth" id="sticky">
      <div class="row menu-blue">
  
        <nav class="site_nav container">
          <div class="container-fluid">
            <div class="navbar-header">
              <!-- Botón del menú hamburguesa -->
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
              </button>
              <a class="navbar-brand" href="https://www.tijuana.tecnm.mx/">
                <img src="/frontend/public/img/house-white.png" class="logo-t-blanco">
              </a>
            </div>
  
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li class=""><a href="/index.html" style="text-decoration:none;">Inicio</a></li>
                
                <li><a href="/frontend/src/components/views/Titulacion/index.html" style="text-decoration:none;">Titulación</a></li>
                <li><a href="" style="text-decoration:none;">Inglés</a></li>
                <li><a href="" style="text-decoration:none;">Coordinaciones</a></li>
                <li><a href="#about" style="text-decoration:none;">Vinculación</a></li>
                <li class="dropdown" style="text-align: center;">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="text-decoration:none;">Trámites<span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#" style="text-decoration:none;">Lineamiento-2015</a></li>
                    <li><a href="#" style="text-decoration:none;">Caso comité</a></li>
                    <li><a href="#" style="text-decoration:none;">Constancias</a></li>
                    <li><a href="#" style="text-decoration:none;">Referencias</a></li>
                    <li><a href="#" style="text-decoration:none;">Baja temporal</a></li>
                    <li><a href="#" style="text-decoration:none;">Cambio de modalidad</a></li>
                    <li><a href="#" style="text-decoration:none;">Cambio de carrera</a></li>
                    <li><a href="#" style="text-decoration:none;">Movilidad</a></li>
                    <li><a href="#" style="text-decoration:none;">Traslado</a></li>
                    <li><a href="#" style="text-decoration:none;">Seguro estudiantil</a></li>
                    <li><a href="#" style="text-decoration:none;">Certificado parcial</a></li>
                    <li><a href="#" style="text-decoration:none;">Costos servicios</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <br>
  
  
  
    `;
  
  // Activa el menú responsivo
  const toggleButton = header.querySelector('.navbar-toggle');
  const navbar = header.querySelector('#navbar');
  
  toggleButton.addEventListener('click', function() {
      navbar.classList.toggle('show');
  });
  });