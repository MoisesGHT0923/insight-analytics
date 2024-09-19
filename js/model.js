class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar">
            <div class="logo">
                <div class="logo">
                    <a href="/index.html">
                        <img src="/Media/logo.png" alt="Inicio_Logo" height="80px" width="500px">
                    </a>
                </div>
                <div class="Redes">
                    <a href="https://www.facebook.com/profile.php?id=61566061223842&mibextid=kFxxJD" target="_blank"><img src="/Media/Facebook-logo.jpg" alt="Instagram" height="30px" width="30px"></a>
                    <a href="https://www.youtube.com/channel/UCXcJzXBxbJI1hnUarRBh1AA" target="_blank"><img src="/Media/Youtube-Logo.png" alt="Instagram" height="30px" width="30px"></a>
                </div>
            </div>
            <button class="menu-toggle" aria-label="Toggle menu">☰</button>
            <div class="bnm-2">
                <ul>
                    <li><a href="/index.html">Inicio</a></li>
                    <li><a>Sobre Nosotros</a>
                    <ul>
                        <li><a href="/Views/Sobre Nosotros/Quienes_Somos.html">Quienes Somos</a></li>
                        <li><a href="/Views/Sobre Nosotros/Mision_Vision.html">Mision Y Vision</a></li>
                        <li><a href="/Views/Sobre Nosotros/Nuestro_Procedimiento.html">Nuestro Procedimiento</a></li>
                    </ul>
                    </li>
                    <li><a href="/Views/Delitos/Delitos.html">Delitos</a>
                    <ul>
                        <li><a>Tipos de delitos</a>
                            <ul class="grid-menu">
                                <li><a href="/Views/Delitos/Tipos/Abigeato.html">Abigeato</a></li>
                                <li><a href="/Views/Delitos/Tipos/Amenaza.html">Amenazas</a></li>
                                <li><a href="/Views/Delitos/Tipos/Delitos Sexuales.html">Delitos Sexuales</a></li>
                                <li><a href="/Views/Delitos/Tipos/Extorcion.html">Extorsión</a></li>
                                <li><a href="/Views/Delitos/Tipos/Homicidio Accidentes.html">Homicidio en accidentes</a></li>
                                <li><a href="/Views/Delitos/Tipos/Homicidio.html">Homicidio</a></li>
                                <li><a href="/Views/Delitos/Tipos/Hurto Automotores.html">Hurto Automotores</a></li>
                                <li><a href="/Views/Delitos/Tipos/Hurto Entidades Comerciales.html">Hurto Entidades Comerciales</a></li>
                                <li><a href="/Views/Delitos/Tipos/Hurto Entidades Financieras.html">Hurto Entidades Financieras</a></li>
                            </ul>
                            <ul class="grid-menu-2">
                                <li><a href="/Views/Delitos/Tipos/Hurto Motocicletas.html">Hurto Motocicletas</a></li>
                                <li><a href="/Views/Delitos/Tipos/Hurto Personas.html">Hurto a Personas</a></li>
                                <li><a href="/Views/Delitos/Tipos/Hurto Residencias.html">Hurto a Residencias</a></li>
                                <li><a href="/Views/Delitos/Tipos/Lesiones Accidentes de Trafico.html">Lesiones Accidentes de Trafico</a></li>
                                <li><a href="/Views/Delitos/Tipos/Lesiones Personales.html">Lesiones Personales</a></li>
                                <li><a href="/Views/Delitos/Tipos/Pirateria Terrestre.html">Pirateria Terrestre</a></li>
                                <li><a href="/Views/Delitos/Tipos/Secuestro.html">Secuestro</a></li>
                                <li><a href="/Views/Delitos/Tipos/Terrorismo.html">Terrorismo</a></li>
                                <li><a href="/Views/Delitos/Tipos/Violencia Intrafamiliar.html">Violencia Intrafamiliar</a></li>
                            </ul>
                        </li>
                        <li><a href="/Views/Delitos/Estadisticas.html">Estadisticas</a></li>
                    </ul>
                    </li>
                    </li>
                    <li><a href="/Views/Recursos.html">Recursos</a></li>
                    <li><a href="/Views/FAQ.html">FAQ</a></li>
                    <li><a href="/Views/Contactanos.html">Contáctanos</a></li>
                    <li><a href="/Views/autenticacion/login.html">Descargar Contenido</a></li>
                </ul>
            </div>
        </nav>
        `;
    }
}

class CustomContent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="content-2">
            <div>
                <a href="/Views/Delitos/Tipos/Abigeato.html"><img src="/Media/Iconos 2/t (4).png" alt="">Abigeato</a>
            </div>
            <div>
                <a href="/Views/Delitos/Tipos/Amenaza.html"><img src="/Media/Iconos 2/t (8).png" alt="">Amenazas</a>
            </div>
            <div>
                <a href="/Views/Delitos/Tipos/Delitos Sexuales.html"><img src="/Media/Iconos 2/t (3).png" alt="">Delitos Sexuales</a>
            </div>
            <div>
                <a href="/Views/Delitos/Tipos/Extorcion.html"><img src="/Media/Iconos 2/t (1).png" alt="">Extorsión</a>
            </div>
            <div>
                <a href="/Views/Delitos/Tipos/Homicidio Accidentes.html"><img src="/Media/Iconos 2/tl.webp" alt="">Homicidio en Accidentes de Transito</a>
            </div>
            <div>
                <a href="/Views/Delitos/Tipos/Homicidio.html"><img src="/Media/Iconos 2/t (7).png" alt="">Homicidio</a>
            </div>
            <div>
                <a href="/Views/Delitos/Tipos/Hurto Automotores.html"><img src="/Media/Iconos 2/t (12).png" alt="">Hurto a automotores</a>
            </div>
            <div>
                <a href="/Views/Delitos/Tipos/Hurto Entidades Comerciales.html"><img src="/Media/Iconos 2/t (6).png" alt="">Hurto a entidades comerciales</a>
            </div>
            <div>
                <a href="/Views/Delitos/Tipos/Hurto Entidades Financieras.html"><img src="/Media/Iconos 2/t (3).webp" alt="">Hurto a entidades financieras</a>
            </div>
            <div>
                <a href="/Views/Delitos/Tipos/Hurto Motocicletas.html"><img src="/Media/Iconos 2/t (13).png" alt="">Hurto motocicletas</a>
            </div>
            <div>
                <a href="/Views/Delitos/Tipos/Hurto Personas.html"><img src="/Media/Iconos 2/t (11).png" alt="">Hurto a personas</a>
            </div>
            <div>
                <a href="/Views/Delitos/Tipos/Hurto Residencias.html"><img src="/Media/Iconos 2/tl.png" alt="">Hurto a residencias</a>
            </div>
            <div>
                <a href="/Views/Delitos/Tipos/Lesiones Accidentes de Trafico.html"><img src="/Media/Iconos 2/tl (3).webp" alt="">Lesiones Accidentales de Trafico</a>
            </div>
            <div>
                <a href="/Views/Delitos/Tipos/Lesiones Personales.html"><img src="/Media/Iconos 2/tl (2).webp" alt="">Lesiones Personales</a>
            </div>
            <div>
                <a href="/Views/Delitos/Tipos/Pirateria Terrestre.html"><img src="/Media/Iconos 2/t (10).png" alt="">Pirateria terrestre</a>
            </div>
            <div>
                <a href="/Views/Delitos/Tipos/Secuestro.html"><img src="/Media/Iconos 2/t (5).png" alt="">Secuestro</a>
            </div>
            <div>
                <a href="/Views/Delitos/Tipos/Terrorismo.html"><img src="/Media/Iconos 2/tl (1).webp" alt="">Terrorismo</a>
            </div>
            <div>
                <a href="/Views/Delitos/Tipos/Violencia Intrafamiliar.html"><img src="/Media/Iconos 2/t (2).webp" alt="">Violencia Intrafamiliar</a>
            </div>
        </div>
        `;
    }
}

class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <div class="footer-content">
        <table class="footer-table">
            <tr>
                <td>
                    <h3>Navegación</h3>
                    <ul>
                        <li><a href="/index.html">Inicio</a></li>
                        <li><a href="/Views/Sobre Nosotros/Quienes_Somos.html">Quiénes Somos</a></li>
                        <li><a href="/Views/Sobre Nosotros/Mision_Vision.html">Misión Y Vision</a></li>
                        <li><a href="/Views/Politica de Tratamiento de datos personales.html">Tratamiento de Datos</a></li>
                    </ul>
                </td>
                <td>
                    <h3>Análisis</h3>
                    <ul>
                        <li><a href="/Views/Delitos.html">Por Delito</a></li>
                        <li><a href="/Views/Recursos.html">Recursos</a></li>
                        <li><a href="/Views/FAQ.html">FAQ</a></li>
                    </ul>
                </td>
                <td>
                    <h3>Contacto</h3>
                    <p>Email: <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">insightanaliticscolombiadatos@gmail.com</a></p>
                    <p>Teléfono: (57) 1234567890</p>
                    <a href="/Views/Contactanos.html">Formulario de Contacto</a>
                  
                </td>
            </tr>
        </table>
    </div>

    <div class="footer-bottom">
        <p>&copy; 2024 Insight Analytics Colombia En Datos (TAD-7). Todos los derechos reservados.</p>
    </div>
    <div class="sena-logo">
            <img src="/Media/logoSena.png" alt="Logo SENA" width="50" height="50">
    </div>
        `;
    }
}

customElements.define('custom-header', CustomHeader);
customElements.define('custom-footer', CustomFooter);
customElements.define('custom-content', CustomContent);
