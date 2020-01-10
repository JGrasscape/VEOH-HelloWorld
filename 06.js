function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class order {
    delivered = false;
    constructor(id, message) {
        this.id = id;
        this.message = message;
    }

    summarize = async () => {
        console.log("Start");
        await sleep(2000);
        const summary = "order id: " + this.id + ", message: " + this.message + ", delivered: " + this.delivered;
        console.log("End");
        return summary;
    }
}

let order_obj = new order(1237, "Second order");

console.log("AAA");

const order_summary = order_obj.summarize().then((order_summary) => {
    console.log(order_summary);
});

console.log("BBB");
