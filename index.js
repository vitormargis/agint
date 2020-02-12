const fs = require('fs');
const { exec } = require("child_process");
const CronJob = require('cron').CronJob;

const gitCommand = (msg) => {
    exec(`git add --all && git commit -am '${msg}' && git pull origin master && git push origin master`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });    
}

const job = new CronJob('*/1 * * * *', function() {
  console.log('You will see this message every second');
  fs.writeFile('date.txt', new Date(), function (err) {
    gitCommand(new Date())
  });
}, null, true, 'America/Los_Angeles');
job.start();

