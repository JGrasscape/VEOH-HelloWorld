let order = {
    id: 1234,
    message: "My order",
    delivered: false
}

function summarize_order(id, message, delivered)
{
    const summary = "order id: " + id + ", message: " + message + ", delivered: " + delivered;
    return summary;
}

const order_summary = summarize_order(order.id, order.message, order.delivered);
console.log(order_summary);

order.delivered = true;
const order_summary2 = summarize_order(order.id, order.message, order.delivered);
console.log(order_summary2);

// Error
// order_id = 5432;
// const order_summary3 = summarize_order(order_id, order_message, order_delivered);
// console.log(order_summary3);
