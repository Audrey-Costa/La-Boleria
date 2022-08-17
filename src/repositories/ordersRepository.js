import connection from "../database.js";

async function searchClient(id){
    return connection.query(`SELECT id FROM clients WHERE id = $1`, [id]);
}

async function searchCake(id){
    return connection.query(`SELECT id, price FROM cakes WHERE id = $1`, [id]);
}

async function registerOrder(clientId, cakeId, quantity, totalPrice, createdAt){
    return connection.query(`INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice", "createdAt") VALUES ($1, $2, $3, $4, $5)`, [clientId, cakeId, quantity, totalPrice, createdAt]);
}

export const ordersRepository = {
    searchClient,
    searchCake,
    registerOrder
};