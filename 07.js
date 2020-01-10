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
        // Simulate database delay or heavy calculation
        await sleep(2000);
        const summary = "order id: " + this.id + ", message: " + this.message + ", delivered: " + this.delivered;
        return summary;
    }

    deliver = async () => {
        await sleep(1000);
        this.delivered = true;
    }
}

let order_obj = new order(1237, "Second order");

order_obj.deliver().then(() => {
    console.log("Delivered");
    return order_obj.summarize();
}).then((summary) => {
    console.log(summary);
});
