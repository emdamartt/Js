
// Array de objetos con su atributo img. Refiere a la seccion de productos. Se recorre el array para mostrar las imagenes correspondientes.

document.addEventListener('DOMContentLoaded',function(){ //Se crea la funcion una vez que el documento haya cargado.
    let imagenes = [
        {
            id: 1,
            img:'/Images/1.jpg'},
        {
            id: 2,
            img:'.Images/2.jpg'},
        {
            id: 3,
            img:'/Images/3.jpg'},
        {
            id: 4,
            img:'/Images/4.jpg'},
        {
            id: 5,
            img:'/Images/5.jpg'},
        {
            id: 6,
            img:'/Images/6.jpg'},
        {
            id: 7,
            img:'/Images/7.jpg'},
        {
            id: 8,
            img:'/Images/8.jpg'},
        {
            id: 9,
            img:'/Images/9.jpg'},
        {
            id: 10,
            img:'/Images/10.jpg'},
        {
            id: 11,
            img:'/Images/11.jpg'},
        {
            id: 12,
            img:'/Images/12.jpg'},
        {
            id: 13,
            img:'/Images/13.jpg'},
        {
            id: 14,
            img:'/Images/14.jpg'},
        {
            id: 15,
            img:'/Images/15.jpg'},
        {
            id: 16,
            img:'/Images/16.jpg'},
        {
            id: 17,
            img:'/Images/17.jpg'},
        {
            id: 18,
            img:'/Images/18.jpg'},
        {
            id: 19,
            img:'/Images/19.jpg'},
        {
            id: 20,
            img:'/Images/20.jpg'},
        {
            id: 21,
            img:'/Images/21.jpg'},
        {
            id: 22,
            img:'/Images/22.jpg'},
        {
            id: 23,
            img:'/Images/23.jpg'},
        {
            id: 24,
            img:'/Images/24.jpg'},
        {
            id: 25,
            img:'/Images/25.jpg'}
    ];

//Se gener un for of del array de imagenes y se las recorre indicando que si contador llega a 5 se agregue un nuevo div que contiene una imagen.

const gal = document.getElementById('gal');

let contador = 0;
for(imagen of imagenes){
    if(contador % 5 == 0){
        var newDiv = document.createElement('div');
    }
    newDiv.className = "columna";
    newDiv.innerHTML += `
                        <img src="${imagen.img}" alt="" data-img-mostrar="${contador}">`

    //Mediante un if decimos que si contador dividido 5 es igual a 4, gal, agrega como hijo a un div. 
    if(contador % 5 == 4){
        gal.append(newDiv);
    }
    contador++;
    console.log(gal, 'Ingresa el div con su hijo img, dentro del seccion');
}


//SlideShow de img.
const over = document.getElementById('over');

let slide = document.createElement('div');
    slide.className = "slideshow";
    slide.innerHTML = `
                            <span class="btn-cerrar">&times;</span>
                        <div class="botones adelante">    
                            <i class="mdi mdi-arrow-right-circle-outline"></i>
                        </div>    
                        <div class="botones atras">
                            <i class="mdi mdi-arrow-left-circle-outline"></i>
                        </div>    
                            <img src="" alt="" id="img-slideshow">`

    over.appendChild(slide);                        
    console.log(over, 'SlideShow');
    



    

//Variables a utilizar en esta seccion.
      contador = 0 //Controlara en que imagen vamos. Inicializa en 0.
const contenedor = document.querySelector('.slideshow');
const overlay = document.querySelector('.overlay');
const galeria_imagenes = document.querySelectorAll('.galeria img'); //Va a devolver una lista de nodos y sus atributos.
const img_slideshows = document.querySelector('.slideshow img'); //aqui es donde se mostrara la imagen seleccionada.

//llamamos al contenedor directamente al evento cuando hace click.
contenedor.addEventListener('click', function(event) {
    let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('img'),
        close = contenedor.querySelector('.btn-cerrar')
        tgt = event.target
        console.log(tgt == close, "es tgt")

            //evaluamos si la condicion de si el usuario clikeo adelante o atras.

    if (tgt == atras) {  //Si el usuario hace click hacia atras y si contador es mayor a 0, va ir hacia la foto anterior o al principio de la galeria.
        if (contador > 0) {
            img.src = imagenes[contador - 1].img //Accedemos a .img para que nos devuelva el atributo y el valor de la imagen.
            contador-- //Contador estaria siendo restado de a 1 ya que el usuario volvio a hacer click hacia atras.
        } else {
            img.src = imagenes[imagenes.length - 1].img
            contador = imagenes.length - 1
        } 
    } else if (tgt == adelante) {  //Si el usuario hace todo lo contrario y va hacia adelante, contador va a ser menor que imagenes.
        if (contador < imagenes.length - 1) {
            img.src = imagenes[contador + 1].img
            contador++ //Contador suma de 1. 
        } else {
            img.src = imagenes[0].img
            contador = 0  //Sino vuelve al principio y el recuadro quedara sin imagen, osea en el principio. 
        }
    } else if(tgt == close ){ //aqui decimos que si tgt es igual a close, el evento de cerrar el overlay funcionara mediante un click. Sino se cumple la funcion, el overlay no se abrira y el evento quedaria sin efecto. 
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    }
})

// Se agrega el evento click a cada imagen para la interaccion el usuario
Array.from(galeria_imagenes).forEach(img => {
    img.addEventListener('click', event => {
        const imagen_seleccionada = +(event.target.dataset.imgMostrar)
        img_slideshows.src = imagenes[imagen_seleccionada].img
        contador = imagen_seleccionada
        overlay.style.opacity = 1
        overlay.style.visibility = 'visible'
        })
    })
})
