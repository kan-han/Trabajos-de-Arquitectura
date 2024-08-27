function mostrarSaludo(){
    const  saludo = document.getElementById('txtSaludo').value;
    alert(saludo);
}

function validarEdad(){
    const edad = document.getElementById('txtEdad').value;
    
    if(edad >=18){
        alert('Ya eres mayor de edad');
    }
    else{
        alert('Aún no eres mayor de edad');
    }
}