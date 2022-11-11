//Mini tienda de mascotas

//1 Saludar al usuario 
//2 Ingresar nombre y apellido
//3 Preguntar si es cliente o no
//4 Preguntar si desea registrarse en la página
//5 Salir

let nombreUsuario = parseInt(prompt("Hola!!! Es usted cliente? 1) Sí. 2) No."));
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

do {
    opcionMenu = prompt('¿Su mascota es 1)Perro. 2) Gato. 3)Otro. 4)Salir');
    switch (opcionMenu) {
        case '1':
            //mascotaPerro();
            prompt('Elija la opción que desea comprar. \nLos alimentos sugeridos para perros son: 1)Royal Canin. 2)ProPlan. 3)Excellent. 4)Old Prince');
            if (mascotaPerro ==1){
                alert('La opción que escogió fue Royal Canin');
            }
            else if (mascotaPerro =2){
                alert('La opción que escogió fue ProPlan');
            }
            else if (mascotaPerro ==3){
                alert('La opción que escogió fue Excellent');
            }
            else if (mascotaPerro ==4){
                alert('La opción que escogió fue Old Prince');
            }
            else {
                alert('Debe ingresar una opción válida, por favor, vuelva a leer el menú de opciones');
            }
    

            break;
        case '2':
            //mascotaGato();
            prompt('Elija la opción que desea comprar. \nLos alimentos sugeridos para gatos son: 1)Royal Canin. 2)ProPlan. 3)Excellent. 4)Purina Cat Show');
            if (mascotaGato ==1){
                alert('La opción que escogió fue Royal Canin');
            }
            else if (mascotaGato >=2){
                alert('La opción que escogió fue ProPlan');
            }
            else if (mascotaGato ==3){
                alert('La opción que escogió fue Excellent');
            }
            else if (mascotaGato ==4){
                alert('La opción que escogió fue Purina Cat Show');
            }
            else {
                alert('Debe ingresar una opción válida, por favor, vuelva a leer el menú de opciones');
            }
            
            break;
        case '3':
            //mascotaOtro();
            prompt('Ingrese la clase de animal');
            alert('Un agente comercial se contactará con usted a la brevedad posible');
            break;
        case '4':
            //adios();
            alert('Gracias por su visita');
            break;
        default:
            ('Ingrese una opción que sea válida');

    }

} while (opcionMenu !== '4');