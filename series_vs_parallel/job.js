module.exports.doJob = function (x, sec) {
    //if (x == 10) {
        //throw Error('test error');
    //}
    return new Promise(resolve => {
        console.log('Start: ' + x);
        setTimeout(() => {
            console.log('End: ' + x);
            resolve(x);
        }, sec * 1000);
    });
}
