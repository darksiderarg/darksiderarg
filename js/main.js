function colorAleatorio(){  /*La idea es poder entregar un color diferente en cada llamada, para así, generar un
                            boton que cambie aleatoriamente los colores de los elementos en pantalla*/
    let valorMax = 0xFFFFFF;                    //Establecemos el valor max que puede tomar los colores
    let randomNum = Math.random() * valorMax;   //Retorna un numero aleatorio "floating-point" 
    randomNum = Math.floor(randomNum);          //Convertimos el numero "floating-point" a un entero
    randomNum = randomNum.toString(16);         //Convernitos el numero a uno hexagecimal
    randomNum = randomNum.padStart(6, 0);
    randomNum = randomNum.toUpperCase();
    let randColor = `#${randomNum}`;            //Nos aseguramos que sea de un largo de 6

    return randColor;
}

function charlemos(){
    let fondo = document.getElementById("bodyID");
    let foot = document.getElementById("footerID")
    fondo.style.background = 'linear-gradient('+colorAleatorio()+', '+colorAleatorio()+')';
    foot.style.background = 'linear-gradient('+colorAleatorio()+', '+colorAleatorio()+')';
}
