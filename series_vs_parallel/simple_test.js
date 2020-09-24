// Simple
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function series() {
    await wait(5000); // Wait 500ms…
    await wait(5000); // …then wait another 500ms.
    console.log('series');
}
async function parallel() {
    const wait1 = wait(5000); // Start a 500ms timer asynchronously…
    const wait2 = wait(5000); // …meaning this timer happens in parallel.
    await wait1; // Wait 500ms for the first timer…
    await wait2; // …by which time this timer has already finished.
    console.log("parallel");
}
series();
parallel();