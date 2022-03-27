//Dom del index. 

//Titulo de pagina. 

const title = document.getElementById("inicio");

let titulo = 'E-Martket';

title.innerText = titulo;

console.log(title, "Titulo de la pagina.");


//Variables pertenecientes al sello de la marca y al boton de menu. 

const nav = document.getElementById('entrada');

let div = document.createElement('div');
    div.className = "navtop";
    div.id = "nav";
    div.innerHTML = `
    <p id="marca" class="navBrand">E-Martket</p>
            <!-- Se utiliza el evento onclick pero no es recomendable. -->
            <a href="#" id="menu" class="navtoggler" onclick="toggle()"> &nbsp; <i class="fa fa-cared-donw"></i>Menu</a>
    `
    nav.appendChild(div);
    console.log(nav, "se crea el contenido del div dentro del nav");


//Funcion que activa el boton del menu en responsive. Se utilizo el evento onclick para mostrar su utilizacion pero no es recomendable. 

function toggle() {
    let ele = document.getElementsByClassName('navbottom');
    if(ele[0].style.height == '400px') {
        ele[0].style.height = '0px';
    }else{
        ele[0].style.height = '400px';
    }
}


//Variables asignadas al nav y los tag dentro del UL. 

const list = document.getElementById('entrada');

let newElement = document.createElement('ul');
    newElement.className = "navbottom";
    newElement.id = "list";
    newElement.innerHTML = `
                            <li>
                                <a href="index.html" class="navlink">Home</a>
                                <a href="gallery.html" class="navlink">Gallery</a>
                                <a href="productos.html" class="navlink">Products</a>
                                <a href="formulario.html" class="navlink">Contact</a>
                                </li>`

    list.appendChild(newElement);
    console.log(list, 'se agrega listaa desplegable');



//Creacion del logo central de la pagina.

const logo = document.getElementById("logo");

let sticker = document.createElement("div");
    sticker.className = "top";
    sticker.innerHTML = `
                        <img src="../Images/logoIndex.jpg" class="logo" alt="Logo index">
                        <div class="middle">
                            <h1 id="texto">Bienvenido a E-Martket Leds</h1>
                            <p id="parrafo">Especialistas en luces de Neón...</p>
                        </div>
                        <div class="bottom">
                            <button id="bott"></button>
                        </div> `

    logo.appendChild(sticker);
    console.log(logo, "Aqui se representa el logo.");


//Boton de Consultas. 

const bott = document.getElementById('bott');

let boton = `<button type="button" class="elBtn btnn" name="button"><a id="contacto" href="formulario.html">
                </a>Consultas</button>`

bott.innerHTML = boton;

console.log(bott, "representa el boton de consultas.");



//Funcion que ativa el boton de consultas. 

const clickear = document.getElementById('bott');
    clickear.addEventListener('click',function (e) {
    e.preventDefault(); 
    setTimeout(()=> location.href="formulario.html");
});

console.log(clickear, "Este es un click de redireccion.");




