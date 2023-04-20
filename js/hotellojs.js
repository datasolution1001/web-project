let video = document.querySelector('#background-vd');
let button = document.querySelector('#change-back');
document.querySelector("#change-back").addEventListener( 'click' ,function() {

    video.style.display = video.style.display === 'block' ? 'none' : 'block';
    button.textContent = button.textContent === 'Show image' ? 'Show video' : 'Show image';
} ) 