
// Synchronous Code Example
for (let i = 1; i <= 4; i++) {
    console.log(`Iteration: ${i}`);
}
/*
Expected output
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4

Every command waits for previous to finish
*/

// Asynchronous Code Example

// function start() {
//     console.log('start');
// }

// function inProgress() {
//     setTimeout(() => {
//         console.log('inProgress');
//     }, 0)
// }

// function end() {
//     console.log('end');
// }

// start();
// inProgress();
// end();

// setTimeout syntax
// setTimeout(callback, time);

setTimeout(() => {
    // do stuff
    // code inside will be executed 1 second delayed
}, 1000)


/**
 * Callback
 */

// You can use callback in 2 ways
// 1. abstraction
[1, 2, 3].map((num) => num * 2);


// 2. Async code

function start() {
    console.log('start');
}

function inProgress(myCallback) {
    setTimeout(() => {
        console.log('inProgress');

        // call callback
        myCallback();
    }, 5000)
}

function end() {
    console.log('end');
}


start();
inProgress(end);
// end();


// Async Callback Example

// function downloadImage(url, theCallback) {
//     setTimeout(()=> {
//         console.log(`Downloading image from ${url} ...`);
//         theCallback(url);
//     }, 3000)
// }

// const url1 = 'https://example.com/1.jpg';
// const url2 = 'https://example.com/2.jpg';

// downloadImage(url1, (myUrl)=> {
//     console.log(`Processing image from ${myUrl} ...`);
//     downloadImage(url2, (myUrl) => {
//         console.log(`Processing image from ${myUrl} ...`);
//         // CALLBECK HELL ...
//     })
// });

/*
NOT CORRECT: 
    downloadImage(url1);
    function processImage() {
        console.log(`Processing image from ${url1} ...`)
    }
    processImage();
*/

// Handle Errors in Callbacks

// function downloadImage(url, theCallback, failure) {
//     const rndNum = Math.floor(Math.random() * 10);

//     setTimeout(() => {
//         console.log(`Downloading image from ${url} ...`);
//         if (rndNum > 5) {
//             theCallback(url);
//         } else {
//             failure(`Failed while downloading image from ${url}`);
//         }
//     }, 3000)
// }

// const url1 = 'https://example.com/1.jpg';
// const url2 = 'https://example.com/2.jpg';

// downloadImage(url1, (myUrl) => {
//     console.log(`Processing image from ${myUrl} ...`);
// },
//     (err) => {
//         console.log("Error: ", err);
//     }
// );


// Create a simple promsie

const myPromise = new Promise((resolve, reject) => {
    // resolve('Fullfilled');
    // reject('Failed');
});

console.log(myPromise);

// Convert previous callback example to Promise 

function downloadImage(url) {
    // retun promose
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            // console.log(`Downloading image from ${url} ...`);
            // theCallback(url);
            resolve(`Downloading image from ${url} ...`);
        }, 3000)
    })

}

const url1 = 'https://example.com/1.jpg';
// downloadImage(url1)
// .then() // resolved
// .catch() // rejected

downloadImage(url1)
.then((res) => {
    console.log(res)
    console.log(`Processing image from ${url1} ...`);
})
.catch((err) => {console.log(err)}) 