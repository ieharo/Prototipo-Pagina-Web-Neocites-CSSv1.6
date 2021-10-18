/*--------------BARRA PROMOCIONAL---------------*/
const barra_promocional= document.getElementById('barra-promocional');
const fragment = document.createDocumentFragment();
const barra=document.createElement('p');

const visualizacion="SOLÓ 9.99$";

barra.innerHTML += `Accede a todos los cursos disponibles por tan <a href="precios.html"><u>${visualizacion}</u></a>`;

fragment.appendChild(barra);
barra_promocional.appendChild(fragment);
/*---------------------LOGO--------------------*/
const logos=document.getElementById('logo');
const fragment2 = document.createDocumentFragment();

const logo= document.createElement('div');
logo.setAttribute("class","logo2");
logo.innerHTML+=`<a href="index.html"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ff0049"><path d="M82.56,6.665c-15.97719,0 -24.08,11.56969 -24.08,34.4v17.2c0,1.27656 -0.34937,2.795 -0.95406,4.01781c-0.20156,0.41656 -1.16906,1.78719 -2.02906,2.98312c-4.78375,6.69188 -15.35906,25.18188 -17.32094,45.28438c0.76594,-0.14781 1.54531,-0.25531 2.41875,-0.25531c2.10969,0 7.67281,0 16.54156,14.63344c1.69313,2.43219 2.58,3.92375 3.80281,5.96625c0.81969,1.3975 1.8275,3.10406 3.44,5.67063l0.08062,0.12094l0.09406,0.14781c0.92719,1.65281 1.89469,2.96969 2.83531,4.21937c0.5375,0.72563 1.08844,1.47813 1.62594,2.2575c2.10969,-0.84656 4.25969,-2.10969 5.53625,-3.93719c1.67969,-2.795 1.49156,-6.11406 -0.49719,-9.09719c-0.81969,-1.24969 -2.33813,-2.13656 -5.96625,-4.21938c-2.17688,-1.23625 -4.87781,-2.78156 -6.11406,-3.84312c-2.88906,-2.4725 -6.93375,-7.86094 -6.93375,-12.13406c0,-9.1375 6.11406,-23.07219 11.01875,-31.33625c2.80844,-4.71656 4.945,-8.35812 5.79156,-11.46219c0.48375,0.33594 1.02125,0.65844 1.77375,0.91375l0.12094,0.04031l0.13438,0.04031c2.39187,0.63156 4.79719,0.52406 6.35594,0.52406c3.23844,0 5.57656,-1.55875 7.75344,-2.86219c2.13656,-1.30344 4.24625,-2.51281 4.55531,-2.62031c1.55875,2.94281 3.57437,5.67063 5.67062,8.50594c5.75125,7.74 12.65813,20.76094 14.70063,40.0975c2.67406,-1.41094 4.20594,-1.84094 7.48469,-1.84094c0.06719,0 0.14781,0.01344 0.215,0.01344c0.29563,-0.01344 0.57781,-0.04031 0.87344,-0.04031c0.86,0 1.73344,0.05375 2.59344,0.13437c2.02906,0.12094 4.74344,0.81969 6.3425,1.37063c2.6875,0.79281 4.90469,2.20375 6.46344,4.00437c1.3975,0.01344 2.74125,0.33594 3.9775,0.94063c0,-2.24406 0.17469,-5.53625 0.17469,-6.42313c0,-11.35469 -7.44437,-27.02281 -13.04781,-35.05844c-1.15562,-1.66625 -2.27094,-3.225 -3.34594,-4.71656c-4.95844,-6.86656 -8.88219,-12.29531 -11.12625,-21.64781c-1.47812,-6.07375 -1.67969,-7.955 -1.88125,-9.76906c-0.18812,-1.8275 -0.40312,-3.73563 -1.62594,-8.86875c-2.23063,-10.40063 -4.98531,-23.35438 -27.45281,-23.35438zM72.24,27.305c3.80281,0 6.88,6.92031 6.88,12.63125c0,0.34938 -0.04031,0.90031 -0.06719,1.3975c-0.25531,-0.01344 -0.51063,-0.05375 -0.77938,-0.05375c-0.98094,0 -1.89469,0.14781 -2.76812,0.37625c-0.41656,-2.19031 -1.67969,-3.81625 -3.26531,-3.81625c-1.89469,0 -3.44,2.31125 -3.44,5.16c0,0.69875 0.09406,1.35719 0.26875,1.96188c-0.92719,0.69875 -1.63937,1.29 -2.05594,1.70656c-0.12094,0.1075 -0.215,0.18813 -0.3225,0.28219c-0.25531,-0.5375 -0.47031,-1.08844 -0.65844,-1.69313c-0.38969,-2.40531 -0.67188,-5.32125 -0.67188,-5.32125c0,-5.71094 3.07719,-12.63125 6.88,-12.63125zM89.44,27.305c3.80281,0 6.88,6.92031 6.88,12.63125c0,2.12313 -0.45687,4.6225 -1.19594,6.59781c-0.95406,-0.40313 -1.86781,-0.71219 -2.78156,-0.94063c0.30906,-0.76594 0.5375,-1.62594 0.5375,-2.59344c0,-2.84875 -1.54531,-5.16 -3.44,-5.16c-1.89469,0 -3.44,2.31125 -3.44,5.16c0,0.01344 0,0.02688 0,0.04031c-1.02125,-0.41656 -2.15,-0.81969 -3.3325,-1.12875c-0.05375,-0.72563 -0.1075,-1.46469 -0.1075,-1.97531c0,-5.71094 3.07719,-12.63125 6.88,-12.63125zM78.27344,48.16c1.3975,0 3.42656,0.55094 5.28094,1.30344c1.85437,0.7525 3.42656,1.58563 4.74344,2.13656l0.26875,0.12094l0.28219,0.05375c1.74688,0.41656 3.31906,0.86 3.96406,1.19594c-0.17469,1.47812 -0.34938,2.28437 -0.43,2.40531c-0.09406,0.14781 -0.57781,0.60469 -2.33813,1.54531c-2.17687,0.77938 -3.82969,2.0425 -5.60344,3.1175c-1.94844,1.16906 -3.92375,1.88125 -4.20594,1.88125c-1.505,0 -3.58781,-0.1075 -4.42094,-0.28219c0.3225,0.09406 -0.24188,-0.18813 -0.95406,-0.84656c-0.76594,-0.72562 -1.72,-1.72 -2.6875,-2.75469l-0.25531,-0.25531l-0.26875,-0.18812c-1.10187,-0.77938 -1.96187,-1.47813 -2.37844,-1.97531c-0.43,-0.51063 -0.47031,-0.65844 -0.47031,-0.99438c0,-0.51062 -0.09406,-0.20156 0.215,-0.55094c0.30906,-0.36281 1.24969,-1.10187 2.52625,-2.23062l0.12094,-0.09406l0.1075,-0.12094c-0.18812,0.20156 1.06156,-1.02125 2.41875,-1.90813c1.35719,-0.88687 3.03688,-1.55875 4.085,-1.55875zM121.48844,116.94656c-3.21156,0 -5.44219,0.95406 -6.04687,1.72c1.3975,1.6125 2.2575,3.17125 3.14437,5.99312c0.95406,2.09625 3.34594,2.62031 5.25406,2.62031c5.83188,0 6.96063,-3.50719 8.80156,-5.4825c0,0 -0.48375,-0.5375 -0.48375,-1.06156c-0.48375,-1.04812 -1.90813,-2.09625 -3.81625,-2.62031c-1.43781,-0.52406 -3.82969,-1.04813 -4.78375,-1.04813c-0.72563,-0.09406 -1.41094,-0.12094 -2.06938,-0.12094zM40.59469,117.175c-2.39187,0 -3.57437,1.1825 -5.17344,2.78156c-1.59906,1.58562 -3.29219,4.05812 -6.08719,6.04687c-2.45906,3.19813 -9.80938,0.12094 -11.91906,4.93156c-1.16906,2.63375 2.84875,6.10063 2.84875,12.05344c0,2.39188 -2.00219,3.9775 -2.39187,5.57656c-0.40313,1.97531 -0.80625,3.17125 0,4.75688c1.58562,2.37844 3.58781,3.18469 17.14625,5.95281c7.17562,1.59906 13.96156,5.57656 18.34219,5.96625c4.38062,0.38969 11.95937,0 11.95937,-10.72312c0.40313,-6.35594 -3.18469,-7.94156 -6.7725,-14.2975c-3.99094,-6.36938 -4.38062,-7.55188 -7.17562,-11.52938c-2.39188,-3.9775 -7.57875,-11.51594 -10.77688,-11.51594zM110.88625,124.04156c-0.80625,1.6125 -0.80625,2.83531 -0.80625,6.89344c0,3.25188 0,6.90688 -0.40312,9.75563c-0.81969,6.90687 -3.03688,10.01094 -3.03688,14.06906c0,4.47469 1.22281,7.32344 2.84875,8.54625c1.20938,1.22281 3.25188,2.02906 7.72656,2.02906c4.46125,0 7.31,-1.62594 10.15875,-4.46125c2.02906,-2.0425 3.655,-2.84875 9.3525,-6.92031c4.46125,-2.84875 11.38156,-6.50375 12.59094,-7.71312c0.81969,-0.81969 2.0425,-1.23625 2.0425,-3.68188c0,-2.02906 -1.62594,-2.83531 -2.84875,-3.23844c-1.62594,-0.81969 -4.46125,-2.0425 -6.90687,-5.6975c-1.06156,-1.76031 -0.90031,-6.28875 -2.17688,-9.04344l-1.76031,1.89469c-0.20156,0.215 -0.37625,0.49719 -0.57781,0.7525c-1.66625,2.2575 -5.13313,6.93375 -13.24938,6.93375c-5.32125,0 -9.62125,-2.48594 -11.51594,-6.665l-0.17469,-0.37625l-0.13438,-0.41656c-0.43,-1.37062 -0.77937,-2.10969 -1.12875,-2.66062zM101.49344,146.02531c-3.27875,2.82187 -8.29094,5.54969 -15.49344,5.54969c-7.32344,0 -12.26844,-2.70094 -15.41281,-5.46906c1.08844,2.28438 1.81406,4.99875 1.6125,8.62688c0,1.30344 -0.12094,2.53969 -0.30906,3.72219h28.15156c-0.16125,-1.1825 -0.28219,-2.39187 -0.28219,-3.69531c0,-3.03687 0.7525,-5.50937 1.49156,-7.90125c0.08062,-0.26875 0.16125,-0.56437 0.24187,-0.83312z"></path></g></g></svg></a>`;
fragment2.appendChild(logo);
logos.appendChild(fragment2);
/*--------------------TITULO--------------------*/
const titulo2=document.getElementById('titulo');
const fragment3 = document.createDocumentFragment();

const titulo=document.createElement('div');
titulo.setAttribute("class","titulo");
titulo.innerHTML+=`<p><a href="index.html">AcademyC</a></p>`;
fragment3.appendChild(titulo);
titulo2.appendChild(fragment3);
/*--------------------BARRA DE NAVEGACION--------------------*/
const menu=['Inicio', 'Cursos', 'Precios', 'Miembro','Carrito Compras'];
const barra_navegacion= document.getElementById('barra-navegacion')
const ul=document.getElementById('ul');
const fragment4 = document.createDocumentFragment();
for(const men of menu){
    if(men=="Miembro"){
        ul.innerHTML+=`<li><a href="miembro.html"class="menu">${men}</a><ul><li><a href="registrarse.html" class="submenu">Registrarse</a></li><li><a href="iniciarsesion.html" class="submenu">Iniciar Sesion</a></li></ul></li>`;
    }
    else if(men=='Inicio'){
        ul.innerHTML+=`<li><a href="index.html" class="menu">${men}</a></li>`;
    }
    else if(men=='Cursos'){
        ul.innerHTML+=`<li><a href="cursos.html" class="menu">${men}</a></li>`;
    }
    else if(men=='Precios'){
        ul.innerHTML+=`<li><a href="precios.html" class="menu">${men}</a></li>`;
    }
    fragment4.appendChild(ul);
}
barra_navegacion.appendChild(fragment4);
/*-----------------------BARRA DE NAVEGACION RESPONSIVE------------*/
var aux=1;
if(aux==1){
    menu.push('Iniciar Sesion');
    menu.push('Registrarse');
    menu.push('Carrito Compras');
    aux++;
}
const barra_responsive= document.getElementById("divresponsive");
const ulr=document.getElementById('ulresponsive');
const fragment5 = document.createDocumentFragment();
for(const meniu of menu){
    if(meniu=="Miembro"){
        ulr.innerHTML+=`<li><a href="miembro.html">${meniu}</a></li>`;
    }
    else if(meniu=='Inicio'){
        ulr.innerHTML+=`<li><a href="index.html">${meniu}</a></li>`;
    }
    else if(meniu=='Cursos'){
        ulr.innerHTML+=`<li><a href="cursos.html">${meniu}</a></li>`
    }
    else if(meniu=='Precios'){
        ulr.innerHTML+=`<li><a href="precios.html">${meniu}</a></li>`;
    }
    else if(meniu=='Iniciar Sesion'){
        ulr.innerHTML+=`<li><a href="iniciarsesion.html">${meniu}</a></li>`;
    }
    else if(meniu=='Registrarse'){
        ulr.innerHTML+=`<li><a href="registrarse.html">${meniu}</a></li>`;
    }
    fragment5.appendChild(ulr);
}
barra_responsive.appendChild(fragment5);
/*---------------------------FOOTER-----------------------------------*/
const footer=document.getElementById("footer");
const fragment6= document.createDocumentFragment();
const row=document.getElementById("container");
row.innerHTML=`
<div class="row">

                <div class="footer-col">
                
                    <h4>Company</h4>
                    <ul>
                        <li><a href="about.html">About us</a></li>
                        <li><a href="precios.html">Our Services</a></li>
                        <li><a href="politica.html">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="cursos.html">Courses</a></li>
                        <li><a href="precios.html">Payment Options</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Aditional</h4>
                    <ul>
                        <li><a href="cursos.html">Development</a></li>
                        <li><a href="matrices.html">Matrices</a></li>
                        <li><a href="tablas.html">Tables</a></li>
                        <li><a href="video.html">Videos</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <a href="https://www.facebook.com/isaac.haro3/">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com/Isaac19814499">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/isaac-haro/">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/ieharo">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/podo_tutorials/">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCHi2TFALsXJT70dhpiJGTFw">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="https://www.tiktok.com/@podotutorials?">
                            <i class="fab fa-tiktok"></i>
                        </a>
                        <a href="https://podotutorials.blogspot.com">
                            <i class="fab fa-blogger"></i>
                        </a>
                    </div>
                </div>
            </div>`;
fragment6.appendChild(row);
footer.appendChild(fragment6);
