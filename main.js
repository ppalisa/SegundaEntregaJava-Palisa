// Segunda Entrega

let productos = [{ tipo: "Vela Aromática", precio: 10600}, { tipo: "Difusor", precio: 10000}];
let carrito = [];
let nombreCliente = "";

// Funcion cargar cliente


function cargarCliente(){
    let validacionUsuario = false
do{
    nombreCliente = prompt ("Bienvenido a Natural Mood, por favor ingrese su nombre");
    if (nombreCliente){
        validacionUsuario = true
        alert("Hola "+ nombreCliente +", ahora será dirigido a la tienda de Natural Mood");
    }else{
        validacionUsuario = false
        alert("No ingreso un nombre");
    }
}while (validacionUsuario == false)
}


//Funcion tienda

function tienda(){

    cargarCliente();

    let opciones;

    do{
        opciones = prompt(
            "Seleccione una opción:\n"+
            "1 - Ver productos disponibles \n"+
            "2 - Agregar al carrito\n"+
            "3 - Quitar del carrito\n"+
            "4 - Ver carrito\n"+
            "5 - Salir"
        )
        opciones = parseInt(opciones, 10)
        switch(opciones){
            case 1:
                mostrarProductos()
                break;
            case 2:
                agregarCarrito()
                break;
            case 3:
                quitarCarrito()
                break;
            case 4:
                verCarrito()
                break;
            case 5:
                alert("Gracias por venir")
                break;
            default:
                alert("Usted no ingreso una opción válida")
        }
    }while (opciones !== 5)
}

//Mostrar productos

function mostrarProductos(){
    let mensaje = "Nuestros productos son:\n"
    productos.forEach((producto, i) => {mensaje += `${i + 1}. ${producto.tipo} - $${producto.precio}\n`})
    alert(mensaje)
}

function agregarCarrito(){
    let opciones = prompt(
        "Para ingresar velas aromáticas ingrese 1\n"+
        "Para ingresar difusores ingrese 2"
    )
    parseInt(opciones, 10)
    if (opciones > 0 && opciones <= 2){
        carrito.push(productos[opciones - 1])
        alert("Producto agregado al carrito")
    } else{
        alert("Debe ingresar 1 o 2")
    }    
}

function quitarCarrito(){

    let mensaje = "Ingrese el número del producto que desea remover:\n"
    carrito.forEach((producto, i) => {mensaje += `${i + 1}. ${producto.tipo} - $${producto.precio}\n`})
    let opciones = prompt (mensaje
    )
    parseInt(opciones, 10)
    if (opciones > 0 && opciones <= carrito.length){
        carrito.splice(opciones - 1, 1)
        alert("Producto removido al carrito")
    } else{
        alert("Usted no removio ningún producto")
    }    
}

function verCarrito(){
    if (carrito.length === 0){
        alert("Usted no agregó ningún producto al carrito")
    } else{
        let mensaje = "Los productos en el carrito son:\n"
        carrito.forEach((producto, i) => {mensaje += `${i + 1}. ${producto.tipo} - $${producto.precio}\n`})
        alert(mensaje)

        let total = carrito.reduce((suma, producto) => suma + producto.precio, 0)
        alert(`El precio total de los productos hasta el momento es: $${total}`)
    }
}

tienda();