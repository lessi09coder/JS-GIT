// SELECCIONADOR DE PERROS


//AGREGAR LOS PERROS DEL RECINTO


class Adopcion {
    constructor(nombre,raza,tamaño,color,sexo, castrado, adoptado) {
        this.nombre = nombre;
        this.raza = raza;
        this.tamaño = tamaño;
        this.color = color;
        this.sexo = sexo;
        this.castrado = castrado
        this.adoptado = adoptado
    }   
    
    razaA(buscar){
        if (buscar == this.raza){
            return true
        } else if (buscar== this.tamaño){
            return true
        } else if (buscar== this.color){
            return true
        } else if (buscar== this.sexo){
            return true}
        else return false
    } 
}


const perro1 = new Adopcion ('Sudan', 'labrador', 'grande', 'amarillo','macho',false, false)
const perro2 = new Adopcion ('Berna', 'pitbull', 'mediano', 'blanco atigrado','hembra',false ,false)
const perro3 = new Adopcion ('Pluto', 'bulldog', 'pequeño', 'gris','macho',true , false)
const perro4 = new Adopcion ('Nala', 'gran danes', 'mediano', 'negro-blanco','hembra',true, false)

console.log(perro1,perro2,perro3,perro4)


//Buscador de perros
let buscar= prompt("ingrese un/una: raza, tamaño, color o sexo para buscar un perro o EXIT para salir \n    (razas ejemplo: labrador, pitbull,bulldog, gran danes) \n   (tamaño ejemplos pequeño, mediano, grande) \n   (color ejemplo: amarillo, blanco atigrado, gris, negro-blanco \n    sexo ejemplo: macho o hembra" )
while(buscar != 'EXIT'){
    if(perro1.razaA(buscar)){
        alert("Hay disponible un perro " + buscar + " que se llama " + perro1.nombre) 
    } 
    if (perro2.razaA(buscar)){
        alert("Hay disponible un perro " + buscar + " que se llama " + perro2.nombre) 
    } 
    if (perro3.razaA(buscar)){
        alert("Hay disponible un perro " + buscar + " que se llama " + perro3.nombre) 
    } 
    if (perro4.razaA(buscar)){
        alert("Hay disponible un perro " + buscar + " que se llama " + perro4.nombre) 
    }else alert("vuelva a intentarlo");

    buscar = prompt("Vuelva a intentarlo: nombre, raza, tamaño, color, sexo, castrado o adoptado para buscar un perro o EXIT para salir \n    (razas ejemplo: labrador, pitbull,bulldog, gran danes) \n   (tamaño ejemplos pequeño, mediano, grande) \n   (color ejemplo: amarillo, blanco atigrado, gris, negro-blanco \n    sexo ejemplo: macho o hembra ")
}

let rebuscar= prompt("Ingrese castrado para ver la lista de perros dispobibles.. o EXIT para terminar")
while(rebuscar != 'EXIT'){
   if(perro1.castrado){
    alert(perro1.nombre+" esta castrado!")
   } else alert(perro1.nombre +" no esta castrado" )
   if(perro2.castrado){
    alert(perro2.nombre+" esta castrado!")
   } else alert(perro2.nombre +" no esta castrado" )
   if(perro3.castrado){
    alert(perro3.nombre+" esta castrado!")
   } else alert(perro3.nombre +" no esta castrado" )
   if(perro4.castrado){
    alert(perro4.nombre+" esta castrado!")
   } else alert(perro4.nombre +" no esta castrado" )
   rebuscar= prompt("Ingrese de nuevo castrado para ver la lista de perros dispobibles.. o EXIT para terminar ")
}
alert("Gracias por buscar un perrito con nostros, vuelva pronto!")

