// COMBINADOR DE COLORES PRIMARIOS PARA OBTENER LOS SECUNDARIOS Y ESCALA CROMATICA

let rojo, azul, amarillo , escala, color= prompt("Ingrese un 1er color primario: rojo, azul o amarillo \n tambien con ESCALA puede ver la escala cromática \n o ponga EXIT para terminar").toLocaleLowerCase()
let croma = ["verde","azul verdoso","azul","azul violeta","violeta","rojo violeta","rojo","rojo naranja","naranja","amarillo naranja","amarillo","amarillo verde"]

while(color != 'exit'){ 
        if (color=="rojo"){
          let otro= prompt("Ingrese un 2do color primario: azul o amarillo").toLocaleLowerCase()
            if(otro=="azul"){
                alert("El color es VIOLETA")
            }
            else if (otro=="amarillo"){
                alert("El color es NARANJA")
            }    
            else {
                alert("Casi, proba de nuevo")
            }                           
        }
       
        else if (color=="amarillo"){1
            otro= prompt("Ingrese un 2do color primario: azul o rojo").toLocaleLowerCase()
            if (otro=="azul"){
                alert("El color es VERDE")
            }
            else if (otro=="rojo"){
                alert("El color es NARANJA")
            }
            else {
                alert("No sabes los colores????")
            }         
        }

        else if(color=="azul"){
            otro= prompt("Ingrese un 2do color primario: amarillo o rojo").toLocaleLowerCase()
            if (otro=="amarillo"){
                alert("El color es VERDE")
            }
            else if (otro=="rojo"){
                alert("El color es VIOLETA")
            }
            else {
                alert("What????")
            }         
        }
        
        else if(color=="escala") { 
            for(let i=0; i<=11; i++){
                console.log(croma[i])
            }
            alert("En la consola podras ver en orden la escala cromatica")
        }
        else {
            alert("Que aprestaste?")
        }
       
        
    color= prompt("Vuelva a intentarlo, ingrese un 1er color primario: rojo, azul y amarillo \n tambien con ESCALA puede ver la escala cromática \n o ponga EXIT para terminar").toLocaleLowerCase()
}

alert("Gracias por venir! Por Alexis Bonetti")