const doJob = require('./job.js').doJob;
// Style 1: Simple
async function SerialFlow() {
    let result1 = await doJob(1, 1);
    let result2 = await doJob(2, 2);
    let result3 = await doJob(3, 3);

    let finalResult = result1 + result2 + result3;
    console.log(finalResult);
    return finalResult;
}
// Style 2: Loop
async function SerialLoopFlow(jobs) {
    let finalResult = 0;
    for (const job of jobs) {
        let result = await doJob(job, job);
        finalResult += result;
    }
    console.log(finalResult);
}
// Style 3: Array.reduce
async function SerialReduceFlow(jobs) {
    let finalResult = await jobs.reduce(async (total, job) => {
        return await total + await doJob(job, job);
    }, 0);

    console.log(finalResult);
}

SerialFlow();
SerialLoopFlow([1, 2, 3]);
SerialReduceFlow([1, 2, 3]);
