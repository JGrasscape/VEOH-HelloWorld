class order {
    delivered = false;
    constructor(id, message) {
        this.id = id;
        this.message = message;
    }

    summarize() {
        const summary = "order id: " + this.id + ", message: " + this.message + ", delivered: " + this.delivered;
        return summary;
    }

    summarize_2 = () => {
        const summary = "order id: " + this.id + ", message: " + this.message + ", delivered: " + this.delivered;
        return summary;
    }
}

let order_obj = new order(1237, "Second order");

const order_summary = order_obj.summarize();
console.log(order_summary);

order_obj.delivered = true;
const order_summary2 = order_obj.summarize_2();
console.log(order_summary2);
