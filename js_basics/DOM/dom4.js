/**
 * DOM Events
 */

/**
 * 1. Mouse events
 */

// click
const clickBtn = document.getElementById('clickBtn');

// clickBtn.addEventListener('click', (event) => {
//     console.log('You clicked => ', event.target);
// });

// dblclick
const dblclick = document.getElementById('dblclickBtn');

dblclick.addEventListener('dblclick', (event) => {
    console.log('You double clicked => ', event.target);
});

// mousedown
const mousedownBtn = document.getElementById('mousedownBtn');

mousedownBtn.addEventListener('mousedown', (event) => {
    console.log('You pressed down => ', event.target);
})

// mouseup
const mouseupBtn = document.getElementById('mouseUpBtn');

mouseupBtn.addEventListener('mouseup', (event) => {
    console.log('You released button => ', event.target);
});

// mousemove
const mouseMoveBtn = document.getElementById('mouseMoveBtn');

mouseMoveBtn.addEventListener('mousemove', (event) => {
    console.log('You moving inside button => ', event.target);
});


// mouseout
const mouseOutBtn = document.getElementById('mouseOutBtn');

mouseOutBtn.addEventListener('mouseout', (event) => {
    console.log('You going out from button => ', event.target);
});


/**
 * 2. Keyword Events
 */

const body = document.querySelector('body');

// keydown
body.addEventListener('keydown', (event) => {
    // if(event.key === 13) {
        console.log('Keydown event => ', event.target);
    // }
});

// keyup
body.addEventListener('keyup', (event) => {
        console.log('Keyup event => ', event.target);
});

// keypress
body.addEventListener('keypress', (event) => {
    console.log('Keypress event => ', event.target);
});











