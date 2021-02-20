const { parentPort, isMainThread } = require('worker_threads');

if(!isMainThread){
    console.log("from a spawned thread !!");

    //throw new Error('Error thrown from worker !!')

    //process.exit(1);

    // parentPort.on('message', (data) => {
    //     console.log('From the Main Thread');
    // })

    parentPort.postMessage('Sending to the Main Thread !!')
}

    