const cluster = require('cluster');
const os = require('os');

function numberOfUserInDB() {
    this.count = this.count || 5;
    this.count = this.count * this.count;
    return this.count;

}

if (cluster.isMaster) {
    const cpus = os.cpus().length;
    console.log(`forking for ${cpus} CPUS`);
    for (let i = 0; i < cpus; i++){
        cluster.fork();
    }
    const updateWorkers = () => {
        const usersCount = numberOfUserInDB();
        Object.values(cluster.workers).forEach(worker => {
            worker.send({usersCount});
        });
    }

    updateWorkers();
    setInterval(updateWorkers, 10000); // call every 10 second
   
} else {
    require('./cluster_server');
}