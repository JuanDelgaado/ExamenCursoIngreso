
function mostrar()
{

	let tipo;
	let precio;
	let unidades;
	let inflamable;
	let marca;
	let contC = 0;
	let contI = 0;
	let contE = 0;
	let contAlc = 0;
	let contIAC = 0;
	let contQuat = 0;
	let contIac = 0;
	let acumUni = 0;
	let promedioA;
	let promedioQ;
	let promedioI;
	let maxPrecio = 0;
	let flag = 1;
	let acumAlc;
	let acumIac;
	let acumQuat;
	let maxTipoI; // tipo inflamable
	let maxUnidades;
	let IacUni; // unidades iac
	let maxTipo;
	let maxMarca;

	for(i=0;i<5;i++){
		tipo = prompt("Ingrese tipo Alcohol/iac/quat");
		while(tipo != "alcohol" && tipo != "iac" && tipo != "quat"){
		tipo = prompt("Error. Reingrese tipo Alcohol/iac/quat");
		}
		precio = parseInt(prompt("Ingrese precio valido de 100 a 300: "));
		while (precio < 100 || precio > 300 || isNaN(precio)){
		precio = parseInt(prompt("Error. Reingrese precio de 100 a 300: "));
		}
		unidades = parseInt(prompt("Ingrese la cantidad de unidades de 0 a 1000"));
		while(unidades <= 0 || unidades > 1000 || isNaN(unidades)){
		unidades = parseInt(prompt("Error. Reigrese la cantidad de unidades de 0 a 1000"));
		}
		inflamable = prompt("Ingrese tipo inflamable ignifugo/combustible/explosivo");
		while(inflamable != "ignifugo" && inflamable != "combustible" && inflamable != "explosivo"){
		inflamable = prompt("Error. Reingrese tipo inflamable ignifugo/combustible/explosivo");
		}
		marca = prompt("Ingrese marca: ");
		if (flag || precio > maxPrecio){
			maxPrecio =+ precio;
			maxMarca = marca;
			maxTipo = tipo;
			flag = 0;

		}
		switch(tipo){
			case "alcohol":
				contAlc++;
				break;
			case "iac":
				contIAC++;
				break;
			case "quat":
				contQuat++;
				break;	
				
		}
		if (inflamable == "combustible"){
			contC++;
			
		

		}else if(inflamable == "explosivo"){
			contE++;
			
		}else{
			contI++;
		}



		

		

	}
	if (tipo == "iac" && precio <= 200){
		contIac++;
	}
	maxInflamable = contI + contC + contE;
	

		promedioA = unidades / contAlc;
	

		promedioI = unidades / contIAC;
	
	
		promedioQ = unidades / contQuat;

	
	if(contC > contI && contC > contE){
		maxInflamable = "combustible";
	}else if (contI > contC && contI > contE){
		maxInflamable = "ignifugo";
	}else{
		maxInflamable = "explosivo";
	}

	console.log("a- El promedio de cantidad de alcoholes: " + promedioA + " de iac: " + promedioI +  " de quat: " + promedioQ );
	console.log("b- El tipo mas inflamable " + maxInflamable);
	console.log("c- Unidad de iac con precios menor a 200: " + contIac);
	console.log("d- la marca: " + maxMarca + " y tipo: " + maxTipo + " de producto mas caro.");






	
	
}