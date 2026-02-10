document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    const imgContainer = document.querySelector('.img-container');

    toggleBtn.addEventListener('click', () => {
        if (imgContainer.style.display === 'block') {
            imgContainer.style.display = 'none';
            toggleBtn.textContent = 'Mostrar Imágenes ▼';
        } else {
            imgContainer.style.display = 'block';
            toggleBtn.textContent = 'Ocultar Imágenes ▲';
        }
    });
});

