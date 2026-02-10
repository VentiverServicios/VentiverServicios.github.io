function triggerBlackHoleEffect() {
    const blackHole = document.getElementById('black-hole');
    const errorText = document.getElementById('error-text');
    const scaryFace = document.getElementById('scary-face');
    const errorSound = document.getElementById('error-sound');
    const loadingCircle = document.getElementById('loading-circle');

    blackHole.classList.add('expand');
    errorSound.play();
    errorText.style.display = 'block';

    setTimeout(function() {
        scaryFace.style.display = 'block';
    }, 1000); 

    setTimeout(function() {
        errorText.style.display = 'none';
        scaryFace.style.display = 'none';
        loadingCircle.style.display = 'block'; 
    }, 3000); 

    setTimeout(function() {
        loadingCircle.style.display = 'none';
        window.location.href = "index.html"; 
    }, 6000);
}
