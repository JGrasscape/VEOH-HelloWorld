function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class worker {
    constructor(n_food) {
        this.n_food = n_food;
    }

    do_work = async (duration) => {
        if (this.n_food != 0) {
            await sleep(duration);
            this.n_food--;
            console.log("Ruokaa jäljellä: " + this.n_food);
            console.log("Työ valmis!");
        }
        else {
            console.log("Ei ruokaa!");
        }
    }
}

let worker_obj = new worker(3);

worker_obj.do_work(2000).then(() => {
    return worker_obj.do_work(1000);
}).then(() => {
    return worker_obj.do_work(3000);
}).then(() => {
    return worker_obj.do_work(2000);
}).then(() => {
    return worker_obj.do_work(1500);
});
