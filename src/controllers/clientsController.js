import { clientsRepository } from "../repositories/clientsRepository.js";

export async function registerClient(req, res){
    const client = req.body;
    try {
        await clientsRepository.registerClient(client.name, client.address, client.phone);
        res.sendStatus(201);
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);        
    }
}