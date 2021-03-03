function mostrar()
{
	let nombre;
	let estadoCivil;
	let edad;
	let temperatura;
	let sexo;
	let seguir;
	let contAdultos = 0;
	let precio = 600;
	let contPers = 0;
	let flag = 1;
	let contAV; // anciano viudo
	let maxNombre;
	let maxEdad;
	let total;
	let totalDescuento;
	do{
		nombre = prompt ("Ingrese nombre:");
		estadoCivil = prompt("Ingrese estado civil soltero/casado/viudo: ");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
		estadoCivil = prompt("Error. Reingrese estado civil soltero/casado/viudo: ");

		}
		edad = parseInt(prompt("Ingrese la edad (solo mayores): "));
		while (edad < 18 || isNaN (edad)){
		edad = parseInt(prompt("Error. Reingrese la edad (solo mayores): "));
		}
		temperatura = parseInt(prompt("Ingresar temperatura corporal: "))
		while (temperatura < 0 || isNaN (temperatura)){
		temperatura = parseInt(prompt("Error. Reingresar temperatura corporal: "));
		}
		sexo = prompt("Ingresar sexo m/f");
		while(sexo != "f" && sexo != "m"){
		sexo = prompt("Error. Reingresar sexo m/f");
		}
		if(estadoCivil == "viudo" && edad > 60){
			contAV++;

		}
		if(flag || sexo == "f" && estadoCivil == "soltero"){
			maxNombre = nombre;
			maxEdad = edad;
			flag = 0;
		}



		if (edad > 60){

			contAdultos++;

		}




		seguir = prompt("Desea ingresar otro pasajero? ");
		contPers++;
	}while(seguir == "s");
	total = contPers * precio;

	console.log("a- La cantidad de personas con estado viudo con +60 años: " + contAV);
	console.log ("b- El nombre: " + maxNombre  + " y la edad: " + maxEdad + " de la mujer soltera.");
	console.log ("c- El viaje sin descuento: $ " + total);
	if(contPers / contAdultos ){
		totalDescuento = total - (total * 0.25 );

		console.log ("d- el precio final con descuento es: " + totalDescuento);
	}


	
	



}
