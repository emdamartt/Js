//Array de productos. 

const productos = [
    {
        id: 1,
        nombre: 'Cartel Hand Lips',
        imagen: '../Images/cartel 9.jpg',
        precio: '$15.600'
    },
    {
        id: 2,
        nombre: 'Cartel Only Craft',
        imagen: '../Images/cartel 2.jpg',
        precio: '$22.000'
    },
    {
        id: 3,
        nombre: 'Cartel Programmer',
        imagen: '../Images/cartel 3.jpg',
        precio: '$8.250'
    },
    {
        id: 4,
        nombre: 'Cartel Yes No',
        imagen: '../Images/cartel 4.jpg',
        precio: '$5.500'
    },
    {
        id: 5,
        nombre: 'Cartel Pacman',
        imagen: '../Images/cartel 5.jpg',
        precio: '$7.400'
    },
    {
        id: 6,
        nombre: 'Cartel Letras',
        imagen: '../Images/cartel 6.jpg',
        precio: '$17.600'
    },
    {
        id: 7,
        nombre: 'Cartel Open ',
        imagen: '../Images/cartel 7.jpg',
        precio: '$15.800'
    },
    {
        id: 8,
        nombre: 'Cartel Beer ',
        imagen: '../Images/Cartel 1.jpg',
        precio: '$14000'
    },
    {
        id: 9,
        nombre: 'Cartel Cocktail',
        imagen: '../Images/cartel 8.jpg',
        precio: '$22.000'
    },
    {
        id: 10,
        nombre: 'Cartel The Gutmans ',
        imagen: '../Images/cartel 10.jpg',
        precio: '$19150'
    },
    {
        id: 11,
        nombre: 'Cartel Nombres ',
        imagen: '../Images/cartel 11.jpg',
        precio: '$13.000'
    },
    {
        id: 12,
        nombre: 'Cartel Cuadros ',
        imagen: '../Images/cartel 12.jpg',
        precio: '$9500'
    },
];

//MIRA CUANDO VOS LO PASAS ASI AL PRODUCTO, TE LO PASA TODO EN UNA SOLA FILA, NO TE LO PONE CON LAS PROPIEDADES QUE TIENE EN GRAL. OSEA LAS PROPIEDADES LAS TOMA PERO ME LO DEJA EN UNA SOLA FILA Y YO QIERO QUE SE VEA EN 3. Que recorra el array de productos pero que mantenga sus estilos. 


const listado = document.getElementById("listado");

for(let producto of productos){
    let contenedor = document.createElement("div");
    contenedor.className = "container";
    contenedor.id = producto.id;
    contenedor.innerHTML = `
    <div class="row size">
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top" alt="Cartel Beer">
                <div class="cardBody">
                    <h5 id="title1" class="cardTitle">${producto.nombre}</h5>
                    <p id="parrafo1" class="cardText text-dark precio">${producto.precio}.</p>
                    <button class="btn btn-dark bott">Comprar</button>
                </div>
            </div>
        </div>
    </div>
    `
    listado.appendChild(contenedor);
    console.log(listado);
}















// //se crea valor de precio a nivel global.
// let precio = 0 
// let cantidad = 0
// let producto = 0
// let envio = 0
// let iva = 1.21
// let precioTotal = 0

// //Se crea la clase y su elemento constructor. 
// class Carteles{
//         constructor(producto, precio, cantidad) {
//                 this.producto = producto,
//                 this.precio = precio,
//                 this.cantidad = cantidad
//     }
// }
// //DECLARACION DE FUNCIONES MEDIANTE FUNCIONES TIPO ARROW
// const generarIva = () => {
//          precio = precio * iva;
// }

//     const sumarTotal = () => {    //CALCULAR LA SUMA TOTAL ENTRE IVA, ENVIO Y CANTIDAD DE PRODUCTOS.
//         precio = precio * cantidad;
// }

//     const costoEnvio = () => {       //CALCULAR DATOS DE ENVIO
//         console.log(precio, "es el precio");
//         if(precio < 3000) {
//             console.log("ingresamos para agregar el valor de envio de $750");
//             console.log(precio, "es el precio de producto despues del envio");
//             envio = envio + 750

//             precio = envio + precio
//             console.log(envio, "es el precio del producto despues del envio");
//             console.log(envio, "es el precio del envio");
//         }
// }
//     const pedido = () => {  //INGRESO DE PRODUCTOS ENUMERANDO CADA UNO E INGRESANDOLO MEDIANTE PARSEO.

//         while (producto <= 0 || producto < 4) {
        
//             producto = parseInt(prompt('BIENVENIDO A EMARKT\n Seleccione el número del producto que desea comprar: \n 1: Cartel Beer - $15600 \n 2: Cartel only Craft - $22000 \n 3: Cartel Programmer - $8520 \n 4: Cartel Yes No - $5500\n 5: Pacman- $7400\n 6: Cartel Letras - $17600 \n PRECIOS SIN IVA INCLUIDO \n COSTO DE ENVIO $750, COMPRA MAYOR A $3000, ENVIO GRATUITO '))

//             switch (producto) {
//                 case 1:
//                         producto = "Cartel Beer"; 
//                         precio = 15600;
//                     break;
//                 case 2:
//                         producto = "Cartel only Craft" ;
//                         precio = 22000 ;
//                     break;
//                 case 3:
//                         producto = "Cartel Programmer" ;
//                         precio = 8520 ;
//                     break;
//                 case 4:
//                         producto = "Cartel Yes No" ;
//                         precio = 5500 ;
//                     break;
//                 case 5:
//                         producto = "Cartel Pacman" ;
//                         precio = 7400 ;
//                     break;
//                 case 6:
//                         producto = "Cartel Letras" ;
//                         precio = 17600 ;
//                     break;
//         }
//             while (cantidad <= 0) {
//                 cantidad = parseInt(prompt(`¿Cuantas unidades de ${producto} desea llevar?`))  //CANTIDAD DE PROD ELEGIDOS POR EL USUARIO
//             }
//             return new Carteles (producto, precio, cantidad)
//         }
//     }

// console.log(precio, "precio antes e llamar a funciones");

// const  pedir = pedido();


// // //LLAMADO DE FUNCIONES CREADAS.
// generarIva();
// sumarTotal();
// costoEnvio();

// console.log(precio, "precio luego de llamar a funciones");

// //TICKET AL USUARIO.
// alert(`Detalle de su compra:\n${producto}\nCantidad: ${cantidad}\nCosto de envio: $${envio}\nTotal: $${precio}`)

// //Se crean nuevas nuevos elementos, en base a eso, se crea una variable ventas en donde decimos que venta1 y 2 van a ser el array de ventas y luego mediante el metodo map le modificamos el valor de precio, el cual nos lo muestra al final mediante 2 console.log. 
// const venta1 = new Carteles(producto, precio, cantidad)
// const venta2 = new Carteles(producto, precio, cantidad)

// let ventas = [venta1, venta2]
// console.log(ventas.map(ventaAModificar => ventaAModificar.precio))

// //Recorrido del array. 
// for(let ventaProd of ventas){
//     console.log(ventaProd)
// }

// console.log(`Precio final : ${venta1.precio}`)
// console.log(`Precio final : ${venta2.precio}`)
    