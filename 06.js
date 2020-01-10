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

        // Simulate database delay or heavy calculation
        await sleep(2000);
        const summary = "order id: " + this.id + ", message: " + this.message + ", delivered: " + this.delivered;
        console.log("End");
        return summary;
    }

    deliver = async () => {
        await sleep(1000);
        this.delivered = true;
    }
}

let order_obj = new order(1237, "Second order");

console.log("AAA");

//console.log(order_obj.summarize());

const order_summary = order_obj.summarize().then((order_summary) => {
    console.log(order_summary);
});

console.log("BBB");

order_obj.deliver();

const order_summary2 = order_obj.summarize().then((order_summary2) => {
    console.log(order_summary2);
});
