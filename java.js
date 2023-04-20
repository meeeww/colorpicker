function cambiarColor(color){
    console.log(color)
    const cuadrado = document.querySelector('.cuadradoCambio')

    switch(color){
        case "azul":
            cuadrado.style.backgroundColor = ('blue');
            break;
        case "rojo":
            cuadrado.style.backgroundColor = ('red');
            break;
        case "verde":
            cuadrado.style.backgroundColor = ('green');
            break;
        case "amarillo":
            cuadrado.style.backgroundColor = ('yellow');
            break;
    }
}