import connection from "../database.js";

async function registerClient(name, address, phone){
    return connection.query(`INSERT INTO clients (name, address, phone) VALUES ($1, $2, $3)`, [name, address, phone]);
}

async function searchClient(id){
    return connection.query(`SELECT id FROM clients WHERE id = $1`, [id]);
}

async function getClientOrders(id){
    return connection.query(`SELECT orders.id AS "orderId", quantity, "createdAt", "totalPrice", cakes.name AS "cakeName", "isDelivered" FROM orders JOIN cakes ON "cakeId" = cakes.id WHERE "clientId" = $1 order by "createdAt" DESC`, [id])
}
export const clientsRepository = {
    registerClient,
    searchClient,
    getClientOrders
};