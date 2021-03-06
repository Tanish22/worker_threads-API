const { Worker, isMainThread, workerData } = require('worker_threads');
// const express = require('express');
// const app = express();

// const PORT = 4400;

let worker;
if(isMainThread){
    console.log('from main thread');
    worker = new Worker('./threads/workerThread1.js');

    // executed when parent thread receives data from a WT
    worker.on('message', (data) => {
        console.log("data : ", data)
    })

    worker.on('error', (data) => {
        console.log("Thrown from worker !!", data);
    })

    worker.on('exit', (data) => {
        console.log('worker terminated !!', data);
    })
}

// app.get('/', (req, res) => {
//     worker.postMessage('from main thread !!');
// })

// app.listen(PORT, () => {
//     console.log(`listening on port ${4800}`);
// })