const doJob = require('./job.js').doJob;

async function complexFlow() {
    try { 
      let result1 = await doJob(1, 1);
      let result2 = await doJob(2, 1);
   
      let Flow6_7 = async function() {
        let result6 = await doJob(6, 1);
        let result7 = await doJob(7, 1);
        return result6 + result7;
      }  
      let promises = [doJob(3, 2), doJob(4, 2), doJob(5, 2), Flow6_7()];
      let results = promises.map(async (job) => await job);
      let finalResult = result1 + result2;
      for (const result of results) {
        finalResult += (await result);
      }
      console.log(finalResult);
      return finalResult;  
    } catch (err) {
      console.log(err);
    }
  }
   
complexFlow();
console.log(
`
                        1
                        |
                        2
                        |
        ----------------O--------
        |               |       |
    ---------           6       |
    3   4   5           |       |
    ---------           7       |
        |               |       |
        |               |       |
        ----------------|-------O: error
                        |
                        |              
                      result
`
);