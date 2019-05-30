document.getElementById('btn').addEventListener('click', function(){

    // Recibir valores
	errorEstatico = document.getElementById('error').value;
	let X_actual = document.getElementById('x0').value;
    let Y_actual = document.getElementById('y0').value;
	table = document.getElementById('tbl');

    // Limpiar tabla
    table.innerHTML = `<tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>Error</th>
                    <th>Iteracciones</th>
                </tr>`;

	let X_anterior=0;
    let Y_anterior=0;

	let aux = true;

	let iteracciones = 0;

	while (aux) {

        //contamos el numero de iteracciones que necesita el programa para llegar al resultado
        iteracciones++;

        X_anterior = X_actual;
        Y_anterior = Y_actual;

        //Hallamos X
        X_actual = hallarX(Y_anterior);

        // Hallamos Y
        Y_actual = hallarY(X_anterior);
        
        //Hallamos el epsilon
        e = Math.abs(hallarError(X_actual, X_anterior, Y_actual, Y_anterior));

        //Si el epsilon es menor o igual al error dado por el usuario, imprimimos el resultado
        if(e <= errorEstatico) {
            aux = false;
        }
        
        var row = table.insertRow(1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = X_actual;
        cell2.innerHTML = Y_actual;
        cell3.innerHTML = e;
        cell4.innerHTML = iteracciones;

    }

});

function hallarX(Yi){
    let ecuacion = (1/4) - (2/4) * Yi;
    return ecuacion;
}

function hallarY(Xi){
    let ecuacion = (2/5) + (2/5) * Xi;
    return ecuacion;
}

//Fórmula para hallar error
function hallarError(Xactual, Xanterior, Yactual, Yanterior){
    let x_difference = Xactual - Xanterior;
    let y_difference = Yactual - Yanterior;
    if(x_difference > y_difference){
        return x_difference;
    }else{
        return y_difference;
    }
}