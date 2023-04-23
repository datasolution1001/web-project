//Start Toggle navBar
let navBar = document.querySelector('#nav-bar');
let menus_btn = document.querySelector('.toggle-menu');
let close_btn = document.querySelector('.btn-close');
document.querySelector(".toggle-menu").addEventListener( 'click' ,function() {
    navBar.style.display = "flex";
    navBar.style.right = "0";
})
document.querySelector(".btn-close").addEventListener( 'click' ,function() {
    navBar.style.right = "-100%";
})
document.querySelector("#link1").addEventListener( 'click' ,function() {
    navBar.style.right = "-100%";
})
document.querySelector("#link2").addEventListener( 'click' ,function() {
    navBar.style.right = "-100%";
})
document.querySelector("#link3").addEventListener( 'click' ,function() {
    navBar.style.right = "-100%";
})
document.querySelector("#link4").addEventListener( 'click' ,function() {
    navBar.style.right = "-100%";
})
document.querySelector("#link5").addEventListener( 'click' ,function() {
    navBar.style.right = "-100%";
})

//End Toggle navBar



//Start background landing
let video = document.querySelector('#background-vd');
let button = document.querySelector('#change-back');
document.querySelector("#change-back").addEventListener( 'click' ,function() {

    video.style.display = video.style.display === 'block' ? 'none' : 'block';
    button.textContent = button.textContent === 'Show image' ? 'Show video' : 'Show image';
} ) 
//End Background landing
//Start tours cards

let card8 = document.querySelector('#card8');
let flipCard8 = document.querySelector('#flip-8')
document.querySelector("#flip8").addEventListener( 'click' ,function() {
    
        card8.style.transform = ' translate(100%) rotateY(-180deg)';
} ) 

flipCard8.onclick = function() {
    card8.style.transform = '';
}
let card7 = document.querySelector('#card7');
let flipCard7 = document.querySelector('#flip-7')
document.querySelector("#flip7").addEventListener( 'click' ,function() {
    
        card7.style.transform = ' translate(100%) rotateY(-180deg)';
} ) 

flipCard7.onclick = function() {
    card7.style.transform = '';
}
let card6 = document.querySelector('#card6');
let flipCard6 = document.querySelector('#flip-6')
document.querySelector("#flip6").addEventListener( 'click' ,function() {
    
        card6.style.transform = ' translate(100%) rotateY(-180deg)';
} ) 

flipCard6.onclick = function() {
    card6.style.transform = '';
}
let card5 = document.querySelector('#card5');
let flipCard5 = document.querySelector('#flip-5')
document.querySelector("#flip5").addEventListener( 'click' ,function() {
    
        card5.style.transform = ' translate(100%) rotateY(-180deg)';
} ) 

flipCard5.onclick = function() {
    card5.style.transform = '';

}
let card4 = document.querySelector('#card4');
let flipCard4 = document.querySelector('#flip-4')
document.querySelector("#flip4").addEventListener( 'click' ,function() {
    
        card4.style.transform = ' translate(100%) rotateY(-180deg)';
} ) 

flipCard4.onclick = function() {
    card4.style.transform = '';

}
let card3 = document.querySelector('#card3');
let flipCard3 = document.querySelector('#flip-3')
document.querySelector("#flip3").addEventListener( 'click' ,function() {
    
        card3.style.transform = ' translate(100%) rotateY(-180deg)';
} ) 

flipCard3.onclick = function() {
    card3.style.transform = '';

}
let card2 = document.querySelector('#card2');
let flipCard2 = document.querySelector('#flip-2')
document.querySelector("#flip2").addEventListener( 'click' ,function() {
    
        card2.style.transform = ' translate(100%) rotateY(-180deg)';
} ) 

flipCard2.onclick = function() {
    card2.style.transform = '';

}
let card1 = document.querySelector('#card1');
let flipCard1 = document.querySelector('#flip-1')
document.querySelector("#flip1").addEventListener( 'click' ,function() {
    
        card1.style.transform = ' translate(100%) rotateY(-180deg)';
} ) 

flipCard1.onclick = function() {
    card1.style.transform = '';

}
//End tours cards
// Start Servives 
let room = document.querySelector('#room');
document.querySelector("#slide-room").addEventListener('click' ,function() {
    room.style.top = ' 0';
} )
document.querySelector("#slide-room-less").addEventListener('click' ,function() {
    room.style.top = ' 100%';
} )
let rest = document.querySelector('#rest');
document.querySelector("#slide-rest").addEventListener('click' ,function() {
    rest.style.top = ' 0';
} )
document.querySelector("#slide-rest-less").addEventListener('click' ,function() {
    rest.style.top = ' 100%';
} )
let pool = document.querySelector('#pool');
document.querySelector("#slide-pool").addEventListener('click' ,function() {
    pool.style.top = ' 0';
} )
document.querySelector("#slide-pool-less").addEventListener('click' ,function() {
    pool.style.top = ' 100%';
} )
//End Services

