import connection from "../database.js";

async function searchFlavour(id){
    return connection.query(`SELECT id FROM flavours WHERE id = $1`, [id]);
}

async function registerCake(cake){
    return connection.query(`INSERT INTO cakes (name, price, image, description, "flavourId") VALUES ($1, $2, $3, $4, $5)`,
    [cake.name, cake.price, cake.image, cake.description, cake.flavourId]);
}

export const cakeRepository = {
    searchFlavour,
    registerCake
};