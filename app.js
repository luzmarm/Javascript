//Mini tienda de mascotas

//1 Saludar al usuario 
//2 Ingresar nombre y apellido
//3 Preguntar si es cliente o no
//4 Preguntar si desea registrarse en la página
//5 Salir

const nombreUsuario = parseInt(prompt("Hola!!! Es usted cliente? 1) Sí. 2) No."));
if (nombreUsuario == 1) {
    parseInt(prompt("Ingrese su nombre y apellido para validar sus datos"));
    alert("Bienvenido");

} else if (nombreUsuario == 2) {
    parseInt(prompt("Si desea registrarse ingrese sus datos"));
    alert("Ya está registrado en nuestra web, puede continuar");
} else {
    parseInt(prompt("Debe ingresar una opción válida en el sistema"));
    alert('Opción inválida, ingrese opción 1 ó 2');

}



let opcionMenu = 0;
let mascotaPerro = 0;
let mascotaGato = 0;
let mascotaOtro = 0;

    opcionMenu = prompt('¿Su mascota es 1)Perro. 2) Gato. 3)Otro. 4)Salir');
    switch (opcionMenu) {
        case '1':
            //mascotaPerro();
            mascotaPerro = prompt('Los alimentos sugeridos para perros son: 1)Royal Canin. 2)ProPlan. 3)Excellent. 4)Old Prince');
            if (mascotaPerro == '1'){
                alert('Tu mascota recibirá la gama completa y equilibrada de nutrientes y aminoácidos que necesita para desarrollar músculos fuertes, conservar un cuerpo sano y mantener un sistema inmunitario resistente. Dale toda la energía que necesita para prosperar y vivir con el mejor estado de salud posible.');
            }
            else if (mascotaPerro = '2'){
                alert('ProPlan no es una de las mejores comidas para perros y gatos por pura suerte, se trata de una marca con larga tradición y experiencia, y eso se nota en el resultado final. Un alimento de alta calidad, con gran concentración de proteínas, grasas y fibras, siendo las que mayor contenido de esto tienen.');
            }
            else if (mascotaPerro == '3'){
                alert('Excellent es una línea para perros y gatos que presenta un sistema de nutrición completo y balanceado de alta calidad desarrollado por veterinario');
            }
            else if (mascotaPerro == '4'){
                alert('Old Prince es la línea Premium de alimento para perros y gatos. No contiene soja ni sus derivados y utiliza ingredientes superiores de origen natural para brindar la más alta calidad. Además, cuenta con fórmulas desarrolladas según las necesidades específicas cubriendo todos los requerimientos nutricionales.');
            }
            else {
                alert('Debe ingresar una opción válida, por favor, vuelva a leer el menú de opciones');
            }
    

            break;
        case '2':
            //mascotaGato();
            mascotaGato = prompt('Los alimentos sugeridos para gatos son: 1)Royal Canin. 2)ProPlan. 3)Excellent. 4)Purina Cat Show');
            if (mascotaGato ==1){
                alert('Royal Canin es una de las marcas más prestigiosas por excelencia cuando se trata de comida de calidad para tus mascotas. No se necesita de mucho alimento para tener a tu gato saludable y feliz. El reverso del producto señala la cantidad necesaria de acuerdo al peso y la talla.');
            }
            else if (mascotaGato >=2){
                alert('Purina Pro Plan es una opción alimenticia de calidad Premiun para los gatos. Su alto contenido nutricional y la tecnología moderna con la que están elaborados sus productos lo mantienen entre los preferidos en el mercado.');
            }
            else if (mascotaGato ==3){
                alert('Purina Excellent ofrece una fórmula completa que incluye tocoferoles mezclados fuente de vitamina E, y sin colorantes ni saborizantes artiﬁciales aportando un óptimo balance nutricional y un sabor irresistible.');
            }
            else if (mascotaGato ==4){
                alert('El alimento de Purina Cat Chow contiene tres fuentes de proteína distintas ya que está hecho con pollo, carne de res y salmón que ayudarán a tu gato a conservar su masa muscular.');
            }
            else {
                alert('Debe ingresar una opción válida, por favor, vuelva a leer el menú de opciones');
            }
            
            break;
        case '3':
            //mascotaOtro();
            mascotaOtro= prompt('Ingrese la clase de animal');
            alert('Un agente comercial se contactará con usted a la brevedad posible');
            break;
        case '4':
            //adios();
            alert('Gracias por su visita');
            break;
        default:
            ('Ingrese una opción que sea válida');

    } while (opcionMenu !== '4');

    class stockAlimentos{
        constructor(nombre, precio, stock) {
            this.nombre = nombre;
            this.precio = precio;
            this.stock = stock;
            this.disponible = true; 
        }

            vender(cantidad){
                this.stock -= cantidad;
                if(this.stock < 1){
                    this.disponible = false;
                }
            }

        }

    let alimentosPerro = [];
    alimentosPerro.push (new alimento('Royal Canin', 4550, 4));
    alimentosPerro.push (new alimento('ProPlan', 3720, 17));
    alimentosPerro.push (new alimento('Excellent', 2480, 25));
    alimentosPerro.push (new alimento('Old Prince', 4700, 6));


    let alimentosGato = [];
    alimentosGato.push (new alimento('Royal Canin', 4800, 10));
    alimentosGato.push (new alimento('ProPlan', 2800, 19));
    alimentosGato.push (new alimento('Excellent', 1540, 25));
    alimentosGato.push (new alimento('Purina Cat Show', 1200, 2));

    let alimentoSeleccionadoPerro = 0;
    let alimentoSeleccionadoGato = 0;

    alimentoElegido = prompt('Ingrese el nombre del alimento que desea adquirir de nuestra tienda');
    let existe = false;
    let posicion = -1;
    alimentosEnVenta.forEach((alimento, indice)=> {
        if (alimentoElegido === alimento.nombre){
            existe = true;
            posicion = indice;
        }
    });
 
    if (existe){
        let cantidad = parseInt(prompt('Cuántos kg desea comprar?'));
        alimentosPerro[posicion].vender(cantidad);

        if(alimentosGato[posicion].disponible){
            alimentosGato.splice(posicion, 1);
        }

        

         }

         if (existe){
            let cantidad = parseInt(prompt('Cuántos kg desea comprar?'));
            alimentosGato[posicion].vender(cantidad);
    
            if(alimentosGato[posicion].disponible){
                alimentosGato.splice(posicion, 1);
            }
    
            
    
             }