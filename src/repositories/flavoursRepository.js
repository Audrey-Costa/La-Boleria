import connection from "../database.js";

async function searchFlavour(name){
    return connection.query(`SELECT name FROM flavours WHERE name = $1`, [name]);
}

async function registerFlavour(name){
    return connection.query(`INSERT INTO flavours (name) VALUES ($1)`, [name]);
}

export const flavoursRepository = {
    searchFlavour,
    registerFlavour
};