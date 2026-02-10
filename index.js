document.addEventListener('DOMContentLoaded', () => {
    const alerta = document.getElementById('alerta');
    alerta.classList.add('show'); 

 
    window.cerrarAlerta = function() {
        alerta.style.transform = 'translateX(-50%) translateY(100%)'; 
        setTimeout(() => {
            alerta.classList.remove('show');
        }, 500); 
    }
});

function generarBaseDeDatos() {
    let baseDeDatos = [];

    for (let i = 1; i <= 10000; i++) {
       
        let registro = {
            id: i,
            nombre: `Producto ${i}`,
            valor: (Math.random() * 1000).toFixed(2),
            descripcion: `Descripción del producto ${i}`
        };
        baseDeDatos.push(registro);
    }
    
    return baseDeDatos;
}


