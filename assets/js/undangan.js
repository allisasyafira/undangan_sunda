

function copyToClipboard() {
    const input = document.getElementById("myInput");
    input.select(); // Select the text
    navigator.clipboard.writeText(input.value) // Use the Clipboard API
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

function bukaundangan() {
    const nav = document.querySelector('#buka');
    nav.style.display = "block";
}

function putarLagu(){
    
    const lagu = document.querySelector('#lagu');
    const tombol = document.querySelector('#kontrol');
    if(lagu.paused){
        lagu.play();
        tombol.src = 'assets/img/on.png';
    }else{
        lagu.pause();
        tombol.src = 'assets/img/off.png';
    }
}
function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    if (navList.style.display === 'block') {
        navList.style.display = 'none'; // Hide the menu if it's already shown
    } else {
        navList.style.display = 'block'; // Show the menu if it's hidden
    }
}
