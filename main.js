


function loguear(){


    let identificar = true
    let intentos = 1
    
    do{
        let usuario = prompt("ingresa tu usuario (solo 3 intentos)").toLowerCase()
        if(usuario === null){ 
            break
        }
    
        if(usuario== "javier","marcelo","macarena","ramiro"  && intentos <=3){
            alert("bienvenido a control de stock " + usuario)
            identificar = false
        }else{
            alert("no tenes autorizacion " + usuario)
            intentos++
            if(intentos >3){
                alert("no tenes permiso para stockear")
                console.error("no se reconoce el usuario")
                break
            }
        }
        
    }while(identificar)
    
}



loguear()





console.log("¡Bienvenido al sistema de gestión de productos de limpieza!")

const fechaActual = new Date()

console.log(fechaActual.toLocaleString())




const ProductoLimpieza = function(nombre, precio, stock) {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

let producto1 = new ProductoLimpieza("Detergente", 1200, 67)
let producto2 = new ProductoLimpieza("Limpiavidrios", 500, 10)
let producto3 = new ProductoLimpieza("Desinfectante", 700, 35)
let producto4 = new ProductoLimpieza("Escoba", 850, 17)
let producto5 = new ProductoLimpieza("Cepillo", 1000, 45)
let producto6 = new ProductoLimpieza("Jabón en Polvo", 3000, 150)
let producto7 = new ProductoLimpieza("Toallas de Papel", 1000, 300)
let producto8 = new ProductoLimpieza("Guantes de Limpieza", 1500, 10)
let producto9 = new ProductoLimpieza("Pefrume para Ropa", 900, 15)
let producto10 = new ProductoLimpieza("Trapo de piso", 500, 22)
let producto11 = new ProductoLimpieza("Papel Higienico", 2000, 300)
let producto12 = new ProductoLimpieza("Esponja", 300, 100)

let listaLimpieza = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12]



function filtrarProductosLimpieza() {
    let palabraClave = prompt("Que es lo que estas buscando?").toUpperCase().trim()
    let resultado = listaLimpieza.filter((x) => x.nombre.toUpperCase().includes(palabraClave))

    if (resultado.length > 0) {
        console.table(resultado)
    } else {
        alert("Ese productoi no hay en stock " + palabraClave)
        let respuesta = confirm("¿Queres agregarlo al stock?")

        if (respuesta === true) {
            agregarProductoLimpieza()
        }
    }
}

function agregarProductoLimpieza() {
    let nombre = prompt("Producto a agregar")
    let precio = parseFloat(prompt("Cual es el valor del producto"))
    let stock = parseInt(prompt("Cuantos hay en stock?"))

    if (isNaN(precio) || isNaN(stock) || nombre === "") {
        alert("El dato ingresado no es correcto intenta de nuevo")
        return
    }

    let producto = new ProductoLimpieza(nombre, precio, stock)
    listaLimpieza.push(producto)
    console.table(listaLimpieza)
}




