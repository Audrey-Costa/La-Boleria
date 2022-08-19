import connection from "../database.js";

async function searchClient(id){
    return connection.query(`SELECT * FROM clients WHERE id = $1`, [id]);
}

async function searchCake(id){
    return connection.query(`SELECT * FROM cakes WHERE id = $1`, [id]);
}

async function registerOrder(clientId, cakeId, quantity, totalPrice, createdAt){
    return connection.query(`INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice", "createdAt") VALUES ($1, $2, $3, $4, $5)`, [clientId, cakeId, quantity, totalPrice, createdAt]);
}

async function getOrders(){
    return connection.query(`SELECT id AS "orderId", "clientId" as client, "cakeId" as cake,"createdAt", quantity, "totalPrice", "isDelivered" FROM orders`)
}

async function getOrdersByDate(date){
    return connection.query(`SELECT id AS "orderId", "clientId" as client, "cakeId" as cake,"createdAt", quantity, "totalPrice", "isDelivered" FROM orders WHERE "createdAt" between $1 and $1`, [date + '%'])
}

async function getOrdersByid(id){
    return connection.query(`SELECT id AS "orderId", "clientId" as client, "cakeId" as cake,"createdAt", quantity, "totalPrice", "isDelivered" FROM orders WHERE id = $1`, [id]);
}

async function confirmOrderDelivery(id){
    return connection.query(`UPDATE orders SET "isDelivered" = true WHERE id = $1`, [id]);
}

export const ordersRepository = {
    searchClient,
    searchCake,
    registerOrder,
    getOrders,
    getOrdersByDate,
    getOrdersByid,
    confirmOrderDelivery
};