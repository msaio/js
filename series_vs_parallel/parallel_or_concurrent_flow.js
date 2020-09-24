const doJob = require('./job.js').doJob;

// Style 1: Simple
async function ParallelFlow() {
    let result1 = doJob(1, 1);
    let result2 = doJob(2, 2);
    let result3 = doJob(3, 3);

    let r1 = await result1;
    let r2 = await result2;
    let r3 = await result3;
    let finalResult = r1 + r2 + r3;
    // In shortcut
    // let finalResult = await result1 + await result2 + await result3;

    console.log(finalResult);
    return finalResult;
}

// Style 2: .map()
async function ParallelMapFlow(jobs) {
    let results = jobs.map(async (job) => await doJob(job, job));
    let finalResult = 0;
    for (const result of results) {
        finalResult += (await result);
    }
    console.log(finalResult);
}

// Style 3: Promise.all()
async function ParallelPromiseAllFlow(jobs) {

    let promises = jobs.map((job) => doJob(job, job));
    let results = await Promise.all(promises)
    let finalResult = 0;
    for (const result of results) {
        finalResult += (await result);
    }
    console.log(finalResult);
}

ParallelFlow();
ParallelMapFlow([1, 2, 3]);
ParallelPromiseAllFlow([1, 2, 3]);
