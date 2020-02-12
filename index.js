var fs = require('fs');
const { exec } = require("child_process");

const gitCommand = () => {
    exec(" git add --all && git commit -am 'Update' && git pull origin master && git push origin master", (error, stdout, stderr) => {
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

fs.writeFile('date.txt', new Date(), function (err) {
  gitCommand()
});
