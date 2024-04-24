function generarSecuencia() {
    const numero = parseInt(document.getElementById('numero').value);
    const secuencia = [numero];//creo una constante 
    let num = numero; // declaro num que lo igualka a numero

    while (num !== 1) { // hace el while mientras que el numero no sea 1
        if (num % 2 === 0) {//ve si el numero dividido por 2 da resto 0  
           num = num / 2; // en caso de ser par lo divide por 2
        } else {
           num = num * 3 + 1; // en caso de ser impar lo multiplica por 3 y le suma 1
        }
        secuencia.push(num);     // Agregar el numero actual a la secuencia
    }
    //Obtiene el elemento id donde se mostrara el resultado
    const result = document.getElementById('resultado');
    //muestra el resultado a traves del html
    result.innerHTML = `<p>Longitud de la secuencia: ${secuencia.length}</p>`;
    result.innerHTML += `<p>Número más grande en la secuencia: ${Math.max(...secuencia)}</p>`;
    result.innerHTML += `<p>Secuencia: ${secuencia.join(', ')}</p>`;
}



